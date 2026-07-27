"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

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
              <span className="text-4xl sm:text-5xl font-serif font-medium text-primary tabular-nums tracking-tight">
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
    <div className="flex justify-center gap-3 sm:gap-4">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative w-16 h-20 sm:w-20 sm:h-24 flex flex-col items-center justify-center rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(122,154,122,0.15)] transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer overlay */}
            <motion.div 
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ repeat: Infinity, duration: 3, delay: index * 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5"
            />
            
            {/* Number with AnimatePresence for smooth flip effect */}
            <div className="relative h-[2.5rem] sm:h-[3rem] overflow-hidden w-full flex justify-center items-center">
              <AnimatePresence mode="popLayout">
                <motion.span 
                  key={unit.value}
                  initial={{ y: 20, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -20, opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute text-4xl sm:text-5xl font-serif font-medium text-primary tabular-nums tracking-tight drop-shadow-sm"
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            
            {/* Decorative line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent group-hover:w-12 transition-all duration-300" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent group-hover:w-8 transition-all duration-300" />
          </motion.div>
          
          <span className="mt-3 text-[10px] sm:text-xs text-muted-foreground font-medium tracking-[0.25em] uppercase">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
