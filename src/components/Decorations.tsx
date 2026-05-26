import { motion } from 'motion/react';

export function Divider() {
  return (
    <div className="w-full flex items-center justify-center my-10 md:my-14 opacity-80 z-10 relative">
      <div className="h-[1px] w-24 md:w-32 bg-gradient-to-r from-transparent to-gold-primary" />
      <span className="mx-4 text-gold-secondary text-xl filter drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">✦</span>
      <div className="h-[1px] w-24 md:w-32 bg-gradient-to-l from-transparent to-gold-primary" />
    </div>
  );
}

export default function Decorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left Border Pattern */}
        <div className="absolute left-0 top-0 bottom-0 w-6 md:w-8 border-r border-gold-primary/20 opacity-50"
             style={{ 
               backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(201,168,76,0.15) 45%, rgba(201,168,76,0.15) 55%, transparent 55%)',
               backgroundSize: '16px 16px'
             }} 
        />
        
        {/* Right Border Pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-6 md:w-8 border-l border-gold-primary/20 opacity-50"
             style={{ 
               backgroundImage: 'linear-gradient(-45deg, transparent 45%, rgba(201,168,76,0.15) 45%, rgba(201,168,76,0.15) 55%, transparent 55%)',
               backgroundSize: '16px 16px'
             }} 
        />

        {/* Floating Leaves & Flowers */}
        <div className="absolute top-[20%] left-[12%] text-gold-secondary/40 text-2xl animate-[float_6s_infinite_alternate]">✾</div>
        <div className="absolute top-[60%] right-[10%] text-green-300/30 text-xl animate-[float_7s_infinite_alternate-reverse]">❀</div>
        <div className="absolute bottom-[30%] left-[8%] text-gold-primary/40 text-xl animate-[float_5s_infinite_alternate] rotate-45">✿</div>
        <div className="absolute top-[35%] right-[15%] text-green-500/20 text-lg animate-[float_6s_infinite_alternate]">🌿</div>
        
        {/* Crescents and Stars */}
        <div className="absolute top-10 left-10 text-gold-secondary/30 text-3xl animate-pulse">☾</div>
        <div className="absolute top-12 right-12 text-gold-secondary/30 text-2xl animate-[pulse_3s_infinite]">★</div>
        <div className="absolute bottom-40 right-20 text-gold-secondary/20 text-xl">✧</div>
    </div>
  );
}
