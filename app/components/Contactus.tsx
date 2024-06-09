'use client'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';

const ContactUs = () => {
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative py-20 bg-teal-50">
      <div className="absolute inset-0 z-0">
        <Image
          src="/map.jpg"
          alt="Contact Us Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>
      <div className="relative z-10 max-w-xl mx-auto px-6 sm:px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="bg-white p-10 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl lg:text-3xl font-bold mb-6 text-teal-500 text-center">
            Contact Us
          </h2>
          <form className="space-y-5">
            
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                className="bg-teal-500 text-white py-2 px-6 rounded-md font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;

