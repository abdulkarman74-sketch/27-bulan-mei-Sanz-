import { motion } from 'motion/react';

export default function Lanterns() {
  return (
    <>
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-0 left-4 md:left-[5%] origin-top z-20 w-12 md:w-[60px]"
      >
        <svg viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
          <line x1="50" y1="0" x2="50" y2="70" stroke="#c9a84c" strokeWidth="2.5" />
          <circle cx="50" cy="74" r="5" fill="none" stroke="#c9a84c" strokeWidth="2.5" />
          <path d="M35 80 L65 80 L50 64 Z" fill="#ffd700" />
          <path d="M25 90 L75 90 L65 80 L35 80 Z" fill="#c9a84c" />
          <path d="M25 90 L15 160 C15 185, 85 185, 85 160 L75 90 Z" fill="rgba(201, 168, 76, 0.12)" stroke="#c9a84c" strokeWidth="3" />
          <line x1="32" y1="90" x2="25" y2="160" stroke="rgba(201, 168, 76, 0.4)" strokeWidth="1.5" />
          <line x1="68" y1="90" x2="75" y2="160" stroke="rgba(201, 168, 76, 0.4)" strokeWidth="1.5" />
          <path d="M43 150 C43 140 57 140 57 150 C57 155 43 155 43 150 Z" fill="#ffd700" filter="url(#glow-filter-left)" />
          <circle cx="50" cy="148" r="8" fill="#ffffff" filter="url(#glow-filter-left)" />
          <path d="M30 170 L70 170 L60 185 L40 185 Z" fill="#c9a84c" />
          <path d="M47 185 L53 185 L50 198 Z" fill="#ffd700" />
          <defs>
            <filter id="glow-filter-left" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: [3, -3, 3] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-0 right-4 md:right-[5%] origin-top z-20 w-12 md:w-[60px]"
      >
        <svg viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
          <line x1="50" y1="0" x2="50" y2="70" stroke="#c9a84c" strokeWidth="2.5" />
          <circle cx="50" cy="74" r="5" fill="none" stroke="#c9a84c" strokeWidth="2.5" />
          <path d="M35 80 L65 80 L50 64 Z" fill="#ffd700" />
          <path d="M25 90 L75 90 L65 80 L35 80 Z" fill="#c9a84c" />
          <path d="M25 90 L15 160 C15 185, 85 185, 85 160 L75 90 Z" fill="rgba(201, 168, 76, 0.12)" stroke="#c9a84c" strokeWidth="3" />
          <line x1="32" y1="90" x2="25" y2="160" stroke="rgba(201, 168, 76, 0.4)" strokeWidth="1.5" />
          <line x1="68" y1="90" x2="75" y2="160" stroke="rgba(201, 168, 76, 0.4)" strokeWidth="1.5" />
          <path d="M43 150 C43 140 57 140 57 150 C57 155 43 155 43 150 Z" fill="#ffd700" filter="url(#glow-filter-right)" />
          <circle cx="50" cy="148" r="8" fill="#ffffff" filter="url(#glow-filter-right)" />
          <path d="M30 170 L70 170 L60 185 L40 185 Z" fill="#c9a84c" />
          <path d="M47 185 L53 185 L50 198 Z" fill="#ffd700" />
          <defs>
            <filter id="glow-filter-right" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}
