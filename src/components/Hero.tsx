import { motion } from 'motion/react';
import headerImage from '../assets/header.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-end justify-center pb-28 sm:pb-36 px-6 overflow-hidden">
      {/* Background Image with slight sepia/warm feel */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          src={headerImage} 
          alt="Isabella and Sebastian smiling warmly at each other" 
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.03]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/25 backdrop-blur-[0.5px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center text-dark-text flex flex-col items-center justify-center"
      >
        <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.45em] text-white/80 uppercase mb-4 sm:mb-6 select-none">
          We're getting married
        </span>
        <h1 className="text-3xl min-[375px]:text-4xl min-[480px]:text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-white font-serif font-light whitespace-nowrap mb-8 sm:mb-10">
          Isabella & Sebastian
        </h1>
        <div className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-[6px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] select-none">
          <span className="text-[9px] min-[375px]:text-[10px] sm:text-xs font-sans font-light tracking-[0.18em] min-[375px]:tracking-[0.25em] sm:tracking-[0.32em] text-white/95 uppercase leading-none">
            06.15.2026 — Villa d'Este, Lake Como, Italy
          </span>
        </div>
      </motion.div>
    </section>
  );
}
