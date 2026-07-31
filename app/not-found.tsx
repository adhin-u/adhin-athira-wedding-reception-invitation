import Link from 'next/link'
import { Heart } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <Heart className="w-9 h-9 text-accent fill-accent/40 mb-6" />
      <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-muted-foreground font-sans font-medium mb-4">
        Page Not Found
      </p>
      <h1 className="font-script text-6xl sm:text-7xl text-foreground mb-6 leading-none">
        Lost the way?
      </h1>
      <p className="text-muted-foreground font-sans text-sm sm:text-base max-w-sm mb-10 leading-relaxed">
        This page doesn&apos;t exist, but the celebration does. Let&apos;s get you back to the invitation.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 hover:border-primary/40 text-primary hover:text-primary font-sans font-semibold tracking-wider py-3 px-6 bg-background/50 hover:bg-background/80 transition-all duration-300"
      >
        Back to the Invitation
      </Link>
    </main>
  )
}
