"use client"
import { useEffect } from "react"

export function TransitionScript() {
  useEffect(() => {
    // Remove preload class after a short delay to enable transitions
    const timer = setTimeout(() => {
      document.body.classList.remove("preload")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return null
}
