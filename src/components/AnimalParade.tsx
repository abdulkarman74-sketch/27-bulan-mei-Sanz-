import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PersonDewasa = () => (
    <div className="relative z-20" style={{ width: 60, height: 110 }}>
        <svg width="60" height="110" viewBox="0 0 60 110" className="anim-bounce-gait" style={{ animationDuration: '0.4s' }}>
            <ellipse cx="20" cy="107" rx="7" ry="3.5" fill="#111" className="anim-leg-lt" style={{ animationDuration: '0.8s' }} />
            <ellipse cx="40" cy="107" rx="7" ry="3.5" fill="#111" className="anim-leg-rt" style={{ animationDuration: '0.8s' }} />
            <path d="M 23 30 L 37 30 L 48 105 L 12 105 Z" fill="#FAFAFA" stroke="#C9A84C" strokeWidth="1.5" />
            <circle cx="30" cy="22" r="10" fill="#C68642" />
            <path d="M 30 22 C 38 22, 40 25, 40 28 C 40 32, 35 32, 30 32" fill="#FAFAFA" />
            <path d="M 32 30 L 38 28 L 35 34 Z" fill="#3B2013" />
            <path d="M 21 20 C 21 8 39 8 39 20 Z" fill="#1a1a1a" />
            <path d="M 30 35 L 5 50" stroke="#FAFAFA" strokeWidth="6" strokeLinecap="round" className="anim-leg-lt" style={{ animationDuration: '0.8s' }} />
            <circle cx="5" cy="50" r="4" fill="#C68642" className="anim-leg-lt" style={{ animationDuration: '0.8s' }} />
        </svg>
    </div>
);

const PersonMuda = () => (
    <div className="relative z-20" style={{ width: 45, height: 95 }}>
        <svg width="45" height="95" viewBox="0 0 45 95" className="anim-bounce-gait" style={{ animationDuration: '0.35s' }}>
            <ellipse cx="15" cy="92" rx="5" ry="2.5" fill="#111" className="anim-leg-lt" style={{ animationDuration: '0.7s' }} />
            <ellipse cx="30" cy="92" rx="5" ry="2.5" fill="#111" className="anim-leg-rt" style={{ animationDuration: '0.7s' }} />
            <path d="M 10 50 L 35 50 L 38 90 L 7 90 Z" fill="#1a3a2a" />
            <path d="M 12 25 L 33 25 L 36 52 L 9 52 Z" fill="#FAFAFA" />
            <circle cx="22" cy="18" r="9" fill="#C68642" />
            <path d="M 14 15 C 14 6 30 6 30 15 Z" fill="#1a1a1a" />
            <path d="M 22 30 L 2 45" stroke="#FAFAFA" strokeWidth="5" strokeLinecap="round" className="anim-leg-lt" style={{ animationDuration: '0.7s' }} />
            <circle cx="2" cy="45" r="3.5" fill="#C68642" className="anim-leg-lt" style={{ animationDuration: '0.7s' }} />
        </svg>
    </div>
);

const Cow = () => (
    <div className="relative z-10" style={{ width: 160, height: 115 }}>
        <svg width="160" height="115" viewBox="0 0 160 115" className="anim-bounce-gait drop-shadow-xl" style={{ animationDuration: '0.4s' }}>
            <g className="anim-leg-lt" style={{ animationDuration: '0.8s' }}>
                <rect x="35" y="60" width="12" height="35" fill="#E8DCD0" />
                <rect x="35" y="85" width="12" height="10" fill="#1a1a1a" />
                <line x1="41" y1="85" x2="41" y2="95" stroke="#F5EDE0" strokeWidth="1" />
            </g>
            <g className="anim-leg-lt" style={{ animationDuration: '0.8s' }}>
                <rect x="105" y="60" width="12" height="35" fill="#E8DCD0" />
                <rect x="105" y="85" width="12" height="10" fill="#1a1a1a" />
                <line x1="111" y1="85" x2="111" y2="95" stroke="#F5EDE0" strokeWidth="1" />
            </g>

            <g className="anim-tail" style={{ animationDuration: '0.5s' }}>
                <path d="M 30 35 Q 20 60 25 80" fill="none" stroke="#F5EDE0" strokeWidth="4" />
                <path d="M 20 75 Q 25 90 30 75 Z" fill="#E8DCD0" />
            </g>

            <rect x="25" y="25" width="105" height="55" rx="25" fill="#F5EDE0" />
            <path d="M 40 25 Q 50 40 70 30 Q 80 50 60 70 Q 30 65 25 45 Z" fill="#8B4513" />
            <path d="M 90 25 Q 110 35 125 50 Q 110 75 90 65 Q 85 45 90 25 Z" fill="#8B4513" />

            <path d="M 110 25 L 140 30 L 135 65 L 110 75 Z" fill="#F5EDE0" />
            <path d="M 115 30 Q 130 50 120 70 Z" fill="#8B4513" />

            <g className="anim-leg-rt" style={{ animationDuration: '0.8s' }}>
                <rect x="45" y="65" width="14" height="35" fill="#F5EDE0" />
                <rect x="45" y="90" width="14" height="10" fill="#1a1a1a" />
                <line x1="52" y1="90" x2="52" y2="100" stroke="#8B4513" strokeWidth="1.5" />
            </g>
            <g className="anim-leg-rt" style={{ animationDuration: '0.8s' }}>
                <rect x="115" y="65" width="14" height="35" fill="#F5EDE0" />
                <rect x="115" y="90" width="14" height="10" fill="#1a1a1a" />
                <line x1="122" y1="90" x2="122" y2="100" stroke="#8B4513" strokeWidth="1.5" />
            </g>

            <rect x="125" y="20" width="30" height="40" rx="12" fill="#F5EDE0" />
            <path d="M 125 20 L 145 20 L 145 35 L 125 35 Z" fill="#8B4513" />
            <ellipse cx="140" cy="55" rx="16" ry="12" fill="#F0C0B0" />
            <ellipse cx="134" cy="53" rx="3" ry="5" fill="#111" transform="rotate(-15 134 53)" />
            <ellipse cx="146" cy="53" rx="3" ry="5" fill="#111" transform="rotate(15 146 53)" />
            <circle cx="140" cy="35" r="4" fill="#5C3317" />
            <circle cx="141" cy="34" r="1.5" fill="#fff" />
            <path d="M 137 31 Q 140 28 143 31" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="125" cy="25" rx="10" ry="5" fill="#F5EDE0" transform="rotate(-15 125 25)" />
            <ellipse cx="125" cy="25" rx="6" ry="2.5" fill="#F0C0B0" transform="rotate(-15 125 25)" />
            <path d="M 135 20 Q 140 5 145 10" fill="none" stroke="#E8D5A0" strokeWidth="4" strokeLinecap="round" />
            <path d="M 148 22 Q 155 10 160 15" fill="none" stroke="#E8D5A0" strokeWidth="4" strokeLinecap="round" />
        </svg>
    </div>
);

const Goat = () => (
    <div className="relative z-10" style={{ width: 110, height: 100 }}>
        <svg width="110" height="100" viewBox="0 0 110 100" className="anim-bounce-gait drop-shadow-lg" style={{ animationDuration: '0.35s' }}>
            <g className="anim-leg-lt" style={{ animationDuration: '0.7s' }}>
                <rect x="30" y="55" width="7" height="30" fill="#EAEAEA" />
                <rect x="30" y="70" width="7" height="15" fill="#4A2511" />
                <rect x="30" y="85" width="7" height="8" fill="#111" />
            </g>
            <g className="anim-leg-lt" style={{ animationDuration: '0.7s' }}>
                <rect x="70" y="55" width="7" height="30" fill="#EAEAEA" />
                <rect x="70" y="70" width="7" height="15" fill="#4A2511" />
                <rect x="70" y="85" width="7" height="8" fill="#111" />
            </g>

            <path d="M 23 45 L 12 30 L 18 48 Z" fill="#D4A843" className="anim-tail" style={{ animationDuration: '0.3s' }} />

            <path d="M 25 55 C 25 35 45 35 70 35 C 80 35 85 50 80 65 C 65 75 35 70 25 55 Z" fill="#FFFFFF" />
            <path d="M 45 35 C 65 35 75 45 70 65 C 55 55 45 45 45 35 Z" fill="#A0420F" />
            <path d="M 68 40 L 82 15 L 94 25 L 82 50 Z" fill="#8B3A10" />

            <g className="anim-leg-rt" style={{ animationDuration: '0.7s' }}>
                <rect x="38" y="60" width="8" height="30" fill="#FFFFFF" />
                <rect x="38" y="75" width="8" height="15" fill="#6B3A10" />
                <rect x="38" y="90" width="8" height="8" fill="#111" />
                <line x1="42" y1="90" x2="42" y2="98" stroke="#FFFFFF" strokeWidth="0.5" />
            </g>
            <g className="anim-leg-rt" style={{ animationDuration: '0.7s' }}>
                <rect x="78" y="60" width="8" height="30" fill="#FFFFFF" />
                <rect x="78" y="75" width="8" height="15" fill="#6B3A10" />
                <rect x="78" y="90" width="8" height="8" fill="#111" />
                <line x1="82" y1="90" x2="82" y2="98" stroke="#FFFFFF" strokeWidth="0.5" />
            </g>

            <rect x="80" y="5" width="22" height="18" rx="6" fill="#8B3A10" transform="rotate(20 80 5)" />
            <path d="M 97 12 L 108 16 L 105 25 L 92 20 Z" fill="#C0A090" />
            <circle cx="104" cy="18" r="1.5" fill="#4B3A10" />
            <circle cx="88" cy="14" r="3" fill="#8B6914" />
            <line x1="86" y1="14" x2="90" y2="14" stroke="#111" strokeWidth="1.5" /> 
            
            <ellipse cx="80" cy="20" rx="14" ry="5" fill="#A0520F" transform="rotate(70 80 20)" className="anim-leg-lt" style={{ animationDuration: '0.5s' }} />
            
            <path d="M 85 8 Q 75 -10 90 -5" fill="none" stroke="#C4A843" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 90 9 Q 80 -8 95 -3" fill="none" stroke="#C4A843" strokeWidth="2.5" strokeLinecap="round" />
            
            <path d="M 98 25 L 102 38 L 106 25 Z" fill="#6B3A10" className="anim-leg-lt" style={{ animationDuration: '0.4s' }} />
        </svg>
    </div>
);

const Sheep = () => {
    const bumps = [];
    for (let i = 0; i < 40; i++) {
        const angle = (i / 40) * Math.PI * 2;
        const rx = 38;
        const ry = 28;
        const cx = 55 + Math.cos(angle) * rx;
        const cy = 40 + Math.sin(angle) * ry;
        let color = "#F5EDD6";
        if (cy < 30) color = "#C9A87A";
        else if (cy > 55) color = "#FAF0DC";
        
        bumps.push(<circle key={i} cx={cx} cy={cy} r="7" fill={color} stroke="#D4B896" strokeWidth="1.2" />);
    }

    return (
        <div className="relative z-10" style={{ width: 120, height: 85 }}>
            <svg width="120" height="85" viewBox="0 0 120 85" className="anim-bounce-gait drop-shadow-md" style={{ animationDuration: '0.3s' }}>
                <rect x="35" y="55" width="7" height="20" fill="#E8D5A3" className="anim-leg-lt" style={{ animationDuration: '0.6s' }} />
                <rect x="35" y="70" width="7" height="5" fill="#C4956A" className="anim-leg-lt" style={{ animationDuration: '0.6s' }} />
                <rect x="36" y="75" width="5" height="4" fill="#6B4423" className="anim-leg-lt" style={{ animationDuration: '0.6s' }} />

                <rect x="75" y="55" width="7" height="20" fill="#E8D5A3" className="anim-leg-lt" style={{ animationDuration: '0.6s' }} />
                <rect x="75" y="70" width="7" height="5" fill="#C4956A" className="anim-leg-lt" style={{ animationDuration: '0.6s' }} />
                <rect x="76" y="75" width="5" height="4" fill="#6B4423" className="anim-leg-lt" style={{ animationDuration: '0.6s' }} />

                {/* Extremely detailed fluffy tail */}
                <path d="M 17 40 C 5 35 2 48 8 52 C 4 60 15 65 20 58 C 28 62 30 50 24 45 C 28 38 22 35 17 40 Z" fill="#F5EDD6" stroke="#D4B896" strokeWidth="1.5" className="anim-tail" style={{ animationDuration: '0.4s' }} />
                
                {/* Fluffy Body */}
                <ellipse cx="55" cy="40" rx="38" ry="28" fill="#F5EDD6" />
                {bumps}
                <ellipse cx="55" cy="40" rx="32" ry="22" fill="#F5EDD6" />

                <rect x="45" y="55" width="8" height="22" fill="#FAF0DC" className="anim-leg-rt" style={{ animationDuration: '0.6s' }} />
                <rect x="45" y="70" width="8" height="7" fill="#C4956A" className="anim-leg-rt" style={{ animationDuration: '0.6s' }} />
                <rect x="46" y="77" width="6" height="4" fill="#6B4423" className="anim-leg-rt" style={{ animationDuration: '0.6s' }} />

                <rect x="85" y="55" width="8" height="22" fill="#FAF0DC" className="anim-leg-rt" style={{ animationDuration: '0.6s' }} />
                <rect x="85" y="70" width="8" height="7" fill="#C4956A" className="anim-leg-rt" style={{ animationDuration: '0.6s' }} />
                <rect x="86" y="77" width="6" height="4" fill="#6B4423" className="anim-leg-rt" style={{ animationDuration: '0.6s' }} />

                <ellipse cx="98" cy="30" rx="14" ry="16" fill="#FFFFFF" />
                <ellipse cx="106" cy="33" rx="10" ry="7" fill="#F4A8A8" transform="rotate(15 106 33)" />
                <circle cx="110" cy="32" r="1" fill="#4B3A10" />
                <circle cx="112" cy="36" r="1" fill="#4B3A10" />
                
                <ellipse cx="90" cy="28" rx="9" ry="4" fill="#FAFAFA" stroke="#D4B896" strokeWidth="0.5" transform="rotate(-15 90 28)" />
                <ellipse cx="90" cy="28" rx="6" ry="2" fill="#F0A0A0" transform="rotate(-15 90 28)" />
                
                <circle cx="101" cy="24" r="2.5" fill="#1a1a1a" />
                <circle cx="101.5" cy="23.5" r="1" fill="#fff" />
            </svg>
        </div>
    );
};

export default function AnimalParade() {
  const [sparkle, setSparkle] = useState<{ id: number; x: number } | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setSparkle({ id: Date.now(), x: window.innerWidth / 2 });
        setTimeout(() => setSparkle(null), 3000);
    }, 11000); // Sporadic celebration text

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="animal-parade" className="fixed bottom-0 left-0 w-full h-[150px] max-sm:h-[100px] pointer-events-none z-[100] overflow-hidden">
      
      {/* Celebration sparkles loosely synced with parade passing */}
      <AnimatePresence>
        {sparkle && (
           <motion.div 
             key={sparkle.id}
             initial={{ opacity: 0, y: 20, scale: 0.8 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, scale: 1.2 }}
             className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
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

      <div className="absolute bottom-0 left-0 w-full h-[25px] bg-[#1a3a1a]" />
      <div className="absolute bottom-[25px] left-0 w-full h-[8px] opacity-80" style={{
          backgroundImage: 'linear-gradient(45deg, #1a3a1a 25%, transparent 25%), linear-gradient(-45deg, #1a3a1a 25%, transparent 25%)',
          backgroundSize: '16px 16px',
          backgroundPosition: '0 -4px'
      }} />

      <div className="absolute bottom-[25px] left-0 w-full h-[125px] max-sm:scale-[0.55] max-sm:origin-bottom-left">
          
          <div className="absolute anim-cow-walk flex items-end">
              <div className="relative">
                  <Cow />
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-28 h-3 bg-black/40 rounded-full blur-[3px]" />
              </div>
              <svg width="40" height="40" className="mx-[-10px] z-10 self-center translate-y-[15px]">
                  <path d="M 0 35 L 40 25" fill="none" stroke="#8B6914" strokeWidth="1.5" />
              </svg>
              <div className="relative">
                  <PersonDewasa />
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-10 h-2 bg-black/50 rounded-full blur-[2px]" />
              </div>
          </div>

          <div className="absolute anim-goat-walk flex items-end">
              <div className="relative">
                  <Goat />
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-20 h-3 bg-black/40 rounded-full blur-[3px]" />
              </div>
              <svg width="30" height="30" className="mx-[-5px] z-10 self-center translate-y-[20px]">
                  <path d="M 0 25 L 30 15" fill="none" stroke="#8B6914" strokeWidth="1.5" />
              </svg>
              <div className="relative">
                  <PersonMuda />
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-8 h-2 bg-black/50 rounded-full blur-[2px]" />
              </div>
          </div>

          <div className="absolute anim-sheep-walk flex items-end">
              <div className="relative">
                  <Sheep />
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-20 h-3 bg-black/40 rounded-full blur-[3px]" />
              </div>
          </div>

      </div>
    </div>
  );
}
