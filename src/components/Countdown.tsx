import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const TARGET_DATE = new Date('2025-06-06T00:00:00').getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsPassed(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isPassed) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-[#1a3a2a]/20 to-[#0d2b1a]/20 backdrop-blur-xl border border-gold-primary/30 text-center shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(201,168,76,0.15)] animate-pulse"
      >
        <h2 className="font-serif text-2xl md:text-3xl text-gold-secondary font-semibold tracking-wide" style={{ textShadow: '0 0 15px rgba(255, 215, 0, 0.45)' }}>
          🌙 Selamat Hari Raya Idul Adha 1447 H 🌙
        </h2>
      </motion.div>
    );
  }

  const timeBlocks = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 w-full max-w-2xl mx-auto">
      {timeBlocks.map((block, i) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center justify-center p-3 md:p-6 rounded-xl bg-[#1a3a2a]/10 backdrop-blur-md border border-gold-primary/20 shadow-lg hover:scale-105 hover:shadow-[0_14px_30px_rgba(0,0,0,0.5),0_0_18px_rgba(255,215,0,0.18)] transition-all duration-300"
        >
          <span className="font-serif text-2xl md:text-5xl font-bold text-gold-secondary leading-none mb-2" style={{ textShadow: '0 0 10px rgba(255,215,0,0.3)' }}>
            {block.value.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider">
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
