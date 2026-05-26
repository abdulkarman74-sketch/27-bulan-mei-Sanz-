import { motion } from 'motion/react';

export default function MinalAidzin() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, staggerChildren: 0.2 }}
      className="relative w-full max-w-4xl mx-auto my-12 md:my-20 p-8 md:p-16 rounded-[2.5rem] bg-[#0a0a0a]/70 backdrop-blur-xl border border-gold-primary/30 shadow-[0_0_40px_rgba(201,168,76,0.15)] text-center overflow-hidden"
    >
      {/* Subtle Islamic Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #c9a84c 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif italic font-bold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-glow to-gold-primary animate-shimmer bg-[length:200%_auto] filter drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]"
        >
          Minal Aidzin Wal Faizin
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans font-light text-lg md:text-2xl text-gray-200 tracking-[0.2em] uppercase"
        >
          Mohon Maaf Lahir dan Batin
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 py-4 w-full max-w-[200px]"
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent to-gold-primary/60" />
          <span className="text-gold-secondary text-2xl filter drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]">✨</span>
          <div className="w-full h-[1px] bg-gradient-to-l from-transparent to-gold-primary/60" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-serif italic text-2xl md:text-4xl text-gold-secondary font-medium tracking-wide">
            — Sanz Snixy —
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
