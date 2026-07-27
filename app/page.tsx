"use client"

import { useRef } from "react"
import { MapPin, Calendar, Heart, Sparkles, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { AmbientSparkles, GoldAccentLines } from "@/components/floating-elements"
import {
  CelestialTopLeft,
  CelestialTopRight,
  CelestialBottomLeft,
  CelestialBottomRight,
  CelestialDivider,
} from "@/components/theme-decoration"
import { motion, useScroll, useTransform } from "motion/react"
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

export default function WeddingInvitation() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Parallax transforms for floral elements
  const yTopLeft = useTransform(scrollYProgress, [0, 1], [0, 150])
  const yTopRight = useTransform(scrollYProgress, [0, 1], [0, 200])
  const yBottomLeft = useTransform(scrollYProgress, [0, 1], [0, -150])
  const yBottomRight = useTransform(scrollYProgress, [0, 1], [0, -200])
  
  // Parallax transform for main content
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <WelcomeSequence>
      <main ref={containerRef} className="min-h-[150vh] bg-background relative overflow-hidden selection:bg-accent/30">
        
       {/* Nebula Gradients */}
       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen" />
       <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] translate-x-1/3 pointer-events-none mix-blend-screen" />
       <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Ambient sparkles background */}
      <AmbientSparkles />
      
      {/* Gold accent decorative lines */}
      <GoldAccentLines />

      {/* Floral decorations with CSS float + Parallax Scroll */}
      <motion.div 
        style={{ y: yTopLeft }}
        className="absolute top-0 left-0 z-10 pointer-events-none"
      >
        <motion.div
           animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
           transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <CelestialTopLeft className="w-40 sm:w-52 md:w-60 lg:w-72 h-40 sm:h-52 md:h-60 lg:h-72 opacity-80" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        style={{ y: yTopRight }}
        className="absolute top-0 right-0 z-10 pointer-events-none"
      >
        <motion.div
           animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
           transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        >
           <CelestialTopRight className="w-40 sm:w-52 md:w-60 lg:w-72 h-40 sm:h-52 md:h-60 lg:h-72 opacity-80" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        style={{ y: yBottomLeft }}
        className="fixed bottom-0 left-0 z-10 pointer-events-none"
      >
        <motion.div
           animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
           transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
        >
          <CelestialBottomLeft className="w-40 sm:w-52 md:w-60 lg:w-72 h-40 sm:h-52 md:h-60 lg:h-72 opacity-80" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        style={{ y: yBottomRight }}
        className="fixed bottom-0 right-0 z-10 pointer-events-none"
      >
        <motion.div
           animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
           transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
        >
          <CelestialBottomRight className="w-40 sm:w-52 md:w-60 lg:w-72 h-40 sm:h-52 md:h-60 lg:h-72 opacity-80" />
        </motion.div>
      </motion.div>

      {/* Main content wrapper */}
      <motion.div style={{ y: contentY }} className="relative z-20 flex flex-col items-center justify-start min-h-screen pt-24 pb-16 sm:py-20">
        
        {/* Header ornament */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-accent/60" />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Sparkles className="w-5 h-5 text-accent" />
          </motion.div>
          <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-accent/60" />
        </motion.div>

        {/* Wedding Reception text */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="text-center w-full px-4"
        >
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-muted-foreground font-sans font-medium mb-3">
            You are cordially invited to
          </p>
          <p className="text-sm sm:text-base tracking-[0.3em] uppercase text-primary font-sans font-semibold mb-12">
            The Wedding Reception of
          </p>
        </motion.div>

        {/* Couple names with premium typography */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-center mb-16 w-full px-4 relative"
        >
          {/* Subtle central glow to separate names from background textures */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120%] bg-accent/5 rounded-[100%] blur-[60px] pointer-events-none mix-blend-screen" />
          
          <h1 className="font-script text-[6rem] sm:text-[8rem] md:text-[10rem] font-normal text-foreground tracking-normal block relative z-10 leading-[0.8] mb-2">
            Adhin
            <motion.span 
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -right-2 top-4 w-4 h-4 rounded-full bg-accent/50 filter blur-[2px]" 
            />
          </h1>
          
          {/* Decorative ampersand section */}
          <div className="flex items-center justify-center gap-4 my-6 sm:my-10">
            <span className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-accent/50 to-primary/30" />
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-accent fill-accent/40" />
            </motion.div>
            <span className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-accent/50 to-primary/30" />
          </div>
          
          <h1 className="font-script text-[6rem] sm:text-[8rem] md:text-[10rem] font-normal text-foreground tracking-normal block relative z-10 leading-[0.8] mt-2">
            Athira
            <motion.span 
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
              className="absolute -left-2 bottom-6 w-3 h-3 rounded-full bg-primary/60 filter blur-[2px]" 
            />
          </h1>
        </motion.div>

        {/* Invitation message */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center text-muted-foreground font-sans text-[15px] sm:text-base max-w-[85vw] md:max-w-lg mx-auto mb-12 sm:mb-16 leading-relaxed px-2 font-medium"
        >
          Together with their beloved families, joyfully invite you to share in
          the celebration of their new journey as one
        </motion.p>

        {/* Scroll indicator sequence */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="flex flex-col items-center justify-center text-muted-foreground mb-16 sm:mb-20"
        >
           <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold mb-4 opacity-50">Scroll to discover</span>
           <motion.div
             animate={{ y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
             transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
             className="w-[1px] h-12 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
           />
        </motion.div>

        {/* Bento Grid Section - Mobile Optimized */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, type: "spring", bounce: 0.2 }}
           className="w-full max-w-4xl px-4 mx-auto mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Countdown Span Full on Mobile, 12 cols on Desktop */}
            <div className="md:col-span-12 group">
              <div className="h-full bg-card/60 backdrop-blur-xl border border-border/50 rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-4 opacity-10 blur-sm pointer-events-none">
                    <Clock className="w-24 h-24" />
                 </div>
                 <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-primary font-bold mb-6 flex items-center gap-2">
                   <Sparkles className="w-4 h-4" /> The Wait Continues
                 </h3>
                 <CountdownTimer targetDate={EVENT_DATE} />
              </div>
            </div>

            {/* Date Card */}
            <div className="md:col-span-5 group">
               <div className="h-full bg-card/60 backdrop-blur-xl border border-border/50 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-center items-center text-center relative overflow-hidden">
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
                 />
                 <Calendar className="w-8 h-8 text-accent mb-4 opacity-80" />
                 <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-3 font-semibold">
                   Save the Date
                 </p>
                 <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 font-semibold tracking-tight">
                   14 Sep 2026
                 </h2>
                 <div className="inline-flex items-center justify-center gap-3 text-muted-foreground font-sans bg-background/80 backdrop-blur-sm rounded-full py-2 px-5 border border-border/50 shadow-sm mb-6">
                   <Clock className="w-4 h-4 text-primary" />
                   <span className="tracking-widest text-sm font-bold">5:00 PM - 9:00 PM</span>
                 </div>
                 
                 <Button
                   asChild
                   variant="outline"
                   className="mt-auto border-primary/20 hover:border-primary/40 text-primary hover:text-primary font-sans font-semibold tracking-wider py-6 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 w-full"
                 >
                   <a href={generateGoogleCalendarLink()} target="_blank" rel="noopener noreferrer">
                     <Calendar className="w-4 h-4 mr-2" />
                     Remind Me
                   </a>
                 </Button>
               </div>
            </div>

            {/* Venue Card */}
            <div className="md:col-span-7 group">
              <div className="h-full bg-card/60 backdrop-blur-xl border border-border/50 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-center relative overflow-hidden">
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="absolute -left-12 -bottom-12 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
                 />
                <MapPin className="w-8 h-8 text-primary mb-4 opacity-80" />
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-2 font-semibold">
                  The Venue
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-foreground mb-3 font-medium">
                  AGP Garden Heritage Hall
                </h3>
                <p className="text-muted-foreground font-sans text-[15px] max-w-[280px] leading-relaxed mb-6 font-medium">
                  Thondayad, Calicut, Kerala<br/>
                  <span className="text-xs opacity-70">A beautiful heritage setting for our special day.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold tracking-wider py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full"
                    >
                      <a href={VENUE_LINK} target="_blank" rel="noopener noreferrer">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <CelestialDivider className="w-56 sm:w-72 h-8 opacity-70" />
        </motion.div>

        {/* Graceful closing message */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.5 }}
          className="mt-8 text-center max-w-lg px-6"
        >
          <div className="relative py-10 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent rounded-[3rem]">
            <span className="absolute top-2 left-6 text-7xl text-accent/20 font-serif leading-none italic">"</span>
            <span className="absolute bottom-[-1.5rem] right-6 text-7xl text-accent/20 font-serif leading-none italic">"</span>
            
            <p className="font-serif text-2xl sm:text-3xl text-foreground/80 italic leading-snug">
              A celebration of love is <br/>incomplete without you.
            </p>
            <p className="font-sans text-sm mt-6 text-foreground/70 font-semibold uppercase tracking-widest text-center">
              Join us as we begin our happily ever after.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="relative z-20 pt-16 pb-10 bg-gradient-to-t from-muted/60 via-muted/20 to-transparent border-t border-border/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent/60" />
                <Heart className="w-5 h-5 text-primary/50 fill-primary/20" />
                <span className="w-1 h-1 rounded-full bg-accent/60" />
              </div>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
            </div>
            
            <p className="text-muted-foreground font-sans text-xs sm:text-sm mb-4 font-bold tracking-[0.2em] uppercase">
              With love and gratitude
            </p>
            <p className="font-serif text-3xl sm:text-4xl text-foreground/90 mb-2 font-medium">
              Adhin & Athira
            </p>
            <p className="text-xs sm:text-sm text-primary/80 font-sans mt-6 tracking-[0.25em] uppercase font-bold bg-primary/5 py-2 px-6 rounded-full inline-block border border-primary/10">
              14th Sep 2026 • Calicut
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
    </WelcomeSequence>
  )
}
