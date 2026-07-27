export function CelestialTopLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 Z" fill="currentColor" className="text-primary/60" />
      <circle cx="90" cy="30" r="3" fill="currentColor" className="text-primary/40" />
      <circle cx="30" cy="90" r="2" fill="currentColor" className="text-primary/50" />
      <path d="M110 70 L112 80 L122 82 L112 84 L110 94 L108 84 L98 82 L108 80 Z" fill="currentColor" className="text-accent/60" />
      <path d="M20 120 L21 125 L26 126 L21 127 L20 132 L19 127 L14 126 L19 125 Z" fill="currentColor" className="text-primary/30" />
    </svg>
  )
}

export function CelestialTopRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M150 20 L145 45 L120 50 L145 55 L150 80 L155 55 L180 50 L155 45 Z" fill="currentColor" className="text-primary/60" />
      <circle cx="110" cy="30" r="3" fill="currentColor" className="text-primary/40" />
      <circle cx="170" cy="90" r="2" fill="currentColor" className="text-primary/50" />
      <path d="M90 70 L88 80 L78 82 L88 84 L90 94 L92 84 L102 82 L92 80 Z" fill="currentColor" className="text-accent/60" />
      <path d="M180 120 L179 125 L174 126 L179 127 L180 132 L181 127 L186 126 L181 125 Z" fill="currentColor" className="text-primary/30" />
    </svg>
  )
}

export function CelestialBottomLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 180 L55 155 L80 150 L55 145 L50 120 L45 145 L20 150 L45 155 Z" fill="currentColor" className="text-primary/60" />
      <circle cx="90" cy="170" r="3" fill="currentColor" className="text-primary/40" />
      <circle cx="30" cy="110" r="2" fill="currentColor" className="text-primary/50" />
      <path d="M110 130 L112 120 L122 118 L112 116 L110 106 L108 116 L98 118 L108 120 Z" fill="currentColor" className="text-accent/60" />
      <path d="M20 80 L21 75 L26 74 L21 73 L20 68 L19 73 L14 74 L19 75 Z" fill="currentColor" className="text-primary/30" />
    </svg>
  )
}

export function CelestialBottomRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M150 180 L145 155 L120 150 L145 145 L150 120 L155 145 L180 150 L155 155 Z" fill="currentColor" className="text-primary/60" />
      <circle cx="110" cy="170" r="3" fill="currentColor" className="text-primary/40" />
      <circle cx="170" cy="110" r="2" fill="currentColor" className="text-primary/50" />
      <path d="M90 130 L88 120 L78 118 L88 116 L90 106 L92 116 L102 118 L92 120 Z" fill="currentColor" className="text-accent/60" />
      <path d="M180 80 L179 75 L174 74 L179 73 L180 68 L181 73 L186 74 L181 75 Z" fill="currentColor" className="text-primary/30" />
    </svg>
  )
}

export function CelestialDivider({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="20" r="3" fill="currentColor" className="text-accent" />
      <path d="M140 20 L143 23 L150 20 L143 17 Z" fill="currentColor" className="text-primary/80" />
      <path d="M160 20 L157 23 L150 20 L157 17 Z" fill="currentColor" className="text-primary/80" />
      <path d="M100 20 L150 20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-primary/30" />
      <path d="M200 20 L150 20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-primary/30" />
      <circle cx="100" cy="20" r="1.5" fill="currentColor" className="text-primary/50" />
      <circle cx="200" cy="20" r="1.5" fill="currentColor" className="text-primary/50" />
      <path d="M60 20 L62 25 L70 20 L62 15 Z" fill="currentColor" className="text-primary/30" />
      <path d="M240 20 L238 25 L230 20 L238 15 Z" fill="currentColor" className="text-primary/30" />
    </svg>
  )
}
