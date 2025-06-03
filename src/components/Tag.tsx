import React from 'react';
import { cn } from '@/lib/utils';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'filled' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
}

export const Tag: React.FC<TagProps> = ({
  variant = 'filled',
  size = 'md',
  children,
  className,
  removable = false,
  onRemove,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-normal rounded-full transition-all duration-200';

  const variantClasses = {
    // Filled - Beyaz arka plan, koyu metin (Default)
    filled: 'bg-white text-[#213D34]',
    
    // Outline - Şeffaf arka plan, border ile
    outline: 'bg-transparent text-[#213D34] border border-[#213D34]'
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm gap-1',
    md: 'px-[17px] py-[9px] text-[18px] gap-2',
    lg: 'px-5 py-3 text-lg gap-2'
  };

  const tagClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <span className={tagClasses} {...props}>
      <span>{children}</span>
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-[#213D34] hover:text-white transition-colors duration-200"
          aria-label="Remove tag"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </span>
  );
}; 