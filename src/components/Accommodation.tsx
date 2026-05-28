import { motion } from 'motion/react';
import stayImage from '../assets/stay.jpg';

export default function Accommodation() {
  return (
    <section id="accommodation" className="py-16 sm:py-20 px-6 sm:px-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2"
      >
        <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden">
          <img 
            src={stayImage} 
            alt="Venue Porch" 
            className="w-full h-full object-cover sepia-[0.1] contrast-95"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 flex flex-col gap-8"
      >
        <div>
          <h3 className="text-2xl font-serif font-light text-primary tracking-wide mb-3">Accommodation</h3>
          <p className="font-normal text-primary/85 text-sm sm:text-[15px] leading-relaxed">
            All guests are welcome to stay at Villa d'Este or adjacent curated lakeside hotels. 
            Pre-booked rates have been arranged; simply reference our wedding reservation upon booking.
          </p>
        </div>
        
        <div className="w-8 h-[1px] bg-primary/10"></div>
        
        <div>
          <h3 className="text-2xl font-serif font-light text-primary tracking-wide mb-3">Kids & Plus Ones</h3>
          <p className="font-normal text-primary/85 text-sm sm:text-[15px] leading-relaxed">
            We love your little ones, but this is an adults-only celebration.
          </p>
        </div>

        <div className="w-8 h-[1px] bg-primary/10"></div>

        <div>
          <h3 className="text-2xl font-serif font-light text-primary tracking-wide mb-3">Toastmasters</h3>
          <p className="font-normal text-primary/85 text-sm sm:text-[15px] leading-relaxed">
            Speeches are warmly welcomed. Please contact our toastmasters at{' '}
            <a href="mailto:toastmasters@example.com" className="underline underline-offset-4 decoration-primary/20 hover:decoration-primary text-primary transition-all duration-300 font-medium">
              toastmasters@example.com
            </a>{' '}
            to arrange.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
