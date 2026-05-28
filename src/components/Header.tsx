import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#venue' }, // Combines venue & description
    { name: 'Stay', href: '#accommodation' }, 
    { name: 'Itinerary', href: '#timeline' },
    { name: 'Registry', href: '#registry' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Smooth scroll adjustment for sticky header
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const headerTextClass = isScrolled ? 'text-primary' : 'text-white drop-shadow-sm';
  const headerMutedClass = isScrolled ? 'text-primary/60' : 'text-white/70';
  const navHoverBorderBg = isScrolled ? 'bg-primary' : 'bg-white';
  const btnClass = isScrolled 
    ? 'border-primary/25 text-primary hover:bg-primary hover:text-base hover:border-primary' 
    : 'border-white/25 text-white hover:bg-white hover:text-primary hover:border-white';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-base/90 backdrop-blur-md border-b border-border-color/30 py-5 shadow-[0_4px_30px_rgba(0,0,0,0.02)]' 
            : 'bg-transparent py-10 sm:py-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between relative">
          
          {/* Desktop Link Layout (Occupies left side with breathing room) */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative font-sans text-[11px] font-semibold tracking-[0.3em] uppercase transition-colors duration-500 py-2 group select-none cursor-pointer ${isScrolled ? 'text-primary/70 hover:text-primary' : 'text-white/85 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 w-0 h-[1px] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 ${navHoverBorderBg}`}></span>
              </a>
            ))}
          </nav>

          {/* Luxury CTA / RSVP Button (Occupies right side alignment) */}
          <div className="hidden md:block">
            <a
              href="#rsvp"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#rsvp');
              }}
              className={`inline-flex px-8 py-3 rounded-full border bg-transparent font-sans text-[11px] tracking-[0.3em] uppercase font-semibold transition-all duration-300 cursor-pointer active:scale-95 ${btnClass}`}
            >
              RSVP
            </a>
          </div>

          {/* Mobile Layout Minimal Triggers when branding is removed */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className={`font-serif text-[13px] sm:text-sm tracking-[0.15em] uppercase transition-colors duration-500 ${isMobileMenuOpen ? 'text-primary' : headerTextClass}`}>
              Isabella & Sebastian
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 focus:outline-none focus:ring-1 focus:ring-primary/10 rounded transition-all active:scale-90 cursor-pointer ${isMobileMenuOpen ? 'text-primary' : headerTextClass}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="transition-transform duration-300 rotate-90" strokeWidth={1.2} />
              ) : (
                <Menu size={20} className="transition-transform duration-300 hover:scale-105" strokeWidth={1.2} />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Luxury Full-Screen Slide Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-base z-40 md:hidden flex flex-col justify-between pt-36 pb-16 px-8 sm:px-12"
          >
            {/* Elegant Floral/Nordic Watermark Background element for Expensive feel */}
            <div className="absolute inset-x-0 bottom-0 top-1/4 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
              <span className="font-serif text-[18vw] font-black italic text-primary">I & S</span>
            </div>

            <nav className="flex flex-col gap-8 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="font-serif text-3xl sm:text-4xl text-primary font-light block py-2 select-none hover:pl-2 transition-all duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-8 items-center relative z-10"
            >
              <div className="w-12 h-[1px] bg-border-color/60"></div>
              
              <a
                href="#rsvp"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#rsvp');
                }}
                className="w-full text-center py-4 rounded-full border border-primary/20 bg-primary text-base font-sans text-xs tracking-[0.25em] uppercase font-light transition-all active:scale-[0.98] cursor-pointer hover:bg-primary/95 shadow-sm"
              >
                Submit RSVP
              </a>

              <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-primary/40 font-light text-center">
                Isabella & Sebastian  —  June 15, 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
