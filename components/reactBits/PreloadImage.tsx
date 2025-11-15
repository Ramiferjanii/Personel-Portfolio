"use client";

import { useEffect } from 'react';

export default function PreloadImage({ src }: { src: string }) {
  useEffect(() => {
    // Check if link already exists
    const existingLink = document.querySelector(`link[href="${src}"]`);
    if (existingLink) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);

    return () => {
      const linkToRemove = document.querySelector(`link[href="${src}"]`);
      if (linkToRemove) {
        document.head.removeChild(linkToRemove);
      }
    };
  }, [src]);

  return null;
}

