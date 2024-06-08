'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';


const Hero = () => {
  return (
    <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url(/heroimg.jpg)' }}>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-75"></div>
    <div className="relative container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-teal-200">Laundry Made Easy</h1>
        <p className="text-md lg:text-xl mb-8 text-white">
          Experience effortless laundry solutions at your fingertips. Schedule, track, and enjoy fresh, clean clothes with ease.
        </p>
        <motion.button 
          className="bg-white text-blue-500 py-3 px-6 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </motion.div>
      <motion.div 
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rounded-lg shadow-lg">
          <img src="/heroimg.jpg" alt="Laundry Hero Image" className="hidden" />
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default Hero;