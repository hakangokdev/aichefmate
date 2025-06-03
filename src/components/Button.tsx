import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  isLoading,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    // Primary - Koyu yeşil arka plan, beyaz metin (Default)
    primary: 'bg-[#213D34] text-white hover:bg-[#1a2f28] focus:ring-[#213D34]',
    
    // Secondary - Outline variant
    secondary: 'border-2 border-[#213D34] text-[#213D34] bg-transparent hover:bg-[#213D34] hover:text-white focus:ring-[#213D34]',
    
    // Accent - Açık yeşil arka plan, koyu metin
    accent: 'bg-[#D9EF78] text-[#213D34] hover:bg-[#c7e05e] focus:ring-[#D9EF78]',
    
    // Outline accent
    outline: 'border-2 border-[#213D34] bg-[#D9EF78] text-[#213D34] hover:bg-[#c7e05e] focus:ring-[#D9EF78]',
    
    // Ghost variant
    ghost: 'text-[#213D34] bg-transparent hover:bg-[#F1F2ED] focus:ring-[#213D34]',
    
    // Icon only variant
    icon: 'border border-[#213D34] text-[#213D34] bg-transparent hover:bg-[#F1F2ED] focus:ring-[#213D34]'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-10 py-[18px] text-[22px] gap-2.5',
    lg: 'px-12 py-5 text-xl gap-3'
  };

  const iconSizeClasses = {
    sm: 'p-2',
    md: 'p-[18px]',
    lg: 'p-5'
  };

  const isIconOnly = variant === 'icon' && !children;

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    isIconOnly ? iconSizeClasses[size] : sizeClasses[size],
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children && <span>{children}</span>}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}; 