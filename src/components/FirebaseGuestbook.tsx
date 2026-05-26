import React, { useState, useEffect, useRef } from 'react';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, CheckCircle2, XCircle, Send, Trash2, Clock, Moon } from 'lucide-react';

interface FirebaseAutoConfig {
  apiKey: string;
  projectId: string;
  appId: string;
  messagingSenderId: string;
}

interface Ucapan {
  id: string;
  nama: string;
  ucapan: string;
  waktu: number;
  avatar_color: string;
}

const AVATAR_COLORS = ['#C9A84C','#1a5c3a','#8B6914','#2d5a2d','#A07830','#6B4E71'];
const QUICK_REPLIES = [
  "Taqabbalallahu Minna Wa Minkum 🌙",
  "Minal Aidzin Wal Faizin 🤲",
  "Semoga Allah menerima amal ibadah kita ✨",
  "Selamat Hari Raya Idul Adha 1447H 🐑",
  "Mohon Maaf Lahir dan Batin 🌸"
];

let firebaseApp: FirebaseApp | null = null;

function formatRelativeTime(timestamp: number) {
  const rtf = new Intl.RelativeTimeFormat('id', { numeric: 'auto' });
  const daysDifference = Math.floor((timestamp - Date.now()) / (1000 * 60 * 60 * 24));
  const hoursDifference = Math.floor((timestamp - Date.now()) / (1000 * 60 * 60));
  const minutesDifference = Math.floor((timestamp - Date.now()) / (1000 * 60));

  if (Math.abs(daysDifference) > 0) return rtf.format(daysDifference, 'day');
  if (Math.abs(hoursDifference) > 0) return rtf.format(hoursDifference, 'hour');
  if (Math.abs(minutesDifference) > 0) return rtf.format(minutesDifference, 'minute');
  return 'Baru saja';
}

export default function FirebaseGuestbook() {
  const [toast, setToast] = useState<{msg: string, type: 'success'|'error'|'info'} | null>(null);

  const [wishes, setWishes] = useState<Ucapan[]>([]);
  const [userName, setUserName] = useState('');
  const [wishText, setWishText] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [savedName, setSavedName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameErrorShake, setNameErrorShake] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  // Load config on mount
  useEffect(() => {
    try {
      const existingApps = getApps();
      if (existingApps.length === 0) {
        firebaseApp = initializeApp(firebaseConfig);
      } else {
        firebaseApp = existingApps[0];
      }
      const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);
      setupRealtimeListener(db);
    } catch (e) {
      console.error("Firebase initialization error:", e);
    }
    
    const submittedName = localStorage.getItem('idulAdhaMyName_v2');
    if (submittedName) {
        setHasSubmitted(true);
        setSavedName(submittedName);
    }
  }, []);

  const showToast = (msg: string, type: 'success'|'error'|'info') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const setupRealtimeListener = (db: any) => {
    const q = query(collection(db, 'ucapan'), orderBy('waktu', 'desc'), limit(50));
    onSnapshot(q, (snapshot: any) => {
      const parsedWishes: Ucapan[] = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data()
      }));
      
      setWishes(prev => {
          // checking if there is a new wish that didn't exist before to show toast
          if (prev.length > 0 && parsedWishes.length > 0 && prev[0].id !== parsedWishes[0].id && parsedWishes.length >= prev.length) {
              // Not if it's the user's own message
              if (parsedWishes[0].nama !== localStorage.getItem('idulAdhaMyName_v2')) {
                  showToast(`Ada ucapan baru dari ${parsedWishes[0].nama}! 🎉`, "info");
              }
          }
          return parsedWishes;
      });
    }, (error: any) => {
        console.error("Firebase Read Error:", error);
    });
  };

  const handleSendWish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !wishText.trim() || !firebaseApp) return;

    setIsSubmitting(true);
    try {
        const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);

        // We check for duplicates locally in `wishes` State to save on Firestore reads.
        // It's a guestbook, preventing duplicates doesn't have to be cryptographically secure.
        const exists = wishes.find(w => w.nama.toLowerCase() === userName.trim().toLowerCase());
        if (exists) {
            setNameErrorShake(true);
            setTimeout(() => setNameErrorShake(false), 500);
            showToast("Nama sudah digunakan 😊", "error");
            setIsSubmitting(false);
            return;
        }

        await addDoc(collection(db, 'ucapan'), {
            nama: userName.trim(),
            ucapan: wishText.trim(),
            waktu: Date.now(),
            avatar_color: AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)]
        });

        localStorage.setItem('idulAdhaMyName_v2', userName.trim());
        setHasSubmitted(true);
        setSavedName(userName.trim());
        showToast("Terkirim! ✓", "success");
        setUserName('');
        setWishText('');
    } catch (e: any) {
        showToast("❌ Gagal mengirim ucapan: " + e.message, "error");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 relative z-20">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`fixed top-8 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl backdrop-blur-md font-medium text-sm
               ${toast.type === 'success' ? 'bg-[#1a5c3a]/90 text-white border border-[#2d8a59]' : 
                 toast.type === 'error' ? 'bg-red-500/90 text-white border border-red-400' : 
                 'bg-white/10 text-white border border-white/20'}`}
          >
            {toast.type === 'success' && <CheckCircle2 size={18} />}
            {toast.type === 'error' && <XCircle size={18} />}
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold-glow mb-3 flex items-center justify-center gap-3">
             <Moon size={36} className="text-[#C9A84C]" /> Dinding Ucapan Idul Adha
          </h2>
          <p className="text-[#FAFAFA]/80 text-lg md:text-xl">Pesan dari seluruh penjuru untuk Sanz Snixy</p>
          <div className="text-[#C9A84C]/60 tracking-[0.3em] font-light mt-4">——✦——</div>
          
          <div className="absolute -top-6 right-0 max-sm:relative max-sm:top-0 max-sm:mt-6 bg-[#111]/60 px-4 py-1.5 rounded-full border border-[#1a5c3a] flex items-center gap-2 max-w-max mx-auto md:ml-auto">
              <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-[ping_1.5s_ease-in-out_infinite]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] absolute" />
              <span className="text-xs font-semibold text-[#34d399] tracking-wider uppercase">Live</span>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
             
             {/* Left Column: Form */}
             <div className="lg:col-span-5 lg:sticky top-8">
                <div className="bg-[#111]/60 backdrop-blur-xl border border-[#C9A84C]/20 rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    <h3 className="text-2xl font-serif text-[#C9A84C] mb-6 flex items-center gap-2">
                       <Send size={20} /> Kirim Pesan
                    </h3>

                    {hasSubmitted ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                            <div className="w-16 h-16 rounded-full bg-[#1a5c3a]/20 border border-[#2d8a59] text-[#34d399] flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 size={32} />
                            </div>
                            <h4 className="text-xl text-white mb-2">Terima Kasih!</h4>
                            <p className="text-white/60">Kamu sudah mengisi sebagai <strong className="text-[#C9A84C]">{savedName}</strong></p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSendWish} className="space-y-5 text-left">
                            <motion.div animate={nameErrorShake ? { x: [-10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.4 }}>
                                <label className="block">
                                    <span className="text-sm font-semibold text-[#FAFAFA]/80 mb-2 block">Nama Kamu</span>
                                    <input 
                                      type="text" 
                                      required 
                                      maxLength={30}
                                      value={userName} 
                                      onChange={e => setUserName(e.target.value)} 
                                      className="w-full text-base bg-white/5 border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors focus:bg-white/10" 
                                      placeholder="Contoh: Budi" 
                                    />
                                </label>
                            </motion.div>

                            <div>
                                <label className="block mb-2">
                                    <span className="text-sm font-semibold text-[#FAFAFA]/80 block flex justify-between">
                                        Pesan & Doa
                                        <span className={`text-xs ${wishText.length >= 150 ? 'text-red-400' : 'text-white/40'}`}>
                                           {wishText.length}/150
                                        </span>
                                    </span>
                                </label>
                                <textarea 
                                  required 
                                  maxLength={150}
                                  value={wishText} 
                                  onChange={e => setWishText(e.target.value)} 
                                  className="w-full h-[120px] text-base resize-none bg-white/5 border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors focus:bg-white/10" 
                                  placeholder="Tuliskan ucapan dan doamu di sini..." 
                                />

                                {/* Quick Replies */}
                                <div className="mt-3 flex flex-wrap gap-2">
                                   {QUICK_REPLIES.map((reply, i) => (
                                     <button 
                                       key={i} 
                                       type="button"
                                       onClick={() => setWishText(reply)}
                                       className="text-[11px] px-3 py-1.5 rounded-full bg-[#111] border border-[#333] text-white/70 hover:text-[#C9A84C] hover:border-[#C9A84C]/50 transition-colors whitespace-nowrap"
                                     >
                                        {reply}
                                     </button>
                                   ))}
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting || !userName.trim() || !wishText.trim()}
                                className="w-full min-h-[48px] mt-4 bg-gradient-to-r from-[#C9A84C] to-[#8B6914] text-[#111] font-bold text-lg rounded-xl shadow-[0_4px_15px_rgba(201,168,76,0.3)] hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Mengirim... ⏳' : 'Kirim Ucapan ✨'}
                            </button>
                        </form>
                    )}
                </div>
                
                {/* Reset Name Debugging tool */}
                {hasSubmitted && (
                     <button onClick={() => { localStorage.removeItem('idulAdhaMyName_v2'); setHasSubmitted(false); setUserName(''); }} className="mt-4 text-xs text-white/30 hover:text-white/80 uppercase tracking-widest text-center w-full block">Reset Form (Testing)</button>
                )}
             </div>

             {/* Right Column: Wall of Wishes */}
             <div className="lg:col-span-7">
                <div className="bg-[#111]/40 backdrop-blur-lg border border-white/5 rounded-3xl p-6 md:p-8 min-h-[500px]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                        <span className="text-white/60 font-semibold tracking-wider text-sm uppercase">
                           ✦ {wishes.length} Ucapan Idul Adha ✦
                        </span>
                        <div className="flex items-center gap-2 text-xs text-white/40">
                             <Clock size={14} /> Realtime Sync
                        </div>
                    </div>

                    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#C9A84C]/50 scrollbar-track-transparent">
                        <AnimatePresence initial={false}>
                            {wishes.length === 0 ? (
                                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="py-20 text-center md:col-span-2">
                                     <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                                         <Clock size={32} className="text-white/30" />
                                     </div>
                                     <p className="text-white/50">Belum ada ucapan. Jadilah yang pertama!</p>
                                </motion.div>
                            ) : (
                                wishes.map((wish) => (
                                    <motion.div 
                                        key={wish.id}
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className="bg-white/5 hover:bg-white/10 transition-colors border border-white/5 p-5 rounded-2xl flex gap-4 items-start"
                                    >
                                        <div 
                                          className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-xl font-serif text-white shadow-inner font-bold uppercase"
                                          style={{ backgroundColor: borderDarken(wish.avatar_color) }}
                                        >
                                            {wish.nama.charAt(0)}
                                        </div>
                                        <div className="flex-1 text-left">
                                            <div className="flex items-baseline justify-between mb-1 gap-2 flex-wrap">
                                                <h4 className="font-bold text-[#C9A84C] text-lg">{wish.nama}</h4>
                                                <span className="text-[11px] text-white/40 whitespace-nowrap">{formatRelativeTime(wish.waktu)}</span>
                                            </div>
                                            <p className="text-white/80 italic font-light leading-relaxed text-[15px]">&quot;{wish.ucapan}&quot;</p>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </AnimatePresence>
                        <div className="md:col-span-2" ref={bottomRef} />
                    </div>
                </div>
             </div>

         </div>
    </div>
  );
}

// utility to get a slightly darkened version of hex color for avatar background
function borderDarken(hex: string) {
    // It's already fine tuned dark colors in AVATAR_COLORS, so just return it.
    return hex;
}
