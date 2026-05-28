import { motion } from 'motion/react';
import { TimelineEvent } from '../types';
import itinerary1 from '../assets/itinerary-1.jpg';
import itinerary2 from '../assets/itinerary-2.jpg';
import itinerary3 from '../assets/itinerary-3.jpg';
import itinerary4 from '../assets/itinerary-4.jpg';

const events: TimelineEvent[] = [
  {
    time: "14:00",
    title: "The Ceremony",
    description: "We will say our vows in the historic mosaic garden of Villa d'Este. Please arrive and take your seats by 13:45.",
    imageUrl: itinerary1
  },
  {
    time: "15:30",
    title: "Aperitivo & Music",
    description: "Raise a toast with classic Italian aperitivo, delicate canapés, and live music on the lakefront terrace.",
    imageUrl: itinerary2
  },
  {
    time: "18:00",
    title: "The Wedding Feast",
    description: "A candlelit dinner in the imperial grand hall featuring a bespoke four-course menu, fine wine pairings, and speeches.",
    imageUrl: itinerary3
  },
  {
    time: "22:00",
    title: "Dancing & Fireworks",
    description: "Under the stars, we open the bar and transition to the dancefloor as celebrations continue long into the night.",
    imageUrl: itinerary4
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 sm:py-24 px-6 sm:px-12 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto flex flex-col items-center">
        <span className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-primary/40 mb-3">
          — ITINERARY —
        </span>
        <h2 className="text-3xl min-[375px]:text-4xl sm:text-5xl font-serif font-light tracking-tight text-primary mb-4">
          The Celebration Schedule
        </h2>
        <p className="font-normal text-primary/80 text-sm sm:text-base leading-relaxed max-w-sm">
          A beautifully curated sequence of events on our wedding day. All chapters of our story will take place at Villa d'Este.
        </p>
      </div>

      <div className="flex flex-col border-b border-primary/10">
        {events.map((event, index) => {
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-primary/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center group"
            >
              {/* Column 1: Time */}
              <div className="md:col-span-2 flex flex-row md:flex-col items-baseline md:items-start gap-2">
                <span className="text-4xl sm:text-5xl font-serif font-extralight tracking-tight text-primary/40 group-hover:text-primary transition-colors duration-500 leading-none">
                  {event.time}
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-[0.3em] text-primary/30 uppercase mt-1">
                  {index < 2 ? "AFTERNOON" : "EVENING"}
                </span>
              </div>

              {/* Column 2: Event Details */}
              <div className="md:col-span-6 flex flex-col items-start text-left">
                <h3 className="text-xl sm:text-2xl font-serif font-light tracking-tight text-primary mb-2 group-hover:translate-x-1 transition-all duration-500">
                  {event.title}
                </h3>
                <p className="font-normal text-primary/80 text-sm sm:text-[14px] leading-relaxed max-w-md">
                  {event.description}
                </p>
              </div>

              {/* Column 3: Exquisite Horizontal-Wide Frameless Image */}
              <div className="md:col-span-4 w-full">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[1px] bg-primary/5 shadow-[0_4px_24px_rgba(0,0,0,0.01)] relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 mix-blend-color transition-colors duration-500 pointer-events-none z-10" />
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04] grayscale-[15%] group-hover:grayscale-0 sepia-[0.05] contrast-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
