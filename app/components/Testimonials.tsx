'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    image: '/avatar1.jpg',
    text: 'The laundry service was quick and efficient! My clothes came back spotless and smelling fresh.',
  },
  {
    name: 'Jade Smith',
    image: '/avatar2.jpg',
    text: 'I am so impressed with the quality of service. The pickup and delivery were right on time.',
  },
  {
    name: 'Emily Johnson',
    image: '/avatar3.jpg',
    text: 'Fantastic service! The convenience and quality are unmatched. Highly recommend!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-4 text-center">
        <motion.h2 
          className="text-3xl lg:text-3xl font-bold mb-10 text-teal-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-700">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;