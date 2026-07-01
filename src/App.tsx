import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { CalendarPlus, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

// SVGs and components for the watercolor hindu theme

const BananaLeaf = ({ className, style }: { className?: string, style?: any }) => (
  <svg viewBox="0 0 100 200" className={className} style={style} fill="none" preserveAspectRatio="none">
    <path d="M50 200 C50 200, 20 150, 10 100 C0 50, 50 0, 50 0 C50 0, 100 50, 90 100 C80 150, 50 200, 50 200 Z" fill="url(#leafGrad)" />
    <path d="M50 0 L50 200" stroke="#166534" strokeWidth="2" strokeDasharray="5,2" opacity="0.4"/>
    <path d="M50 50 Q30 40 10 70 M50 90 Q20 80 15 110 M50 130 Q35 120 20 150" stroke="#166534" strokeWidth="1" opacity="0.2" fill="none"/>
    <path d="M50 40 Q70 30 90 60 M50 80 Q80 70 85 100 M50 120 Q65 110 80 140" stroke="#166534" strokeWidth="1" opacity="0.2" fill="none"/>
    <defs>
      <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="50%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#166534" />
      </linearGradient>
    </defs>
  </svg>
);

const MarigoldGarland = ({ length = 5, className }: { length?: number, className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    {Array.from({length}).map((_, i) => (
      <div key={`marigold-${i}`} className="w-8 h-8 -my-1 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-sm opacity-90 backdrop-blur-sm relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10 rounded-full scale-75"></div>
      </div>
    ))}
    {/* Jasmine strings hanging below */}
    <div className="w-[2px] h-12 bg-white/60 -my-1 shadow-sm relative">
       {Array.from({length: 4}).map((_, i) => (
          <div key={`jasmine-${i}`} className="absolute w-3 h-2 bg-white rounded-full left-1/2 -translate-x-1/2 shadow-sm" style={{ top: `${i * 30}%` }}></div>
       ))}
    </div>
    <div className="w-4 h-4 rounded-full bg-pink-500 shadow flex items-center justify-center">
       <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
    </div>
  </div>
);

const StandingDiya = ({ className }: { className?: string }) => (
  <div className={`relative flex flex-col items-center ${className}`}>
    {/* Flame */}
    <motion.div 
      className="w-4 h-6 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-t from-yellow-300 to-orange-500 absolute -top-4 z-10"
      style={{ boxShadow: '0 0 20px 5px rgba(234,179,8,0.5)', transformOrigin: 'bottom center' }}
      animate={{ scale: [1, 1.1, 1], rotate: [-2, 2, -2] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Lamp Body */}
    <svg width="40" height="120" viewBox="0 0 40 120" fill="url(#brassGrad)" className="relative z-0 drop-shadow-lg">
      {/* Top bowl */}
      <path d="M5 10 C 15 20, 25 20, 35 10 L 25 20 L 15 20 Z" />
      {/* Pillar */}
      <path d="M15 20 C 10 40, 10 80, 15 100 L 25 100 C 30 80, 30 40, 25 20 Z" />
      {/* Base */}
      <path d="M10 100 C 0 110, 0 120, 5 120 L 35 120 C 40 120, 40 110, 30 100 Z" />
      {/* Details */}
      <rect x="12" y="40" width="16" height="5" rx="2" fill="#854d0e" opacity="0.5"/>
      <rect x="12" y="70" width="16" height="5" rx="2" fill="#854d0e" opacity="0.5"/>
      <defs>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A67C00" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FDE08B" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const NilavilakkuMotif = () => (
  <svg viewBox="0 0 100 150" className="w-10 h-16 md:w-12 md:h-20 text-brass drop-shadow-sm" fill="currentColor">
    {/* Base */}
    <path d="M 30 140 C 30 130, 45 125, 45 125 L 45 120 C 30 120, 20 115, 20 115 L 80 115 C 80 115, 70 120, 55 120 L 55 125 C 55 125, 70 130, 70 140 L 85 145 L 15 145 Z" />
    {/* Stem */}
    <rect x="46" y="55" width="8" height="60" />
    {/* Decorative rings on stem */}
    <rect x="42" y="65" width="16" height="4" rx="2" />
    <rect x="42" y="85" width="16" height="4" rx="2" />
    <rect x="44" y="100" width="12" height="4" rx="2" />
    {/* Top tray */}
    <path d="M 20 50 C 20 65, 45 60, 45 60 L 55 60 C 55 60, 80 65, 80 50 Z" />
    {/* Top center piece */}
    <path d="M 46 48 L 50 25 L 54 48 Z" />
    {/* Base detail */}
    <path d="M 35 140 H 65 V 142 H 35 Z" fill="var(--color-marigold-dark)" />
    
    {/* Flames */}
    <path d="M 50 22 C 48 18, 50 10, 50 10 C 50 10, 52 18, 50 22 Z" fill="#F59E0B" className="opacity-90" />
    <path d="M 25 48 C 23 44, 25 36, 25 36 C 25 36, 27 44, 25 48 Z" fill="#F59E0B" className="opacity-80" />
    <path d="M 75 48 C 73 44, 75 36, 75 36 C 75 36, 77 44, 75 48 Z" fill="#F59E0B" className="opacity-80" />
    <path d="M 38 51 C 36 47, 38 39, 38 39 C 38 39, 40 47, 38 51 Z" fill="#F59E0B" className="opacity-70" />
    <path d="M 62 51 C 60 47, 62 39, 62 39 C 62 39, 64 47, 62 51 Z" fill="#F59E0B" className="opacity-70" />
  </svg>
);

const MandalaBackground = () => (
  <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.03]">
    <svg viewBox="0 0 200 200" className="w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] max-w-[900px] max-h-[900px] text-brass animate-spin-slow" stroke="currentColor" fill="none" strokeWidth="0.5">
      <circle cx="100" cy="100" r="95" />
      <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="3 4" />
      <circle cx="100" cy="100" r="65" />
      <circle cx="100" cy="100" r="45" strokeDasharray="1 3" />
      
      {/* Outer Petals */}
      {[...Array(16)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
          <path d="M 100 100 Q 115 35 100 5 Z" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
          <path d="M 100 100 Q 108 55 100 20 Z" strokeWidth="0.5" />
          <circle cx="100" cy="12" r="1.5" fill="currentColor" />
        </g>
      ))}
      
      {/* Inner Petals */}
      {[...Array(8)].map((_, i) => (
        <g key={`inner-${i}`} transform={`rotate(${i * 45} 100 100)`}>
          <path d="M 100 100 Q 110 65 100 35 Z" fill="currentColor" fillOpacity="0.1" />
        </g>
      ))}
      
      {/* Center Motif */}
      <circle cx="100" cy="100" r="15" />
      {[...Array(8)].map((_, i) => (
        <g key={`center-${i}`} transform={`rotate(${i * 45} 100 100)`}>
          <path d="M 100 100 Q 104 90 100 85 Z" />
        </g>
      ))}
    </svg>
  </div>
);

const LotusFlower = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={className}
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    {/* Outer wide petals */}
    <path d="M 50 85 C 20 85, 5 55, 10 40 C 20 50, 35 70, 50 85 Z" fill="url(#lotusPinkDark)" />
    <path d="M 50 85 C 80 85, 95 55, 90 40 C 80 50, 65 70, 50 85 Z" fill="url(#lotusPinkDark)" />

    {/* Mid outer petals */}
    <path d="M 50 85 C 30 85, 15 45, 20 25 C 30 40, 45 70, 50 85 Z" fill="url(#lotusPinkBase)" />
    <path d="M 50 85 C 70 85, 85 45, 80 25 C 70 40, 55 70, 50 85 Z" fill="url(#lotusPinkBase)" />

    {/* Inner petals */}
    <path d="M 50 85 C 40 85, 25 30, 35 15 C 45 35, 48 70, 50 85 Z" fill="url(#lotusPinkLight)" />
    <path d="M 50 85 C 60 85, 75 30, 65 15 C 55 35, 52 70, 50 85 Z" fill="url(#lotusPinkLight)" />

    {/* Center petal */}
    <path d="M 50 85 C 45 80, 42 20, 50 5 C 58 20, 55 80, 50 85 Z" fill="url(#lotusPinkCenter)" />
    
    <defs>
      <linearGradient id="lotusPinkDark" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#be185d" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
      <linearGradient id="lotusPinkBase" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#f9a8d4" />
      </linearGradient>
      <linearGradient id="lotusPinkLight" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#fdf2f8" />
      </linearGradient>
      <linearGradient id="lotusPinkCenter" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#fff1f2" />
      </linearGradient>
    </defs>
  </motion.svg>
);

const GoldDivider = () => (
  <div className="flex items-center justify-center w-full my-6 opacity-60">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-brass to-brass"></div>
    <div className="mx-3 rotate-45 w-2 h-2 bg-brass border border-brass-dark"></div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-brass to-brass"></div>
  </div>
);

const AmbientPetal = ({ x, delay, duration, color }: { x: string, delay: number, duration: number, color: string }) => {
  return (
    <motion.div
      className={`absolute top-[-5%] z-20 pointer-events-none rounded-[50%_0_50%_50%] ${color} opacity-60 backdrop-blur-sm drop-shadow-sm`}
      style={{ left: x, width: 12, height: 12, willChange: 'transform' }}
      animate={{ 
        y: ['0vh', '110vh'],
        x: [0, Math.random() * 60 - 30, Math.random() * 60 - 30, 0],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        ease: "linear",
        delay
      }}
    />
  );
};

const ScrollProgressBorders = () => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Left moving border */}
      <div className="fixed left-3 md:left-6 top-10 bottom-10 z-40 pointer-events-none flex flex-col items-center">
         {/* The line that grows */}
         <motion.div className="w-[1px] bg-gradient-to-b from-brass/50 via-brass/30 to-transparent origin-top" style={{ scaleY: scrollYProgress, height: '100%' }} />
         {/* The travelling motif */}
         <motion.div className="absolute top-0 text-brass opacity-80" style={{ top: yOffset }}>
           <div className="-translate-y-1/2 -translate-x-1/2 absolute top-0 left-1/2 w-3 h-3 rotate-45 border border-brass flex items-center justify-center">
             <div className="w-1 h-1 bg-brass-dark"></div>
           </div>
         </motion.div>
      </div>

      {/* Right moving border */}
      <div className="fixed right-3 md:right-6 top-10 bottom-10 z-40 pointer-events-none flex flex-col items-center">
         <motion.div className="w-[1px] bg-gradient-to-b from-brass/50 via-brass/30 to-transparent origin-top" style={{ scaleY: scrollYProgress, height: '100%' }} />
         <motion.div className="absolute top-0 text-brass opacity-80" style={{ top: yOffset }}>
           <div className="-translate-y-1/2 -translate-x-1/2 absolute top-0 left-1/2 w-3 h-3 rotate-45 border border-brass flex items-center justify-center">
             <div className="w-1 h-1 bg-brass-dark"></div>
           </div>
         </motion.div>
      </div>
    </>
  );
};

export default function App() {
  const calendarLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony&dates=20260913T043000Z/20260913T051500Z&details=Join+us+as+we+celebrate+the+wedding+ceremony.&location=Talap,+Kannur,+Kerala,+India";
  const mapsLink = "https://maps.app.goo.gl/2QwJwrw4cpmYJY8W9";
  
  const [petals, setPetals] = useState<Array<any>>([]);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    // Append beautiful wedding emojis to the URL path for that extra touch
    if (window.location.pathname === '/') {
      window.history.replaceState(null, '', '/💍✨');
    }
  }, []);

  useEffect(() => {
    const petalCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 15;
    const newPetals = Array.from({length: petalCount}).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      duration: Math.random() * 8 + 8,
      color: Math.random() > 0.5 ? 'bg-pink-400' : 'bg-orange-400'
    }));
    setPetals(newPetals);
    
    // Intro timer
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <>
      <AnimatePresence>
        <div className="paper-texture"></div>
        {!introDone && (
          <motion.div
            key="intro"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-watercolor-bg"
          >
            <motion.div
               initial={{ scale: 0.5, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
               className="flex flex-col items-center"
            >
               <LotusFlower className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl mb-8" />
               <motion.div
                 initial={{ opacity: 0, y: 5 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8, duration: 1 }}
                 className="text-brass-dark font-sans tracking-[0.25em] text-[0.65rem] md:text-xs uppercase font-bold text-center mb-4"
               >
                 Together with our loved ones
               </motion.div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1, duration: 1.5 }}
               className="text-earth-text font-serif tracking-[0.2em] mt-8 text-xl text-center flex flex-col items-center gap-2"
            >
               <span className="font-script text-5xl text-marigold-dark tracking-normal">Athira & Adhin</span>
               <span className="text-[0.6rem] uppercase tracking-[0.3em] font-sans font-bold text-earth-text/60 mt-2">Are getting married</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-watercolor-bg relative overflow-hidden flex flex-col items-center justify-center selection:bg-brass selection:text-white pb-12 pt-6 md:py-16 px-4">
        
        {/* Subtle Rotating Mandala Background */}
        <MandalaBackground />

        {/* Moving Scroll Borders */}
        {introDone && <ScrollProgressBorders />}

        {/* Banana Leaves in Corners */}
        {introDone && (
          <>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2, delay: 0.5 }} className="absolute -top-10 -left-10 md:top-0 md:left-0 z-10 origin-top-left -rotate-12 pointer-events-none">
              <BananaLeaf className="w-40 h-56 md:w-56 md:h-80 opacity-90 sepia-[0.3]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2, delay: 0.8 }} className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 z-10 origin-bottom-right shadow-xl pointer-events-none rotate-[160deg]">
              <BananaLeaf className="w-40 h-56 md:w-64 md:h-[320px] opacity-90 sepia-[0.3]" />
            </motion.div>
          </>
        )}

        {/* Hanging Garlands */}
        {introDone && (
          <>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 1 }} className="absolute top-0 right-10 md:right-32 z-10">
              <MarigoldGarland length={4} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 1.3 }} className="absolute top-0 right-2 md:right-16 z-10">
              <MarigoldGarland length={6} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 1.5 }} className="absolute top-0 left-20 md:left-40 z-10">
              <MarigoldGarland length={3} />
            </motion.div>
          </>
        )}

        {/* Diyas & Lotus at Bottom */}
        {introDone && (
          <div className="absolute bottom-6 md:bottom-12 flex justify-between w-full px-8 md:px-32 z-10 items-end pointer-events-none">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1.5 }}>
               <StandingDiya className="opacity-90 scale-75 md:scale-90 transform-origin-bottom" />
             </motion.div>
             <div className="flex gap-4">
               <LotusFlower className="w-12 h-12 opacity-80" delay={0} />
               <LotusFlower className="w-16 h-16 opacity-90 z-20 translate-y-1" delay={1} />
               <LotusFlower className="w-12 h-12 opacity-80" delay={2} />
             </div>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1.8 }}>
               <StandingDiya className="opacity-90 scale-75 md:scale-90 transform-origin-bottom" />
             </motion.div>
          </div>
        )}

        {/* Falling Petals */}
        {introDone && petals.map(petal => (
          <AmbientPetal key={petal.id} x={petal.x} delay={petal.delay} duration={petal.duration} color={petal.color} />
        ))}

        {/* Main Content Area */}
        {introDone && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="w-full max-w-[480px] z-20 relative pt-4 md:-mt-12"
          >
            <div className="text-center relative z-10 flex flex-col items-center justify-center pt-8 md:pt-10 pb-24 px-4">
              
              <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center w-full">
                
                <motion.div variants={item} className="flex flex-col items-center w-full mb-10">
                  <NilavilakkuMotif />
                </motion.div>

                <motion.h4 variants={item} className="text-xs md:text-sm tracking-[0.25em] font-sans text-earth-text mb-8 font-bold uppercase text-center w-full drop-shadow-sm leading-relaxed max-w-[80%]">
                  Together with our loved ones
                </motion.h4>
                
                <motion.div variants={item} className="flex flex-col items-center space-y-2 w-full mt-8 md:mt-12">
                   <h1 className="font-script text-7xl md:text-8xl text-marigold-dark drop-shadow-sm font-medium gold-shimmer-text">
                    Athira
                  </h1>
                  <span className="text-2xl md:text-3xl text-brass-dark font-serif italic relative top-[-5px]">
                    &
                  </span>
                  <h1 className="font-script text-7xl md:text-8xl text-marigold-dark drop-shadow-sm font-medium relative top-[-15px] gold-shimmer-text tracking-wider">
                    Adhin
                  </h1>
                </motion.div>

                <motion.div variants={item} className="w-full flex flex-col items-center mt-6 mb-12">
                  <GoldDivider />
                  <p className="font-serif italic text-lg md:text-xl text-earth-text/90 mb-4 px-6 leading-relaxed">
                    We cordially invite you to grace our wedding celebration.
                  </p>
                  <p className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-brass-dark font-bold leading-relaxed px-4 text-center">
                    Your presence would mean the world to us
                  </p>
                </motion.div>

                <motion.div 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={container} 
                  className="flex flex-col items-center w-full mb-16 text-earth-text mt-8"
                >
                  <motion.div variants={item} className="flex flex-col space-y-1 w-full text-center group transition-all duration-300">
                    <div className="font-sans uppercase tracking-[0.15em] text-[0.65rem] text-brass-dark font-bold mb-1">Muhurtham</div>
                    <div className="font-serif text-[1.3rem] font-bold tracking-wide">Sunday, 13th Sep 2026</div>
                    <div className="font-sans text-xs tracking-widest text-earth-text/70 pt-1 font-medium">10:00 AM — 10:45 AM</div>
                  </motion.div>
                  
                  <motion.div variants={item} className="w-8 h-[1px] bg-brass/40 my-8"></motion.div>
                  
                  <motion.div variants={item} className="flex flex-col space-y-1 w-full text-center">
                    <div className="font-sans uppercase tracking-[0.15em] text-[0.65rem] text-brass-dark font-bold mb-1">Venue</div>
                    <div className="font-serif text-[1.2rem] font-bold tracking-wide">Bride's House</div>
                    <div className="font-sans text-[0.7rem] uppercase tracking-wider text-earth-text/70 font-medium pb-1 mt-1 leading-relaxed">Talap, <br/> Kannur</div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={container} 
                  className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4 max-w-sm mt-8"
                >
                  <motion.a 
                    variants={item}
                    href={calendarLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm border border-marigold/30 py-3.5 px-4 rounded-md shadow-sm hover:bg-white/80 hover:border-marigold transition-all duration-300 group"
                  >
                    <CalendarPlus size={18} className="text-marigold group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-earth-text">Save Date</span>
                      <span className="font-sans text-[0.55rem] text-earth-text/60 font-medium uppercase tracking-widest mt-0.5">Add to Calendar</span>
                    </div>
                  </motion.a>
                  <motion.a 
                    variants={item}
                    href={mapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-brass to-brass-dark text-white py-3.5 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <MapPin size={18} className="group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span className="font-sans text-[0.65rem] font-bold uppercase tracking-widest text-white">Directions</span>
                      <span className="font-sans text-[0.55rem] text-white/80 font-medium uppercase tracking-widest mt-0.5">View on Maps</span>
                    </div>
                  </motion.a>
                </motion.div>

                <motion.div 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{ once: true, margin: "-50px" }} 
                  variants={container} 
                  className="mt-24 mb-16 flex flex-col items-center w-full"
                >
                  <motion.p variants={item} className="font-script text-4xl md:text-5xl text-brass-dark mb-4 gold-shimmer-text">
                    With Gratitude
                  </motion.p>
                  <motion.p variants={item} className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-earth-text/70 font-bold">Athira & Adhin</motion.p>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
