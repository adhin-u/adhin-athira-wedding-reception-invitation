"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]

  if (!mounted) {
    return (
      <div className="flex justify-center gap-3 sm:gap-4">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="relative w-16 h-20 sm:w-20 sm:h-24 flex flex-col items-center justify-center rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg">
              <span className="text-3xl sm:text-4xl font-serif font-semibold text-primary tabular-nums">
                --
              </span>
            </div>
            <span className="mt-3 text-[10px] sm:text-xs text-muted-foreground font-medium tracking-[0.2em] uppercase">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes numberPop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .countdown-card {
          transition: all 0.3s ease;
        }
        .countdown-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(122, 154, 122, 0.3);
        }
        .shimmer-overlay {
          animation: shimmer 3s ease-in-out infinite;
        }
        .number-animate {
          animation: numberPop 1s ease-in-out infinite;
        }
      `}</style>
      <div className="flex justify-center gap-3 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="countdown-card relative w-16 h-20 sm:w-20 sm:h-24 flex flex-col items-center justify-center rounded-xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg overflow-hidden">
              {/* Shimmer overlay */}
              <div 
                className="shimmer-overlay absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"
                style={{ animationDelay: `${index * 0.5}s` }}
              />
              
              {/* Number */}
              <span 
                className="number-animate relative text-3xl sm:text-4xl font-serif font-semibold text-primary tabular-nums"
                style={{ animationDelay: `${index * 0.25}s` }}
              >
                {String(unit.value).padStart(2, "0")}
              </span>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </div>
            
            <span className="mt-3 text-[10px] sm:text-xs text-muted-foreground font-medium tracking-[0.2em] uppercase">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
