import { motion } from 'motion/react';
import { Diamond } from 'lucide-react';

export default function Intro() {
  return (
    <section className="py-20 sm:py-28 px-6 flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl text-center flex flex-col items-center"
      >
        <div className="flex gap-2 mb-8 text-primary/60">
          <Diamond size={12} strokeWidth={1} fill="currentColor" />
          <Diamond size={12} strokeWidth={1} fill="currentColor" />
          <Diamond size={12} strokeWidth={1} fill="currentColor" />
        </div>
        
        <p className="text-xl sm:text-2xl leading-[1.6] font-normal font-serif italic text-primary max-w-xl">
          With joy in our hearts, we invite you to celebrate our wedding. 
          Nestled alongside the serene, shimmering shores of Lake Como, Villa d'Este will play host to our special day. 
          Here, you will find our itinerary, venue directions, accommodation arrangements, and RSVP options. 
          We cannot wait to share these lifetime moments with you.
        </p>
      </motion.div>
    </section>
  );
}
