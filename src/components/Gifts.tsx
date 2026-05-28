import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Heart, Compass } from 'lucide-react';

export default function Gifts() {
  const [copiedType, setCopiedType] = useState<'swish' | 'bank' | null>(null);

  const copyToClipboard = (text: string, type: 'swish' | 'bank') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="registry" className="bg-dark-bg border-y border-white/5 py-24 sm:py-32 px-6 sm:px-12 relative overflow-hidden text-dark-text">
      {/* Background elegant watercolor watermark effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none flex items-center justify-center">
        <span className="font-serif text-[24vw] font-light italic text-dark-text">Registry</span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10"
      >
        <span className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-dark-text/40 mb-4">
          — REGISTRY —
        </span>
        
        <h2 className="text-3xl min-[375px]:text-4xl sm:text-5xl font-serif font-light tracking-tight text-dark-text mb-6 max-w-xl">
          Your Presence is Our Greatest Gift
        </h2>
        
        <p className="font-normal text-dark-text/80 text-sm sm:text-base leading-relaxed max-w-xl mb-16">
          We do not expect any physical gifts, as having you with us on our wedding day in Italy is more than we could ever dream of. However, for those who have kindly asked, we have prepared two ways to contribute to our future.
        </p>

        {/* Quiet Luxury Contribution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mb-12">
          {/* Card 1: Honeymoon Fund */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-primary/25 border border-white/5 rounded-[2px] p-8 text-left flex flex-col justify-between shadow-[0_12px_45px_rgba(0,0,0,0.1)] hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 relative group"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-dark-text/80 mb-6 group-hover:bg-white/10 transition-colors duration-500">
                <Compass size={18} strokeWidth={1.2} className="transition-transform duration-750 group-hover:rotate-45" />
              </div>
              <h3 className="text-xl font-serif text-dark-text mb-3">La Dolce Vita Honeymoon</h3>
              <p className="text-xs sm:text-sm font-normal text-dark-text/80 leading-relaxed mb-8">
                Contributions to this fund will support our post-wedding journey across the dramatic cliffs of the Amalfi Coast and historic villas of Tuscany.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-dark-text/40 uppercase mb-1">SWISH NUMBER</span>
                <span className="font-mono text-sm text-dark-text tracking-wide font-medium">123 456 78 90</span>
              </div>
              
              <button 
                onClick={() => copyToClipboard('123 456 78 90', 'swish')}
                className="p-2 sm:px-3 sm:py-2.5 rounded-full hover:bg-white/10 text-dark-text/60 hover:text-dark-text transition-all duration-300 flex items-center gap-2 cursor-pointer relative"
                title="Copy Swish Number"
              >
                <AnimatePresence mode="wait">
                  {copiedType === 'swish' ? (
                    <motion.div 
                      key="copied" 
                      initial={{ opacity: 0, scale: 0.8 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5"
                    >
                      <Check size={13} className="text-emerald-400" strokeWidth={2} />
                      <span className="text-[9px] font-sans font-bold tracking-wider uppercase text-emerald-400">COPIED</span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="copy" 
                      initial={{ opacity: 0, scale: 0.8 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5"
                    >
                      <Copy size={13} strokeWidth={1.5} />
                      <span className="text-[9px] font-sans font-bold tracking-wider uppercase">COPY</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Garden & Villa Fund */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-primary/25 border border-white/5 rounded-[2px] p-8 text-left flex flex-col justify-between shadow-[0_12px_45px_rgba(0,0,0,0.1)] hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 relative group"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-dark-text/80 mb-6 group-hover:bg-white/10 transition-colors duration-500">
                <Heart size={18} strokeWidth={1.2} className="transition-transform duration-750 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-serif text-dark-text mb-3">Our Future Home & Garden</h3>
              <p className="text-xs sm:text-sm font-normal text-dark-text/80 leading-relaxed mb-8">
                For our dreams of establishing our forever home, landscaping a classical garden, and nurturing our growing family library and art collection.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] font-sans font-bold tracking-[0.2em] text-dark-text/40 uppercase mb-1">BANK TRANSFERS</span>
                <span className="font-mono text-xs text-dark-text tracking-wide font-medium">1234 - 567890</span>
              </div>
              
              <button 
                onClick={() => copyToClipboard('1234 - 567890', 'bank')}
                className="p-2 sm:px-3 sm:py-2.5 rounded-full hover:bg-white/10 text-dark-text/60 hover:text-dark-text transition-all duration-300 flex items-center gap-2 cursor-pointer relative"
                title="Copy Bank Account"
              >
                <AnimatePresence mode="wait">
                  {copiedType === 'bank' ? (
                    <motion.div 
                      key="copied" 
                      initial={{ opacity: 0, scale: 0.8 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5"
                    >
                      <Check size={13} className="text-emerald-400" strokeWidth={2} />
                      <span className="text-[9px] font-sans font-bold tracking-wider uppercase text-emerald-400">COPIED</span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="copy" 
                      initial={{ opacity: 0, scale: 0.8 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5"
                    >
                      <Copy size={13} strokeWidth={1.5} />
                      <span className="text-[9px] font-sans font-bold tracking-wider uppercase">COPY</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </div>

        <p className="text-[10px] font-sans font-light tracking-[0.2em] text-dark-text/40 uppercase">
          Grazie Mille per la vostra generosità
        </p>
      </motion.div>
    </section>
  );
}

