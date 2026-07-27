"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

type SequenceStage = "loading" | "complete"

export function WelcomeSequence({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<SequenceStage>("loading")

  useEffect(() => {
    // Fast loading animation "A & A" drawing finishes after 1.8s
    const timer = setTimeout(() => {
      setStage("complete")
    }, 1800)
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
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden selection:bg-accent/30 transition-opacity duration-1000 ${
          stage === "complete" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <AnimatePresence mode="wait">
          {stage === "loading" && (
           <motion.div 
             key="loading"
             exit={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
             transition={{ duration: 0.8, ease: "easeIn" }}
             className="flex flex-col items-center"
           >
             <motion.svg className="w-72 h-36 sm:w-96 sm:h-48 text-primary drop-shadow-sm" viewBox="0 0 200 80">
                <motion.text
                  x="100" y="45"
                  textAnchor="middle" dominantBaseline="middle"
                  className="font-script text-6xl font-normal"
                  initial={{ strokeDasharray: 300, strokeDashoffset: 300, fill: "rgba(180,180,220,0)" }}
                  animate={{ 
                    strokeDashoffset: 0, 
                    fill: ["rgba(180,180,220,0)", "currentColor"] 
                  }}
                  transition={{ duration: 1.2, ease: "easeOut", times: [0, 1] }}
                  style={{ strokeWidth: 1.5, stroke: "currentColor" }}
                >
                  A & A
                </motion.text>
             </motion.svg>
             <motion.p
               initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
               animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
               transition={{ delay: 0.8, duration: 0.6 }}
               className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans font-semibold mt-4 sm:mt-0"
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
