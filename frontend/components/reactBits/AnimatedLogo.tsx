"use client";

import { useEffect, useRef, useState } from 'react';
import MetallicPaint, { parseLogoImage } from './logoAnimation';

interface AnimatedLogoProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedLogo({ children, className = '' }: AnimatedLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const svgElement = container.querySelector('svg');
    
    if (!svgElement) {
      // If no SVG, just render children normally
      return;
    }

    // Convert SVG to image
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = async () => {
      // Create canvas to get ImageData
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 1000;
      canvas.height = 1000;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setImageData(data);
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }, [children]);

  if (!imageData) {
    return (
      <div ref={containerRef} className={className} style={{ display: 'none' }}>
        {children}
      </div>
    );
  }

  return (
    <div className={className} style={{ width: '100px', height: '100px' }}>
      <MetallicPaint imageData={imageData} params={{
        patternScale: 2,
        refraction: 0.015,
        edge: 1,
        patternBlur: 0.005,
        liquid: 0.07,
        speed: 0.3
      }} />
    </div>
  );
}

