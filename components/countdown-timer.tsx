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

  return (
    <div className="flex justify-center gap-2 sm:gap-4">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div
            whileHover={{ y: -2 }}
            className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl bg-card overflow-hidden"
          >
            {!mounted ? (
              <span className="font-mono text-3xl sm:text-4xl font-bold text-foreground tabular-nums">
                --
              </span>
            ) : (
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={unit.value}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 340, damping: 28 }}
                  className="absolute font-mono text-3xl sm:text-4xl font-bold text-foreground tabular-nums"
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
          </motion.div>
          <span className="mt-3 text-[10px] sm:text-xs text-muted-foreground font-sans font-semibold tracking-[0.2em] uppercase">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
