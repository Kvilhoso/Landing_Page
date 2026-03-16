import { memo, useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  label: string;
}

function StatCounter({ value, suffix = '', decimals = 1, duration = 1800, label }: StatCounterProps) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setDisplay((value * ease).toFixed(decimals));
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(value.toFixed(decimals));
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) run(); }, { threshold: 0.01 });
    io.observe(el);
    const t = setTimeout(run, 1400); // hard fallback

    return () => { io.disconnect(); clearTimeout(t); };
  }, [value, duration, decimals]);

  return (
    <div ref={ref} className='flex flex-col items-center py-8 px-4'>
      <span className='text-5xl md:text-6xl font-light text-[#c9a84c] tracking-tight tabular-nums'>
        {display}{suffix}
      </span>
      <span className='text-xs uppercase tracking-widest text-gray-500 mt-3 text-center'>
        {label}
      </span>
    </div>
  );
}

export default memo(StatCounter);
