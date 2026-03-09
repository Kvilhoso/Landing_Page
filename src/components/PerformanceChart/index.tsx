import { memo, useCallback, useEffect, useRef, useState } from 'react';

// ── Data ──────────────────────────────────────────────────────────────────────
const LABELS = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const RAGE_MONTHLY = [573, 954, 916, 1058, 687, 1187, 686, 1090, 1607, 1990, 1980, 2141];

const compound = (m: number[]): number[] => {
  let b = 10000;
  return m.map(v => { b += v; return Math.round(b * 100) / 100; });
};
const grow = (annual: number): number[] => {
  const r = Math.pow(1 + annual, 1 / 12) - 1;
  let b = 10000;
  return Array.from({ length: 12 }, () => { b *= 1 + r; return Math.round(b * 100) / 100; });
};
const ibov = (): number[] => {
  const r = [-0.004,-0.038,-0.063,0.042,-0.019,0.021,-0.043,-0.031,0.062,0.058,-0.031,-0.025];
  let b = 10000;
  return r.map(x => { b *= 1 + x; return Math.round(b * 100) / 100; });
};

interface SeriesDef { label: string; color: string; data: number[]; }
interface DrawSeries extends SeriesDef { fill?: boolean; bold?: boolean; }

const ALL_SERIES: Record<string, SeriesDef> = {
  rage:   { label: 'Rage',     color: '#c9a84c', data: compound(RAGE_MONTHLY) },
  cdi105: { label: 'CDI 105%', color: '#4a9ee0', data: grow(0.1375 * 1.05) },
  cdi101: { label: 'CDI 101%', color: '#6ec6f5', data: grow(0.1375 * 1.01) },
  selic:  { label: 'Selic',    color: '#8888cc', data: grow(0.1375) },
  ibov:   { label: 'Ibovespa', color: '#e05545', data: ibov() },
  sp500:  { label: 'S&P 500',  color: '#50c878', data: grow(0.24) },
};

// ── Canvas renderer ───────────────────────────────────────────────────────────
type Meta = {
  seriesArr: DrawSeries[]; xAt: (i: number) => number; yAt: (v: number) => number;
  PAD: { top: number; right: number; bottom: number; left: number };
  cW: number; cH: number; W: number; H: number; minV: number; rng: number; dpr: number;
};

function paint(canvas: HTMLCanvasElement, seriesArr: DrawSeries[], H: number): Meta {
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.parentElement?.offsetWidth || 400;
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = `${W}px`; canvas.style.height = `${H}px`;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(dpr, dpr);

  const PAD = { top: 12, right: 12, bottom: 32, left: 48 };
  const cW = W - PAD.left - PAD.right;
  const cH = H - PAD.top - PAD.bottom;
  const allVals = seriesArr.flatMap(s => s.data);
  const minV = Math.min(...allVals) * 0.975;
  const maxV = Math.max(...allVals) * 1.015;
  const rng = maxV - minV;
  const xAt = (i: number) => PAD.left + (i / 11) * cW;
  const yAt = (v: number) => PAD.top + cH - ((v - minV) / rng) * cH;

  // grid
  ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = PAD.top + (cH / 4) * i;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + cW, y); ctx.stroke();
  }
  // x labels
  ctx.fillStyle = '#555'; ctx.font = "10px 'Montreal Regular',system-ui,sans-serif";
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  LABELS.forEach((l, i) => ctx.fillText(l, xAt(i), H - PAD.bottom + 6));
  // y labels
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let i = 0; i <= 4; i++) {
    const v = minV + (rng / 4) * (4 - i);
    ctx.fillText(`$${(v / 1000).toFixed(0)}k`, PAD.left - 5, PAD.top + (cH / 4) * i);
  }
  // fills
  seriesArr.filter(s => s.fill).forEach(s => {
    ctx.beginPath(); ctx.moveTo(xAt(0), yAt(s.data[0]));
    s.data.forEach((v, i) => ctx.lineTo(xAt(i), yAt(v)));
    ctx.lineTo(xAt(11), PAD.top + cH); ctx.lineTo(xAt(0), PAD.top + cH); ctx.closePath();
    const g = ctx.createLinearGradient(0, PAD.top, 0, PAD.top + cH);
    g.addColorStop(0, `${s.color}2a`); g.addColorStop(1, `${s.color}00`);
    ctx.fillStyle = g; ctx.fill();
  });
  // lines
  seriesArr.forEach(s => {
    ctx.beginPath(); ctx.strokeStyle = s.color;
    ctx.lineWidth = s.bold ? 2.8 : 1.6; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.moveTo(xAt(0), yAt(s.data[0]));
    s.data.forEach((v, i) => ctx.lineTo(xAt(i), yAt(v))); ctx.stroke();
  });

  const meta: Meta = { seriesArr, xAt, yAt, PAD, cW, cH, W, H, minV, rng, dpr };

  // hover
  const getIdx = (e: MouseEvent | TouchEvent) => {
    const rect = canvas.getBoundingClientRect();
    const cx = ('touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX) - rect.left;
    return Math.max(0, Math.min(11, Math.round((cx - PAD.left) / cW * 11)));
  };
  canvas.onmousemove = (e) => hover(canvas, meta, getIdx(e));
  canvas.ontouchmove = (e) => { e.preventDefault(); hover(canvas, meta, getIdx(e)); };
  canvas.onmouseleave = () => paint(canvas, seriesArr, H);

  return meta;
}

function hover(canvas: HTMLCanvasElement, m: Meta, idx: number) {
  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.scale(m.dpr, m.dpr);
  const { PAD, cW, cH, W, H, minV, rng, xAt, yAt, seriesArr } = m;

  ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = PAD.top + (cH / 4) * i;
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + cW, y); ctx.stroke();
  }
  ctx.fillStyle = '#555'; ctx.font = "10px 'Montreal Regular',system-ui,sans-serif";
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  LABELS.forEach((l, i) => ctx.fillText(l, xAt(i), H - PAD.bottom + 6));
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  for (let i = 0; i <= 4; i++) {
    ctx.fillText(`$${(minV + (rng / 4) * (4 - i) / 1000).toFixed(0)}k`, PAD.left - 5, PAD.top + (cH / 4) * i);
  }
  seriesArr.filter(s => s.fill).forEach(s => {
    ctx.beginPath(); ctx.moveTo(xAt(0), yAt(s.data[0]));
    s.data.forEach((v, i) => ctx.lineTo(xAt(i), yAt(v)));
    ctx.lineTo(xAt(11), PAD.top + cH); ctx.lineTo(xAt(0), PAD.top + cH); ctx.closePath();
    const g = ctx.createLinearGradient(0, PAD.top, 0, PAD.top + cH);
    g.addColorStop(0, `${s.color}2a`); g.addColorStop(1, `${s.color}00`);
    ctx.fillStyle = g; ctx.fill();
  });
  seriesArr.forEach(s => {
    ctx.beginPath(); ctx.strokeStyle = s.color; ctx.lineWidth = s.bold ? 2.8 : 1.6;
    ctx.lineJoin = 'round'; ctx.moveTo(xAt(0), yAt(s.data[0]));
    s.data.forEach((v, i) => ctx.lineTo(xAt(i), yAt(v))); ctx.stroke();
  });

  // crosshair
  ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.lineWidth = 1; ctx.setLineDash([3, 4]);
  ctx.beginPath(); ctx.moveTo(xAt(idx), PAD.top); ctx.lineTo(xAt(idx), PAD.top + cH); ctx.stroke();
  ctx.setLineDash([]);

  // tooltip
  const lH = 15, tp = 10, tW = 176;
  const tH = tp * 2 + 14 + seriesArr.length * lH;
  let tx = xAt(idx) + 10; if (tx + tW > W - PAD.right) tx = xAt(idx) - tW - 10;
  const ty = PAD.top + 6;
  ctx.fillStyle = 'rgba(8,8,8,0.94)'; ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 1;
  ctx.beginPath();
  (ctx as CanvasRenderingContext2D & { roundRect: (...a: unknown[]) => void }).roundRect(tx, ty, tW, tH, 6);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#666'; ctx.font = "bold 9px 'Montreal Regular',system-ui,sans-serif";
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.fillText(LABELS[idx].toUpperCase(), tx + tp, ty + tp);
  seriesArr.forEach((s, i) => {
    ctx.fillStyle = s.color; ctx.font = "10px 'Montreal Regular',system-ui,sans-serif";
    ctx.fillText(`${s.label}: $${s.data[idx].toLocaleString('pt-BR', { maximumFractionDigits: 0 })}`, tx + tp, ty + tp + 13 + i * lH);
  });
  // dots
  seriesArr.forEach(s => {
    ctx.beginPath(); ctx.arc(xAt(idx), yAt(s.data[idx]), 4, 0, Math.PI * 2);
    ctx.fillStyle = s.color; ctx.fill();
    ctx.strokeStyle = '#0a0a0a'; ctx.lineWidth = 2; ctx.stroke();
  });
}

// ── Component ─────────────────────────────────────────────────────────────────
function PerformanceChart() {
  const rageRef = useRef<HTMLCanvasElement>(null);
  const cmpRef  = useRef<HTMLCanvasElement>(null);
  const [cmpOpen, setCmpOpen] = useState(false);
  const [active, setActive] = useState<Record<string, boolean>>(
    { rage: true, cdi105: true, cdi101: true, selic: true, ibov: true, sp500: true }
  );

  const buildRage = useCallback(() => {
    if (rageRef.current) paint(rageRef.current, [{ ...ALL_SERIES.rage, fill: true, bold: true }], 260);
  }, []);

  const buildCmp = useCallback(() => {
    if (!cmpRef.current) return;
    const arr = Object.keys(ALL_SERIES).filter(k => active[k])
      .map(k => ({ ...ALL_SERIES[k], fill: k === 'rage', bold: k === 'rage' }));
    paint(cmpRef.current, arr, 220);
  }, [active]);

  // init rage chart on scroll into view
  useEffect(() => {
    const section = rageRef.current?.closest('section');
    if (!section) return;
    let done = false;
    const run = () => { if (!done) { done = true; buildRage(); } };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) run(); }, { threshold: 0.01 });
    io.observe(section);
    const t = setTimeout(run, 2000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [buildRage]);

  useEffect(() => { if (cmpOpen) buildCmp(); }, [active, cmpOpen, buildCmp]);

  useEffect(() => {
    const onResize = () => { if (!cmpOpen) buildRage(); else buildCmp(); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [cmpOpen, buildRage, buildCmp]);

  const CHIP_KEYS = Object.keys(ALL_SERIES);

  return (
    <div className='bg-white/5 border border-white/10 rounded-3xl p-5 md:p-7 overflow-hidden h-full flex flex-col'>
      {/* header */}
      <div className='flex justify-between items-start mb-5'>
        <div>
          <p className='text-[0.65rem] uppercase tracking-widest text-gray-500 mb-1'>Crescimento acumulado · 2025</p>
          <p className='text-sm text-gray-400'>Capital inicial: $10.000</p>
        </div>
        {!cmpOpen && (
          <button
            onClick={() => { setCmpOpen(true); setTimeout(buildCmp, 320); }}
            className='flex items-center gap-2 text-[0.75rem] font-medium text-[#c9a84c] bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.25)] px-3 py-2 rounded-full cursor-pointer hover:bg-[rgba(201,168,76,0.14)] transition-all duration-200 shrink-0'
          >
            ⇄ Comparar
          </button>
        )}
      </div>

      {/* sliding track */}
      <div className='overflow-hidden w-full rounded-xl'>
        <div className='flex w-[200%] transition-transform duration-500' style={{ transform: cmpOpen ? 'translateX(-50%)' : 'translateX(0)' }}>
          {/* Panel A */}
          <div className='w-1/2 min-w-0 shrink-0'>
            <canvas ref={rageRef} className='w-full block' />
          </div>
          {/* Panel B */}
          <div className='w-1/2 min-w-0 shrink-0'>
            <div className='flex items-center gap-3 mb-3'>
              <button
                onClick={() => setCmpOpen(false)}
                className='text-[0.75rem] text-gray-400 border border-white/10 px-3 py-1.5 rounded-full cursor-pointer hover:text-white hover:border-white/20 transition-all shrink-0'
              >
                ← Voltar
              </button>
              <p className='text-[0.8rem] text-gray-400'>Rage vs. outros investimentos em 2025</p>
            </div>
            {/* chips */}
            <div className='flex flex-wrap gap-2 mb-3'>
              {CHIP_KEYS.map(k => (
                <button
                  key={k}
                  onClick={() => { if (k !== 'rage') setActive(p => ({ ...p, [k]: !p[k] })); }}
                  className={`flex items-center gap-1.5 text-[0.7rem] font-medium px-2.5 py-1 rounded-full border cursor-pointer transition-all duration-200 ${active[k] ? 'text-white border-white/20 bg-white/[0.06]' : 'text-gray-500 border-white/[0.08]'}`}
                >
                  <span className='w-2 h-2 rounded-full shrink-0' style={{ background: ALL_SERIES[k].color }} />
                  {ALL_SERIES[k].label}
                </button>
              ))}
            </div>
            <canvas ref={cmpRef} className='w-full block' />
            {/* legend */}
            <div className='grid grid-cols-3 gap-1.5 mt-3'>
              {CHIP_KEYS.filter(k => active[k]).map(k => {
                const s = ALL_SERIES[k];
                const ret = ((s.data[11] - 10000) / 10000 * 100).toFixed(1);
                const pos = s.data[11] >= 10000;
                return (
                  <div key={k} className='bg-white/[0.03] border border-white/[0.08] rounded-xl p-2.5'>
                    <div className='flex items-center gap-1.5 text-[0.62rem] uppercase tracking-wide text-gray-500 mb-1'>
                      <span className='w-1.5 h-1.5 rounded-full shrink-0' style={{ background: s.color }} />
                      {s.label}
                    </div>
                    <div className='text-[0.95rem] font-medium' style={{ color: pos ? s.color : '#e05545' }}>
                      {pos ? '+' : ''}{ret}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <p className='text-[0.68rem] text-gray-600 mt-4 leading-relaxed'>
        Backtest com dados reais de tick, qualidade 99,9%. Capital inicial $10.000. Jan–Dez 2025.
      </p>
    </div>
  );
}

export default memo(PerformanceChart);
