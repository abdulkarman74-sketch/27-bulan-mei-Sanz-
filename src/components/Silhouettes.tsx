import { motion } from 'motion/react';

export default function Silhouettes() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 0.75, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="fixed bottom-32 left-4 md:left-[5%] z-0 pointer-events-none scale-[0.6] md:scale-90"
      >
         <div className="relative w-24 h-32 animate-[pulseGlow_4s_infinite_alternate] opacity-60">
            {/* Person Praying (Sitting) */}
            {/* Body */}
            <div className="absolute bottom-0 left-4 w-16 h-20 bg-gold-primary rounded-t-[40px] rounded-bl-[10px] rounded-br-[20px]" />
            {/* Head */}
            <div className="absolute top-2 left-6 w-10 h-10 bg-gold-primary rounded-full" />
            {/* Arms raised in prayer */}
            <div className="absolute top-12 left-12 w-10 h-4 bg-gold-primary rounded-full rotate-[-40deg]" />
            <div className="absolute top-10 left-16 w-3 h-8 bg-gold-primary rounded-full rotate-[-15deg]" />
         </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 0.65, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="fixed top-[40%] right-4 md:right-[5%] z-0 pointer-events-none scale-[0.6] md:scale-90"
      >
         <div className="relative w-20 h-40 animate-[pulseGlow_5s_infinite_alternate] opacity-50">
            {/* Person Standing in Robes */}
            {/* Body / Robe */}
            <div className="absolute bottom-0 left-2 w-16 h-28 bg-gold-secondary rounded-t-[30px] rounded-b-[5px]" />
            {/* Head */}
            <div className="absolute top-0 left-4 w-12 h-12 bg-gold-secondary rounded-full" />
            {/* Arm details */}
            <div className="absolute top-14 left-8 w-12 h-4 bg-gold-secondary rounded-full rotate-[15deg] opacity-80" />
         </div>
      </motion.div>
    </>
  );
}
