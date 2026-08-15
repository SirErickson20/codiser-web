import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true
}) => {
  // Variant defines text color:
  // 'dark' = dark text on light backgrounds (#0F172A / #1E3A8A)
  // 'light' = white text on dark backgrounds (#FFFFFF)
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] md:text-[11px] tracking-wider',
    lg: 'text-xs tracking-widest'
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Geometric 'C' Logo Icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 hover:scale-105"
        >
          {/* Main interconnected 'C' geometric contour */}
          <path
            d="M32 9.5C29.2 6.8 25.4 5.2 21.2 5.2C12.4 5.2 5.2 12.4 5.2 21.2C5.2 30 12.4 37.2 21.2 37.2C25.6 37.2 29.5 35.4 32.4 32.5"
            stroke={isLight ? '#38BDF8' : '#1E3A8A'}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Top connecting segment with arrow/node */}
          <path
            d="M38 10L31.5 10L31.5 16.5"
            stroke={isLight ? '#60A5FA' : '#2563EB'}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner data node dots */}
          <circle cx="21.2" cy="13.5" r="2.5" fill={isLight ? '#93C5FD' : '#1E3A8A'} />
          <circle cx="13.5" cy="21.2" r="2.5" fill={isLight ? '#60A5FA' : '#2563EB'} />
          <circle cx="21.2" cy="28.9" r="2.5" fill={isLight ? '#38BDF8' : '#3B82F6'} />
          {/* Center interconnecting micro-links */}
          <path
            d="M21.2 13.5L13.5 21.2L21.2 28.9"
            stroke={isLight ? '#BFDBFE' : '#93C5FD'}
            strokeWidth="1.8"
            strokeDasharray="2 2"
          />
        </svg>
      </div>

      {/* Typography: CODISEr Servicios Digitales */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-baseline">
          <span
            className={`font-black tracking-tight ${titleSizes[size]} ${
              isLight ? 'text-white' : 'text-[#16284F]'
            }`}
          >
            CODISE<span className={isLight ? 'text-[#38BDF8]' : 'text-[#2563EB]'}>r</span>
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`font-semibold uppercase ${subtitleSizes[size]} ${
              isLight ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Servicios Digitales
          </span>
        )}
      </div>
    </div>
  );
};
