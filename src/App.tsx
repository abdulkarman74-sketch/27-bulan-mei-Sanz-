import { motion } from 'motion/react';
import ParticleBackground from './components/ParticleBackground';
import AudioPlayer from './components/AudioPlayer';
import Countdown from './components/Countdown';
import Typewriter from './components/Typewriter';
import Lanterns from './components/Lanterns';
import MinalAidzin from './components/MinalAidzin';
import AnimalParade from './components/AnimalParade';
import Silhouettes from './components/Silhouettes';
import Decorations, { Divider } from './components/Decorations';
import { Share2 } from 'lucide-react';

export default function App() {
  const shareMessage = encodeURIComponent("Selamat Hari Raya Idul Adha 1447 H. Mohon Maaf Lahir dan Batin. — Sanz Snixy");
  const waLink = `https://wa.me/?text=${shareMessage}`;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans selection:bg-gold-primary/30 pb-20">
      
      {/* Background Image & Overlays */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://c.termai.cc/i194/dAHdkl.jpg')" }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />

      {/* Intro Movie Fade */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-black pointer-events-none"
      />

      <ParticleBackground />
      <Decorations />
      <Lanterns />
      <Silhouettes />
      <AudioPlayer />
      <AnimalParade />

      <main className="relative z-30 w-full max-w-4xl mx-auto px-6 py-20 flex flex-col items-center">
        
        {/* Crescent Moon */}
        <motion.div 
          animate={{ y: [-6, 6], rotate: [-2, 2] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="relative w-32 h-32 flex justify-center items-center mt-8 mb-4"
        >
          <div className="w-20 h-20 rounded-full shadow-[20px_20px_0_0_#f0c040] rotate-[-35deg] translate-x-[-10px] translate-y-[-10px]" />
          <div className="absolute top-4 left-8 w-16 h-16 rounded-full bg-[rgba(255,215,0,0.15)] blur-[20px] pointer-events-none" />
        </motion.div>

        {/* Hero Section */}
        <div className="text-center w-full mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
            className="font-arabic text-3xl md:text-5xl text-gold-secondary mb-6 text-shadow-gold"
            dir="rtl"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
            className="font-serif font-bold text-4xl md:text-6xl lg:text-[4rem] leading-tight text-transparent bg-clip-text bg-gradient-to-br from-[#ffd700] via-[#f0c040] to-[#c9a84c] tracking-wide filter drop-shadow-[0_2px_8px_rgba(255,215,0,0.3)] mb-4 animate-glow"
          >
            Selamat Hari Raya<br />Idul Adha 1447 H
          </motion.h1>

          <Typewriter />
        </div>

        <Divider />

        {/* Greeting Card */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-3xl mb-12"
        >
          <div className="bg-white/[0.04] backdrop-blur-[20px] border border-gold-primary/20 rounded-3xl p-8 md:p-12 text-center shadow-[0_15px_35px_rgba(0,0,0,0.5),0_0_15px_rgba(201,168,76,0.08)] hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.6),0_0_25px_rgba(201,168,76,0.25)] hover:border-gold-primary/50 transition-all duration-500 ease-out flex flex-col items-center">
            <span className="text-4xl text-gold-secondary drop-shadow-[0_0_15px_rgba(255,215,0,0.4)] mb-4 inline-block hover:scale-110 transition-transform">☽</span>
            <h2 className="font-serif text-2xl md:text-3xl text-gold-secondary mb-6 tracking-wide">Ucapan Idul Adha</h2>
            <p className="text-sm md:text-lg text-gray-200 font-light leading-relaxed max-w-2xl mx-auto opacity-90 mb-8">
              Semoga di Hari Raya Idul Adha ini, Allah SWT menerima segala amal ibadah kita, mengampuni dosa-dosa kita, dan melimpahkan keberkahan kepada seluruh keluarga kita. Taqabbalallahu Minna Wa Minkum, Shiyamana Wa Shiyamakum. Aamiin Ya Rabbal Alamin.
            </p>
            <p className="font-serif italic text-xl text-gold-primary opacity-80 mb-8">
              Sanz Snixy
            </p>
            
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600/20 hover:bg-green-600/40 border border-green-500/30 text-green-100 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm tracking-widest uppercase font-medium">Share WhatsApp</span>
            </a>
          </div>
        </motion.section>

        <MinalAidzin />

        <Divider />

        {/* Countdown */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-3xl mb-24"
        >
          <Countdown />
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl text-center border-t border-gold-primary/20 pt-10 pb-4 relative z-50"
        >
          <div className="font-arabic text-2xl md:text-3xl text-gold-secondary mb-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.25)]" dir="rtl">
            اَللّٰهُ أَكْبَرُ، اَللّٰهُ أَكْبَرُ، لَا إِلٰهَ إِلَّا اللّٰهُ
          </div>
          <p className="text-xs text-gray-500 tracking-wide font-light">
            © 1447 H — Dibuat dengan ❤️ dan Doa
          </p>
        </motion.footer>
      </main>

    </div>
  );
}
