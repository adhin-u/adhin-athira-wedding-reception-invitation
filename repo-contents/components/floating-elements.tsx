"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  animationDuration: number
  animationDelay: number
}

export function AmbientSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const newSparkles: Sparkle[] = []
    
    for (let i = 0; i < 25; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        animationDuration: Math.random() * 3 + 2,
        animationDelay: Math.random() * 4,
      })
    }
    
    setSparkles(newSparkles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.1;
            transform: scale(0.8);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
      `}</style>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-accent/50"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            animation: `twinkle ${sparkle.animationDuration}s ease-in-out ${sparkle.animationDelay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

export function GoldAccentLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 sm:h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
      
      {/* Side accent lines */}
      <div className="absolute top-1/4 left-0 w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-3/4 left-0 w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-3/4 right-0 w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-accent/20 to-transparent" />
      
      {/* Corner flourishes */}
      <svg className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 opacity-30" viewBox="0 0 50 50">
        <path d="M5 5 Q 5 25, 25 25" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
        <path d="M10 5 Q 10 20, 25 20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent/50" />
      </svg>
      <svg className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 opacity-30 scale-x-[-1]" viewBox="0 0 50 50">
        <path d="M5 5 Q 5 25, 25 25" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
        <path d="M10 5 Q 10 20, 25 20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent/50" />
      </svg>
    </div>
  )
}
