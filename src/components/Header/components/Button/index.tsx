import { memo, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import type { HeaderButtonProps } from '@/@types';

function Button(props: HeaderButtonProps) {
  const {
    layout = 'desktop',
    outlined = false,
    disabled,
    className,
    children,
    ...rest
  } = props;

  const isDesktop = layout === 'desktop';

  const renderMobile = useMemo(() => {
    const buttonClass = disabled
      ? 'w-full px-8 py-4 text-gray-300 cursor-pointer disabled:cursor-not-allowed disabled:text-gray-500'
      : 'group w-full px-8 py-4 transition-colors duration-200 cursor-pointer';
    const contentClass = disabled
      ? 'flex w-full justify-between gap-2'
      : 'flex w-full justify-between gap-2 text-gray-300 group-hover:text-white transition-colors duration-200';
    const iconClass = disabled
      ? 'size-5 text-gray-500 cursor-not-allowed'
      : 'size-5 text-gray-300 group-hover:text-white transition-colors duration-200';

    return (
      <button
        className={`${buttonClass} ${className}`}
        disabled={disabled}
        {...rest}
      >
        <div className={contentClass}>
          <span>{children}</span>

          <ChevronRight className={iconClass} />
        </div>
      </button>
    );
  }, [children, disabled, className, rest]);

  const renderDesktop = useMemo(
    () =>
      outlined ? (
        <button
          className={`text-gray-300 hidden lg:block hover:text-white transition-colors duration-200 text-sm cursor-pointer ${className}`}
          disabled={disabled}
          {...rest}
        >
          {children}
        </button>
      ) : (
        <button
          className={`bg-white text-black px-6 py-2.5 rounded-full hidden lg:block hover:bg-gray-100 transition-all duration-200 text-sm font-medium cursor-pointer ${className}`}
          disabled={disabled}
          {...rest}
        >
          {children}
        </button>
      ),
    [children, rest, outlined, disabled, className],
  );

  return isDesktop ? renderDesktop : renderMobile;
}

export default memo(Button);
