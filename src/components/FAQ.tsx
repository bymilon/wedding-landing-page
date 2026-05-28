import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "What is the dress code?",
    answer: "Semi-formal summer attire. We suggest summer suits and flowy dresses. The ceremony will be on grass, so please choose your footwear accordingly."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, there is ample free parking at the manor grounds for all guests."
  },
  {
    question: "Will the ceremony be indoors or outdoors?",
    answer: "The ceremony is planned for the outdoor garden, weather permitting. If it rains, we will move inside to the dining hall."
  },
  {
    question: "Can I bring a date?",
    answer: "Due to capacity limits, we can only accommodate guests specifically named on the invitation."
  },
  {
    question: "Who can I contact on the day?",
    answer: "Please reach out to our wedding coordinator or toastmasters for any urgent needs. Their contact details will be provided closer to the date."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12 flex flex-col items-center">
        <span className="text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-primary/50 mb-3">
          — F.A.Q. —
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-primary text-center">
          You Also Might Be Wondering...
        </h2>
      </div>
      
      <div className="flex flex-col border-t border-primary/10">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-primary/10 overflow-hidden">
              <button 
                onClick={() => toggleOpen(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-btn-${index}`}
                className="w-full py-6 text-left flex justify-between items-center group cursor-pointer focus:outline-none focus-visible:text-primary transition-all duration-300"
              >
                <span className="font-serif text-[18px] sm:text-[21px] font-normal text-primary/90 group-hover:text-primary group-focus-visible:text-primary transition-colors">
                  {item.question}
                </span>
                <span className="text-xl font-light text-primary/60 group-hover:text-primary ml-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'}}>
                  +
                </span>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="pb-6 font-normal text-primary/85 leading-relaxed max-w-2xl text-[14px] sm:text-[15px]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  );
}
