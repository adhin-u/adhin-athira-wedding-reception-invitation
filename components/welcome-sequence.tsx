"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Sparkles, Heart } from "lucide-react"

type SequenceStage = "loading" | "complete"

interface BurstParticle {
  id: number
  angle: number
  distance: number
  size: number
  delay: number
}

function SparkleBurst() {
  const [particles, setParticles] = useState<BurstParticle[]>([])

  useEffect(() => {
    const count = 12
    const generated: BurstParticle[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      angle: (360 / count) * i + (Math.random() * 14 - 7),
      distance: Math.random() * 50 + 55,
      size: Math.random() * 2.5 + 1.5,
      delay: Math.random() * 0.15,
    }))
    setParticles(generated)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p) => {
        const rad = (p.angle * Math.PI) / 180
        const x = Math.cos(rad) * p.distance
        const y = Math.sin(rad) * p.distance
        return (
          <motion.span
            key={p.id}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.3 }}
            animate={{ x, y, opacity: [0, 1, 0], scale: 1 }}
            transition={{ duration: 1.1, delay: p.delay, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 rounded-full bg-primary"
            style={{ width: p.size * 2, height: p.size * 2, marginLeft: -p.size, marginTop: -p.size }}
          />
        )
      })}
    </div>
  )
}

export function WelcomeSequence({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<SequenceStage>("loading")

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("complete")
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (stage !== "complete") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [stage])

  return (
    <>
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden selection:bg-accent/30 transition-opacity duration-[1800ms] ${
          stage === "complete" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <AnimatePresence mode="wait">
          {stage === "loading" && (
            <motion.div
              key="loading"
              exit={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
              transition={{ duration: 1.4, ease: "easeIn" }}
              className="relative flex flex-col items-center"
            >
              {/* Central seed spark + burst */}
              <div className="relative flex items-center justify-center w-10 h-10 mb-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: [0, 1, 0.6], scale: [0.3, 1.3, 1] }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Sparkles className="w-7 h-7 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <SparkleBurst />
                </motion.div>
              </div>

              {/* Adhin */}
              <motion.p
                initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="font-script text-5xl sm:text-6xl text-foreground leading-none"
              >
                Adhin
              </motion.p>

              {/* Heart divider */}
              <div className="flex items-center gap-3 my-3">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.85, duration: 0.4, ease: "easeOut" }}
                  className="h-px w-8 sm:w-10 bg-gradient-to-r from-transparent to-primary/60 origin-right"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.05, duration: 0.5, type: "spring", stiffness: 300 }}
                >
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary/40" />
                </motion.div>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.85, duration: 0.4, ease: "easeOut" }}
                  className="h-px w-8 sm:w-10 bg-gradient-to-l from-transparent to-primary/60 origin-left"
                />
              </div>

              {/* Athira */}
              <motion.p
                initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 1.15, duration: 0.6, ease: "easeOut" }}
                className="font-script text-5xl sm:text-6xl text-foreground leading-none mb-5"
              >
                Athira
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans font-semibold"
              >
                The Wedding Reception
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {children}
    </>
  )
}
