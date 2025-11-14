"use client"

import { useEffect, useState } from "react"
import LoadingThreeDotsPulse from "./LoadingThreeDotsPulse"

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen once page is fully loaded
    const handleLoad = () => {
      setIsLoading(false)
    }

    // If page is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false)
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (isLoading) {
    return <LoadingThreeDotsPulse />
  }

  return <>{children}</>
}

