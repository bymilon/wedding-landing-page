import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Loader2, CheckCircle2 } from 'lucide-react';
import { RSVPFormData } from '../types';
import rsvpImage from '../assets/rsvp.jpg';

export default function RSVP() {
  const [formData, setFormData] = useState<RSVPFormData>({
    firstName: '',
    lastName: '',
    email: '',
    attending: '',
    dietaryRestrictions: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedName, setLastSubmittedName] = useState('');
  const [lastSubmittedAttending, setLastSubmittedAttending] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-quality network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setLastSubmittedName(formData.firstName);
      setLastSubmittedAttending(formData.attending);
      setSubmitted(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      attending: '',
      dietaryRestrictions: '',
    });
  };

  return (
    <section id="rsvp" className="py-20 sm:py-24 px-6 sm:px-12 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
      
      {/* Form Container */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 max-w-lg"
      >
        <p className="subtext mb-4">RSVP</p>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-primary tracking-tight mb-6">Let us know you're coming!</h2>
        <p className="font-normal text-primary/85 leading-relaxed text-sm sm:text-base mb-8">
          Please RSVP by April 30th, 2026. Fill out the form below for each guest attending.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface p-10 text-center flex flex-col items-center justify-center border border-border-color min-h-[350px] relative overflow-hidden"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                className="mb-6 text-primary"
              >
                <CheckCircle2 size={48} strokeWidth={1} />
              </motion.div>
              <h3 className="text-3xl font-serif mb-3 text-primary">Grazie, {lastSubmittedName}!</h3>
              <p className="font-light text-primary/80 mb-8 max-w-sm">
                {lastSubmittedAttending === 'yes' 
                  ? "We joyfully accept your response and look forward to celebrating this beautiful day with you in Lake Como, Italy!" 
                  : "We will miss you, but thank you so much for letting us know."}
              </p>
              
              <button 
                type="button"
                onClick={handleResetForm}
                className="px-6 py-2.5 rounded-full border border-primary/30 text-[11px] tracking-widest uppercase font-light hover:bg-primary hover:text-base transition-colors duration-300"
              >
                RSVP for another guest
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="relative w-full group">
                  <input 
                    type="text" 
                    id="firstName"
                    required
                    disabled={isSubmitting}
                    placeholder=" "
                    className="input-border peer"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  <label htmlFor="firstName" className="absolute left-0 top-5 text-primary/50 text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base cursor-text pointer-events-none uppercase tracking-widest font-light">
                    First Name
                  </label>
                </div>
                <div className="relative w-full group">
                  <input 
                    type="text" 
                    id="lastName"
                    required
                    disabled={isSubmitting}
                    placeholder=" "
                    className="input-border peer"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                  <label htmlFor="lastName" className="absolute left-0 top-5 text-primary/50 text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base cursor-text pointer-events-none uppercase tracking-widest font-light">
                    Last Name
                  </label>
                </div>
              </div>

              <div className="relative w-full group">
                <input 
                  type="email" 
                  id="email"
                  required
                  disabled={isSubmitting}
                  placeholder=" "
                  className="input-border peer"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <label htmlFor="email" className="absolute left-0 top-5 text-primary/50 text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base cursor-text pointer-events-none uppercase tracking-widest font-light">
                  Email
                </label>
              </div>

              <div className="relative w-full flex items-center">
                <select 
                  id="attending"
                  required
                  disabled={isSubmitting}
                  className={`input-border appearance-none cursor-pointer pr-10 ${formData.attending === '' ? 'text-transparent' : 'text-primary'}`}
                  value={formData.attending}
                  onChange={(e) => setFormData({...formData, attending: e.target.value as 'yes' | 'no'})}
                >
                  <option value="" disabled className="text-primary"></option>
                  <option value="yes" className="text-primary">Joyfully accepts</option>
                  <option value="no" className="text-primary">Regretfully declines</option>
                </select>
                <ChevronDown size={18} strokeWidth={1.5} className="absolute right-0 bottom-3 text-primary/50 pointer-events-none z-20" />
                <label htmlFor="attending" className={`absolute left-0 top-5 text-primary/50 text-sm transition-all pointer-events-none uppercase tracking-widest font-light ${formData.attending !== '' ? '-translate-y-5 text-xs' : ''}`}>
                  Will you attend?
                </label>
              </div>

              <div className="relative w-full group mt-4">
                <textarea 
                  id="dietaryRestrictions"
                  placeholder=" "
                  rows={2}
                  disabled={isSubmitting}
                  className="input-border peer resize-none animate-none"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
                />
                <label htmlFor="dietaryRestrictions" className="absolute left-0 top-5 text-primary/50 text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base cursor-text pointer-events-none uppercase tracking-widest font-light">
                  Dietary Restrictions / Allergies
                </label>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="mt-6 bg-primary text-base py-4 rounded-full w-full uppercase tracking-widest text-sm hover:opacity-90 hover:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Sending...</span>
                  </>
                ) : (
                  "Send RSVP"
                )}
              </button>
            </form>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Image Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 aspect-[4/5] max-w-md mx-auto overflow-hidden"
      >
        <img 
          src={rsvpImage} 
          alt="Couple with dog" 
          className="w-full h-full object-cover sepia-[0.1] contrast-95"
          referrerPolicy="no-referrer"
        />
      </motion.div>

    </section>
  );
}
