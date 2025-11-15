"use client";

import { ReactNode } from 'react';

interface MetallicIconProps {
  children: ReactNode;
  className?: string;
}

export default function MetallicIcon({ children, className = '' }: MetallicIconProps) {
  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{
        filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
      }}
    >
      <div
        className="relative rounded-lg p-2 backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%)',
        }}
      >
        {children}
      </div>
      <div
        className="absolute inset-0 pointer-events-none rounded-lg animate-pulse"
        style={{
          background: 'linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
        }}
      />
    </div>
  );
}

