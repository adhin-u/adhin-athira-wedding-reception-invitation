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

interface ShootingStar {
  id: number
  x: number
  y: number
  length: number
  angle: number
  delay: number
}

export function AmbientSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    const newSparkles: Sparkle[] = []
    
    for (let i = 0; i < 40; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        animationDuration: Math.random() * 4 + 2,
        animationDelay: Math.random() * 5,
      })
    }
    
    setSparkles(newSparkles)

    const newShootingStars: ShootingStar[] = []
    for (let i = 0; i < 3; i++) {
      newShootingStars.push({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 40 - 20, // Start higher up
        length: Math.random() * 100 + 50,
        angle: 45 + Math.random() * 20, // Diagonal angle
        delay: Math.random() * 10 + 2,
      })
    }
    setShootingStars(newShootingStars)
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
            opacity: 0.8;
            transform: scale(1.3);
            box-shadow: 0 0 8px currentColor;
          }
        }
        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(15deg) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateX(-1000px) translateY(1000px) rotate(15deg) scale(1);
            opacity: 0;
          }
        }
      `}</style>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-accent/60 text-accent"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            animation: `twinkle ${sparkle.animationDuration}s ease-in-out ${sparkle.animationDelay}s infinite`,
          }}
        />
      ))}

      {shootingStars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent/80 to-transparent"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.length}px`,
            rotate: `${star.angle}deg`,
            opacity: 0,
            animation: `shoot ${4 + Math.random() * 2}s linear ${star.delay}s infinite`,
          }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]" />
        </div>
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
