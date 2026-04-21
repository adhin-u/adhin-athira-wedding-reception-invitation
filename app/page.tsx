"use client"

import { MapPin, Calendar, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { AmbientSparkles, GoldAccentLines } from "@/components/floating-elements"
import {
  FloralTopLeft,
  FloralTopRight,
  FloralBottomLeft,
  FloralBottomRight,
  FloralDivider,
} from "@/components/floral-decoration"

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
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes floatAnimationDelayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-1deg); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(122, 154, 122, 0.15); }
          50% { box-shadow: 0 0 25px rgba(122, 154, 122, 0.3); }
        }
        .float-animation {
          animation: floatAnimation 6s ease-in-out infinite;
        }
        .float-animation-delayed {
          animation: floatAnimationDelayed 7s ease-in-out 1s infinite;
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .scale-in {
          animation: scaleIn 0.7s ease-out forwards;
        }
        .pulse-soft {
          animation: pulseSoft 3s ease-in-out infinite;
        }
        .glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient sparkles background */}
      <AmbientSparkles />
      
      {/* Gold accent decorative lines */}
      <GoldAccentLines />

      {/* Floral decorations with animations */}
      <div className="float-animation">
        <FloralTopLeft className="absolute top-0 left-0 w-32 sm:w-40 md:w-52 lg:w-60 h-32 sm:h-40 md:h-52 lg:h-60 pointer-events-none z-10" />
      </div>
      <div className="float-animation-delayed">
        <FloralTopRight className="absolute top-0 right-0 w-32 sm:w-40 md:w-52 lg:w-60 h-32 sm:h-40 md:h-52 lg:h-60 pointer-events-none z-10" />
      </div>
      <div className="float-animation-delayed">
        <FloralBottomLeft className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-52 lg:w-60 h-32 sm:h-40 md:h-52 lg:h-60 pointer-events-none z-10" />
      </div>
      <div className="float-animation">
        <FloralBottomRight className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-52 lg:w-60 h-32 sm:h-40 md:h-52 lg:h-60 pointer-events-none z-10" />
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-16 sm:py-20">
        
        {/* Header ornament */}
        <div className="flex items-center gap-3 mb-6 fade-in" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
          <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-accent/60" />
          <Sparkles className="w-4 h-4 text-accent pulse-soft" />
          <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent/60" />
        </div>

        {/* Wedding Reception text */}
        <p 
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-muted-foreground font-sans mb-2 fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
        >
          You are cordially invited to
        </p>
        <p 
          className="text-sm sm:text-base tracking-[0.3em] uppercase text-primary font-sans font-medium mb-8 fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
        >
          The Wedding Reception of
        </p>

        {/* Couple names with elegant styling */}
        <div 
          className="text-center mb-8 scale-in"
          style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-foreground tracking-wide relative">
            Adhin
            <span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-accent/40 pulse-soft" />
          </h1>
          
          {/* Decorative ampersand section */}
          <div className="flex items-center justify-center gap-4 my-4 sm:my-6">
            <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-accent/60 to-primary/40" />
            <div className="relative">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-accent fill-accent/20 pulse-soft" />
              <div className="absolute inset-0 blur-md bg-accent/20 rounded-full glow-pulse" />
            </div>
            <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-accent/60 to-primary/40" />
          </div>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-foreground tracking-wide relative">
            Athira
            <span className="absolute -left-1 -bottom-0 w-1.5 h-1.5 rounded-full bg-primary/50 pulse-soft" style={{ animationDelay: "0.5s" }} />
          </h1>
        </div>

        {/* Invitation message */}
        <p 
          className="text-center text-muted-foreground font-sans text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed fade-in"
          style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}
        >
          Together with their beloved families, joyfully invite you to share in
          the celebration of their new journey as one
        </p>

        {/* Decorative divider */}
        <div className="fade-in pulse-soft" style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}>
          <FloralDivider className="w-48 sm:w-64 h-8" />
        </div>

        {/* Date Card */}
        <div 
          className="mt-10 mb-8 text-center relative fade-in-up"
          style={{ animationDelay: "0.9s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="relative px-8 py-6 sm:px-12 sm:py-8 rounded-2xl bg-card/70 backdrop-blur-sm border border-border/40 shadow-xl glow-pulse">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-accent/40" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accent/40" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-accent/40" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-accent/40" />
            
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-2">
              Save the Date
            </p>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
              14th September 2026
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground font-sans">
              <span className="h-px w-6 bg-accent/40" />
              <span className="tracking-wider text-sm sm:text-base">5:00 PM - 9:00 PM</span>
              <span className="h-px w-6 bg-accent/40" />
            </div>
          </div>
        </div>

        {/* Venue Card */}
        <div 
          className="text-center mb-12 max-w-sm fade-in-up"
          style={{ animationDelay: "1s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans">
              Venue
            </p>
          </div>
          <p className="font-serif text-xl sm:text-2xl text-foreground mb-1">
            AGP Garden Heritage Hall
          </p>
          <p className="text-muted-foreground font-sans text-sm sm:text-base">
            Thondayad, Calicut, Kerala
          </p>
        </div>

        {/* Countdown Section */}
        <div 
          className="mb-12 w-full max-w-lg fade-in-up"
          style={{ animationDelay: "1.1s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <p className="text-xs sm:text-sm text-primary font-sans uppercase tracking-[0.25em] font-medium">
              Counting Every Moment
            </p>
            <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <CountdownTimer targetDate={EVENT_DATE} />
        </div>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-md fade-in-up"
          style={{ animationDelay: "1.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          <Button
            asChild
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium tracking-wide py-6 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={VENUE_LINK} target="_blank" rel="noopener noreferrer">
              <MapPin className="w-4 h-4 mr-2" />
              Navigate to Venue
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 border-primary/50 text-primary hover:bg-primary/10 font-sans font-medium tracking-wide py-6 text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={generateGoogleCalendarLink()} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4 mr-2" />
              Add to Calendar
            </a>
          </Button>
        </div>

        {/* Graceful closing message */}
        <div 
          className="mt-14 text-center max-w-md px-6 fade-in"
          style={{ animationDelay: "1.4s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="relative py-6 px-4">
            {/* Decorative quotes */}
            <span className="absolute top-0 left-0 text-4xl text-accent/30 font-serif leading-none">{'"'}</span>
            <span className="absolute bottom-0 right-0 text-4xl text-accent/30 font-serif leading-none">{'"'}</span>
            
            <p className="font-serif text-lg sm:text-xl text-foreground/90 italic leading-relaxed">
              A celebration of love is incomplete without you.
              <br />
              Join us as we begin our happily ever after.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-20 py-8 border-t border-border/30 bg-gradient-to-t from-muted/30 to-transparent">
        <div className="container mx-auto px-4 text-center">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              <Heart className="w-4 h-4 text-primary/50 fill-primary/20 pulse-soft" />
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
            </div>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          
          <p className="text-muted-foreground font-sans text-sm mb-2">
            With love and gratitude,
          </p>
          <p className="font-serif text-xl text-foreground/80">
            Adhin & Athira
          </p>
          <p className="text-xs text-muted-foreground/70 font-sans mt-3 tracking-wider">
            14 September 2026 | Calicut, Kerala
          </p>
          
          {/* Bottom flourish */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            <span className="w-1 h-1 rounded-full bg-accent/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
          </div>
        </div>
      </footer>
    </main>
  )
}
