'use client'


import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Freetrial = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-16 bg-blue-200" id="Pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="relative bg-teal-600 py-10 px-8 md:py-16 md:px-12"
        >
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <motion.div 
              className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
              }}
            >
              <h3 className="text-white mb-2 text-2xl">Try 2 months free trial</h3>
              <p className="text-teal-200 text-lg">Join to get top offers before anyone else.</p>
            </motion.div>
            <motion.form 
              className="w-full lg:w-1/2"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } },
              }}
            >
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <motion.input 
                  type="email" 
                  className="w-full appearance-none bg-teal-700 border border-teal-500 focus:border-teal-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-teal-400" 
                  placeholder="Your best email…" 
                  aria-label="Your best email…"
                  whileFocus={{ scale: 1.05 }}
                />
                <motion.button 
                  className="text-teal-600 bg-teal-100 hover:bg-white shadow px-3 py-2 md:py-0"
                  whileHover={{ scale: 1.05 }}
                >
                  Register
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Freetrial;
