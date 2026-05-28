import { motion } from 'motion/react';
import villaImage from '../assets/villa.jpg';

export default function Venue() {
  return (
    <section id="venue" className="py-16 sm:py-20 px-6 sm:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="subtext mb-4">Venue</p>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-primary tracking-tight mb-6">We'll see you at Villa d'Este</h2>
        <motion.a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="inline-block px-10 py-3 rounded-full border border-primary text-[11px] tracking-[0.25em] uppercase font-semibold text-primary bg-transparent hover:bg-primary hover:text-base hover:shadow-[0_10px_30px_rgba(44,51,41,0.04)] transition-all duration-500 cursor-pointer"
        >
          Directions
        </motion.a>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="aspect-[16/9] sm:aspect-[21/9] w-full mb-14 overflow-hidden"
      >
        <img 
          src={villaImage} 
          alt="Villa d'Este" 
          className="w-full h-full object-cover sepia-[0.05] contrast-[1.01]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto border-b border-primary/10 pb-20">
        <div className="flex flex-col gap-3">
          <h3 className="subtext !text-primary/50">The Date</h3>
          <p className="font-normal text-primary/85 text-sm sm:text-[15px] leading-relaxed">Saturday June 15, 2026.<br/>Arrive at 14:00.</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="subtext !text-primary/50">The Venue</h3>
          <p className="font-normal text-primary/85 text-sm sm:text-[15px] leading-relaxed">Villa d'Este, Lake Como.<br/>An iconic grand palace of classic Italian romance.</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="subtext !text-primary/50">The Vibe</h3>
          <p className="font-normal text-primary/85 text-sm sm:text-[15px] leading-relaxed">High luxury, black-tie optional,<br/>exquisite summer elegance.</p>
        </div>
      </div>
    </section>
  );
}
