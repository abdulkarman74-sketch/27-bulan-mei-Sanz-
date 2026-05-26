import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Person = ({ hasRope }: { hasRope?: boolean }) => (
  <div className="relative w-[50px] h-[90px] animate-[bounce_0.5s_infinite_alternate] z-10">
    <svg width="60" height="90" viewBox="0 0 60 90">
      {hasRope && <path d="M 25 45 Q 0 50 -20 50" fill="none" stroke="#dcb5a0" strokeWidth="2" />}
      <path d="M 20 30 L 40 30 L 50 90 L 10 90 Z" fill="#f8f5eb" />
      <path d="M 20 30 L 40 30 L 50 90 L 10 90 Z" fill="none" stroke="#ddd" strokeWidth="1" />
      <circle cx="30" cy="18" r="12" fill="#dcb5a0" />
      <path d="M 18 18 A 12 12 0 0 1 42 18 Z" fill="#222" />
      <line x1="30" y1="35" x2="30" y2="90" stroke="#eee" strokeWidth="1" />
      <line x1="30" y1="35" x2="35" y2="55" stroke="#f8f5eb" strokeWidth="6" strokeLinecap="round" className="origin-[30px_35px] animate-[walk_0.5s_infinite_alternate]" />
    </svg>
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/40 rounded-full blur-[2px]" />
  </div>
);

const Cow = () => (
   <div className="relative w-[130px] h-[100px] animate-[bounce_0.8s_infinite_alternate_ease-in-out] z-10">
     <svg width="130" height="100" viewBox="0 0 130 100" className="drop-shadow-lg">
       <rect x="25" y="65" width="8" height="30" fill="#222" className="origin-top animate-[walk_0.8s_infinite_alternate-reverse]" />
       <rect x="85" y="65" width="8" height="30" fill="#222" className="origin-top animate-[walk_0.8s_infinite_alternate]" />
       
       <rect x="15" y="30" width="85" height="50" rx="20" fill="#fff" />
       
       <path d="M 25 30 Q 40 60 15 55 Z" fill="#111" />
       <path d="M 70 30 Q 95 40 85 80 Q 55 60 70 30 Z" fill="#111" />
       
       <rect x="35" y="65" width="8" height="30" fill="#444" className="origin-top animate-[walk_0.8s_infinite_alternate]" />
       <rect x="95" y="65" width="8" height="30" fill="#444" className="origin-top animate-[walk_0.8s_infinite_alternate-reverse]" />
       
       <ellipse cx="110" cy="40" rx="20" ry="25" fill="#fff" />
       <ellipse cx="115" cy="55" rx="15" ry="12" fill="#f0d5c9" />
       <circle cx="115" cy="30" r="3" fill="#000" />
       <path d="M 105 20 Q 110 5 115 10" fill="none" stroke="#ddd" strokeWidth="4" strokeLinecap="round" />
       <path d="M 95 25 Q 90 10 95 5" fill="none" stroke="#ddd" strokeWidth="4" strokeLinecap="round" />
       <ellipse cx="90" cy="35" rx="10" ry="5" fill="#111" transform="rotate(20 90 35)" />
       <path d="M 16 45 Q 5 60 10 90" fill="none" stroke="#fff" strokeWidth="4" />
       <ellipse cx="10" cy="90" rx="3" ry="6" fill="#111" />
     </svg>
     <div className="absolute -bottom-2 left-4 w-24 h-3 bg-black/40 rounded-full blur-[3px]" />
   </div>
);

const Goat = () => (
  <div className="relative w-[100px] h-[90px] animate-[bounce_0.6s_infinite_alternate_ease-in-out] z-10">
    <svg width="100" height="90" viewBox="0 0 100 90" className="drop-shadow-lg">
      <rect x="20" y="55" width="6" height="30" fill="#5c4033" className="origin-top animate-[walk_0.6s_infinite_alternate-reverse]" />
      <rect x="65" y="55" width="6" height="30" fill="#5c4033" className="origin-top animate-[walk_0.6s_infinite_alternate]" />
      <ellipse cx="45" cy="45" rx="35" ry="20" fill="#c49b73" />
      <path d="M 20 40 Q 45 25 70 40 Z" fill="#8b5a2b" />
      <rect x="28" y="55" width="6" height="30" fill="#8b5a2b" className="origin-top animate-[walk_0.6s_infinite_alternate]" />
      <rect x="73" y="55" width="6" height="30" fill="#8b5a2b" className="origin-top animate-[walk_0.6s_infinite_alternate-reverse]" />
      <ellipse cx="85" cy="30" rx="15" ry="12" fill="#c49b73" transform="rotate(-15 85 30)" />
      <path d="M 90 40 L 95 50 L 85 45 Z" fill="#5c4033" />
      <circle cx="88" cy="27" r="2.5" fill="#000" />
      <path d="M 80 20 Q 65 5 50 15" fill="none" stroke="#5c4033" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="73" cy="32" rx="8" ry="4" fill="#8b5a2b" transform="rotate(30 73 32)" />
      <ellipse cx="10" cy="40" rx="6" ry="3" fill="#c49b73" transform="rotate(-30 10 40)" />
    </svg>
    <div className="absolute -bottom-2 left-4 w-20 h-2 bg-black/40 rounded-full blur-[2px]" />
  </div>
);

const Sheep = () => (
  <div className="relative w-[80px] h-[75px] animate-[bounce_0.5s_infinite_alternate_ease-in-out] z-10">
    <svg width="80" height="75" viewBox="0 0 80 75" className="drop-shadow-lg">
      <rect x="20" y="45" width="5" height="25" fill="#333" className="origin-top animate-[walk_0.5s_infinite_alternate]" />
      <rect x="50" y="45" width="5" height="25" fill="#333" className="origin-top animate-[walk_0.5s_infinite_alternate-reverse]" />
      <circle cx="40" cy="40" r="22" fill="#fff" />
      <circle cx="25" cy="40" r="18" fill="#fff" />
      <circle cx="55" cy="40" r="18" fill="#fff" />
      <circle cx="35" cy="25" r="16" fill="#fff" />
      <circle cx="50" cy="28" r="15" fill="#fff" />
      <circle cx="20" cy="30" r="15" fill="#fff" />
      <circle cx="40" cy="42" r="18" fill="#fcfcfc" className="drop-shadow-sm" />
      <rect x="28" y="45" width="5" height="25" fill="#111" className="origin-top animate-[walk_0.5s_infinite_alternate-reverse]" />
      <rect x="58" y="45" width="5" height="25" fill="#111" className="origin-top animate-[walk_0.5s_infinite_alternate]" />
      <ellipse cx="68" cy="32" rx="10" ry="12" fill="#fff" />
      <ellipse cx="72" cy="35" rx="6" ry="8" fill="#e5e5e5" />
      <circle cx="70" cy="30" r="1.5" fill="#000" />
      <ellipse cx="62" cy="32" rx="4" ry="2" fill="#fff" transform="rotate(20 62 32)" />
      <path d="M 62 22 Q 60 18 65 18" fill="none" stroke="#8b5a2b" strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="35" r="6" fill="#fff" />
    </svg>
    <div className="absolute -bottom-1 left-3 w-14 h-2 bg-black/40 rounded-full blur-[2px]" />
  </div>
);

export default function AnimalParade() {
  const [position, setPosition] = useState(-1200);
  const [sparkle, setSparkle] = useState<{ id: number; x: number } | null>(null);

  useEffect(() => {
    let animationFrame: number;
    let currentX = -1200;
    const speed = window.innerWidth > 768 ? 1.5 : 1;
    let hasSparkled = false;

    const animate = () => {
      currentX += speed;
      setPosition(currentX);
      
      const middleX = window.innerWidth / 2;
      const animalGroupLength = window.innerWidth < 768 ? 200 : 350;
      
      if (currentX + animalGroupLength > middleX - 10 && currentX + animalGroupLength < middleX + 10 && !hasSparkled) {
        setSparkle({ id: Date.now(), x: middleX });
        hasSparkled = true;
        setTimeout(() => setSparkle(null), 3000);
      }

      if (currentX > window.innerWidth + 200) {
        currentX = -1200;
        hasSparkled = false;
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-[180px] pointer-events-none z-[100] overflow-hidden">
      {/* Sparkle overlay */}
      <AnimatePresence>
        {sparkle && (
           <motion.div 
             key={sparkle.id}
             initial={{ opacity: 0, y: 20, scale: 0.8 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, scale: 1.2 }}
             className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
           >
             <div className="flex gap-2 text-2xl">
               <span className="animate-[bounce_0.5s_infinite]">✨</span>
               <span className="animate-[bounce_0.5s_infinite_0.2s]">🌙</span>
               <span className="animate-[bounce_0.5s_infinite_0.4s]">✨</span>
             </div>
             <span className="text-gold-glow font-serif font-bold text-sm md:text-lg drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] mt-1 whitespace-nowrap bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
               Qurban Idul Adha
             </span>
           </motion.div>
        )}
      </AnimatePresence>

      {/* Ground Line & Grass */}
      <div className="absolute bottom-[20px] left-0 w-full h-[1px] bg-green-900/60" />
      <div className="absolute bottom-[16px] left-0 w-[200%] h-[12px] opacity-60 animate-[slide_10s_linear_infinite]" 
           style={{ backgroundImage: 'radial-gradient(circle at 10% 100%, #1a3a2a 2px, transparent 3px), radial-gradient(circle at 60% 100%, #0d2b1a 3px, transparent 4px)', backgroundSize: '35px 12px' }} />

      {/* The Parade Container */}
      <div 
         className="absolute bottom-[20px] flex items-end origin-bottom-left"
         style={{ transform: `translateX(${position}px) scale(${window.innerWidth > 768 ? 1 : 0.65})` }}
      >
        <div className="flex items-end relative">
          
          <div className="mr-8 md:mr-12 relative">
             <Sheep />
             <div className="absolute bottom-0 right-4 w-1.5 h-1.5 bg-white/40 rounded-full animate-[ping_0.7s_infinite]" />
          </div>

          <div className="flex items-end relative mr-12 md:mr-20">
            <Goat />
            <svg width="60" height="40" className="absolute left-[85px] bottom-[30px] z-0">
              <path d="M 0 0 Q 30 20 60 10" fill="none" stroke="#666" strokeWidth="1.5" className="animate-[pulse_1s_infinite]" />
            </svg>
            <div className="ml-10 relative">
              <Person hasRope />
            </div>
             <div className="absolute bottom-0 right-10 w-2 h-2 bg-[#d2b48c]/40 rounded-full animate-[ping_0.9s_infinite]" />
          </div>

          <div className="flex items-end relative">
            <Cow />
            <svg width="60" height="50" className="absolute left-[115px] bottom-[30px] z-0">
              <path d="M 0 0 Q 30 25 60 10" fill="none" stroke="#666" strokeWidth="2" className="animate-[pulse_1.2s_infinite]" />
            </svg>
            <div className="ml-12 relative">
              <Person hasRope />
            </div>
             <div className="absolute bottom-0 right-14 w-2.5 h-2.5 bg-white/40 rounded-full animate-[ping_1.1s_infinite]" />
          </div>

        </div>
      </div>
    </div>
  );
}
