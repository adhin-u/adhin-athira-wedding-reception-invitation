"use client"

import { MapPin, Calendar, Clock, Navigation, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { motion } from "motion/react"
import { WelcomeSequence } from "@/components/welcome-sequence"

const EVENT_DATE = new Date("2026-09-14T17:00:00")
const VENUE_LINK = "https://maps.app.goo.gl/uNtcAuRzTbo3ger87"

function generateGoogleCalendarLink() {
  const startDate = "20260914T170000"
  const endDate = "20260914T210000"
  const title = encodeURIComponent("Adhin & Athira Wedding Reception")
  const details = encodeURIComponent(
    "Wedding Reception of Adhin and Athira. We look forward to celebrating this special day with you!"
  )
  const location = encodeURIComponent("AGP Garden Heritage Hall, Thondayad, Calicut")

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
} as const

const heroContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
} as const

const heroItem = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const

export default function WeddingInvitation() {
  return (
    <WelcomeSequence>
      <main className="bg-background min-h-screen relative overflow-hidden selection:bg-primary/20">

        {/* Soft ambient accent behind hero */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.07, 0.1, 0.07] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-primary rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-2xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 relative">

          {/* Hero */}
          <motion.div
            variants={heroContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.p
              variants={heroItem}
              className="text-xs sm:text-sm tracking-[0.3em] uppercase text-primary font-sans font-bold mb-6"
            >
              Wedding Reception
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="font-display text-5xl sm:text-7xl font-bold text-foreground leading-[1.05] tracking-tight"
            >
              Adhin{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.55, duration: 0.5, type: "spring", stiffness: 300 }}
                className="inline-block text-primary"
              >
                &amp;
              </motion.span>
              <br />
              Athira
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-muted-foreground font-sans text-base sm:text-lg max-w-md mx-auto mt-8 leading-relaxed"
            >
              Together with their beloved families, joyfully invite you to
              share in the celebration of their new journey as one.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center mt-14 mb-20 sm:mb-24"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </motion.div>

          {/* Countdown */}
          <motion.section {...fadeUp} className="mb-6">
            <p className="flex items-center justify-center gap-2 text-xs tracking-[0.3em] uppercase text-primary font-sans font-bold mb-6">
              <motion.span
                animate={{ opacity: [1, 0.35, 1], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="inline-flex rounded-full h-2 w-2 bg-primary"
              />
              The Wait Continues
            </p>
            <CountdownTimer targetDate={EVENT_DATE} />
          </motion.section>

          {/* Date & Venue */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 mb-16">
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -14, 0], opacity: [0.05, 0.08, 0.05] }}
              transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
              className="absolute -top-16 -left-16 w-64 h-64 bg-primary rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-7 flex flex-col transition-shadow hover:shadow-lg"
            >
              <Calendar className="w-5 h-5 text-primary mb-4" strokeWidth={2} />
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans font-bold mb-2">
                Save the Date
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">
                14 Sep 2026
              </h2>
              <p className="flex items-center gap-2 text-muted-foreground font-sans text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                5:00 PM &ndash; 9:00 PM
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-auto border-border hover:border-primary hover:bg-primary hover:text-primary-foreground font-sans font-bold rounded-xl w-full active:scale-95 transition-transform"
              >
                <a href={generateGoogleCalendarLink()} target="_blank" rel="noopener noreferrer">
                  Remind Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-7 flex flex-col transition-shadow hover:shadow-lg"
            >
              <MapPin className="w-5 h-5 text-primary mb-4" strokeWidth={2} />
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans font-bold mb-2">
                The Venue
              </p>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 leading-snug">
                AGP Garden Heritage Hall
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                Thondayad, Calicut, Kerala
              </p>
              <Button
                asChild
                className="mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold rounded-xl w-full active:scale-95 transition-transform"
              >
                <a href={VENUE_LINK} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Closing message */}
          <motion.div {...fadeUp} className="text-center py-4">
            <p className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-snug tracking-tight">
              A celebration of love is
              <br />
              incomplete without you.
            </p>
            <p className="font-sans text-sm mt-5 text-muted-foreground font-semibold uppercase tracking-widest">
              Join us as we begin our happily ever after
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="relative border-t border-border pt-10 pb-10 overflow-hidden">
          <motion.div
            animate={{ x: [0, -18, 0], y: [0, 12, 0], opacity: [0.05, 0.08, 0.05] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -right-16 w-64 h-64 bg-primary rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center px-6"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="h-1 w-8 bg-primary rounded-full mb-5 origin-center"
            />
            <p className="text-muted-foreground font-sans text-xs mb-3 font-bold tracking-[0.2em] uppercase">
              With love and gratitude
            </p>
            <p className="font-display text-2xl font-bold text-foreground mb-2">
              Adhin &amp; Athira
            </p>
            <p className="text-xs text-primary font-sans tracking-[0.2em] uppercase font-bold">
              14th Sep 2026 &bull; Calicut
            </p>
          </motion.div>
        </footer>
      </main>
    </WelcomeSequence>
  )
}
