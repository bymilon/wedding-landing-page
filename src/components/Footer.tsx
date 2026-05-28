import { motion } from 'motion/react';
import { Diamond } from 'lucide-react';
import footer1 from '../assets/footer-1.jpg';
import footer2 from '../assets/footer-2.jpg';

export default function Footer() {
  const scrollToRSVP = () => {
    const el = document.getElementById('rsvp');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Our Story', href: '#venue' },
    { name: 'Stay', href: '#accommodation' }, 
    { name: 'Itinerary', href: '#timeline' },
    { name: 'Registry', href: '#registry' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="pt-32 pb-16 px-6 sm:px-12 bg-base relative overflow-hidden flex flex-col items-center border-t border-primary/5">
      
      {/* Editorial Image Grid - Asymmetric Overlaps with luxury styling */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-4xl mx-auto mb-32 justify-center items-stretch relative">
        
        {/* Figure 1: Dog running / Playful */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 max-w-[320px] mx-auto md:mx-0 bg-base border border-border-color/30 p-3 sm:p-4 pb-10 sm:pb-12 shadow-[0_15px_45px_rgba(0,0,0,0.02)] flex flex-col"
        >
          <div className="aspect-[4/5] overflow-hidden bg-primary/5 relative">
            <img 
              src={footer1} 
              alt="Loved ones" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03] sepia-[0.12] contrast-95"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-4 flex justify-between items-center text-primary/40 font-mono text-[9px] tracking-[0.2em] uppercase px-1">
            <span>PL. 01 // DETAILS OF LOVE</span>
            <span>COMO</span>
          </div>
        </motion.div>
        
        {/* Figure 2: Joyful Movement */}
        <motion.div 
          initial={{ opacity: 0, y: 70, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 max-w-[320px] mx-auto md:mx-0 bg-base border border-border-color/30 p-3 sm:p-4 pb-10 sm:pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] md:mt-16 flex flex-col"
        >
          <div className="aspect-[4/5] overflow-hidden bg-primary/5 relative">
            <img 
              src={footer2} 
              alt="Celebration dance" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03] sepia-[0.12] contrast-95"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-4 flex justify-between items-center text-primary/40 font-mono text-[9px] tracking-[0.2em] uppercase px-1">
            <span>PL. 02 // DANCING UNDER THE STARS</span>
            <span>JUNE 15</span>
          </div>
        </motion.div>
      </div>

      {/* Outro Content */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
        <div className="flex gap-2.5 mb-8 text-primary/30">
          <Diamond size={10} strokeWidth={1} fill="currentColor" />
          <Diamond size={10} strokeWidth={1} fill="currentColor" />
          <Diamond size={10} strokeWidth={1} fill="currentColor" />
        </div>
        
        <h2 className="text-4xl min-[375px]:text-5xl sm:text-7xl font-serif font-light tracking-tight text-primary/95 mb-10 max-w-2xl leading-[1.1]">
          We can’t wait to<br />celebrate <span className="italic font-normal">la dolce vita</span> with you.
        </h2>

        <motion.button 
          onClick={scrollToRSVP}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="px-14 py-4 rounded-full border border-primary text-[11px] tracking-[0.35em] uppercase font-semibold text-primary bg-transparent hover:bg-primary hover:text-base hover:shadow-[0_10px_30px_rgba(44,51,41,0.06)] transition-all duration-500 cursor-pointer mb-24 relative overflow-hidden"
        >
          RSVP TODAY
        </motion.button>
      </div>

      {/* Luxury Invitation Details Bar */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-b border-primary/10 mb-16 text-center md:text-left text-primary/70">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-primary/40 uppercase">LA LOCATION</span>
          <span className="font-serif text-[15px] font-medium text-primary/90">Villa d'Este, Lake Como, Italy</span>
        </div>
        <div className="flex flex-col items-center md:items-center gap-1 text-center">
          <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-primary/40 uppercase">IL GIORNO</span>
          <span className="font-serif text-[15px] font-medium text-primary/90">Monday, June 15th, 2026</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
          <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-primary/40 uppercase">MAIN DIRECTORY</span>
          <div className="flex gap-4 text-[10px] font-sans tracking-widest text-primary/60 uppercase font-medium mt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {link.name.split(' ')[0]} {/* shortened versions */}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="w-full text-center flex flex-col sm:flex-row items-center justify-between max-w-4xl text-primary/40 text-[10px] font-sans tracking-[0.2em] uppercase gap-4">
        <span>© 2026 ISABELLA & SEBASTIAN</span>
        <span>PROUDLY MADE SECURE FOR GUESTS</span>
      </div>

    </footer>
  );
}
