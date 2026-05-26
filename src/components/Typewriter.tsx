import { useState, useEffect } from 'react';

const PHRASES = [
  "Taqabbalallahu Minna Wa Minkum...",
  "Semoga amal ibadah kita diterima Allah SWT",
  "Selamat merayakan Hari Raya Idul Adha",
  "Dengan penuh keikhlasan dan keberkahan"
];

export default function Typewriter() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="text-gray-200 text-sm md:text-lg font-light text-center h-[3.2em] max-w-[650px] mx-auto flex items-center justify-center">
      <span className="whitespace-pre-wrap break-words">
        {text}
        <span className="border-r-2 border-gold-secondary animate-pulse ml-1">&nbsp;</span>
      </span>
    </div>
  );
}
