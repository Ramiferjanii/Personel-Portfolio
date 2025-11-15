"use client"

import { useEffect, useState } from "react"
import LoadingThreeDotsPulse from "./LoadingThreeDotsPulse"

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const MIN_LOADING_TIME = 100; // Reduced to 100ms for faster LCP
    const startTime = Date.now();

    // Hide loading screen once page is fully loaded
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);
      
      // Wait for minimum loading time before hiding
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    }

    // If page is already loaded
    if (document.readyState === "complete") {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);
      
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [])

  if (isLoading) {
    return <LoadingThreeDotsPulse />
  }

  return <>{children}</>
}

