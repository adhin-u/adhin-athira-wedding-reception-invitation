"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

type SequenceStage = "loading" | "complete"

export function WelcomeSequence({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<SequenceStage>("loading")

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("complete")
    }, 1700)
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
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden transition-opacity duration-500 ${
          stage === "complete" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute w-72 h-72 bg-primary rounded-full blur-3xl pointer-events-none"
        />

        <AnimatePresence mode="wait">
          {stage === "loading" && (
            <motion.div
              key="loading"
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="relative flex flex-col items-center"
            >
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary font-sans font-bold mb-4"
              >
                Wedding Reception
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight"
              >
                Adhin{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.4, type: "spring", stiffness: 320 }}
                  className="inline-block text-primary"
                >
                  &amp;
                </motion.span>{" "}
                Athira
              </motion.p>

              <div className="w-24 h-[3px] bg-border rounded-full mt-6 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
                  className="h-full w-full bg-primary rounded-full origin-left"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {children}
    </>
  )
}
