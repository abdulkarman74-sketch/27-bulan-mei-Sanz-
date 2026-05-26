import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAttempted = useRef(false);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !playAttempted.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch(() => {
          // Autoplay was prevented
          console.log("Autoplay prevented. User interaction required.");
        });
        playAttempted.current = true;
      }
    };

    document.addEventListener('click', startAudio, { once: true });
    document.addEventListener('touchstart', startAudio, { once: true });
    document.addEventListener('scroll', startAudio, { once: true });
    
    // Also try immediately
    setTimeout(startAudio, 1000);

    return () => {
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
      document.removeEventListener('scroll', startAudio);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted && audioRef.current.paused) {
        audioRef.current.play();
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://c.termai.cc/a179/p43Vi6K.mp3"
        loop
        autoPlay
        muted={isMuted}
      />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-gold-primary/30 flex items-center justify-center text-white shadow-[0_10px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(201,168,76,0.15)] hover:scale-110 hover:bg-white/10 hover:border-gold-primary/60 transition-all duration-300"
        aria-label="Toggle audio"
      >
        {isMuted ? <VolumeX className="w-5 h-5 text-gray-300" /> : <Volume2 className="w-5 h-5 text-gold-secondary" />}
      </button>
    </>
  );
}
