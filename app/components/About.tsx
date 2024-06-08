'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TbIroningSteam } from "react-icons/tb";
import { TbWash } from "react-icons/tb";
import { MdDryCleaning } from "react-icons/md";

const About = () => {
  return (
    <section className='pt-20 bg-blue-100'>
      <div className="max-w-6xl mx-auto px-6 sm:px-4 relative my-4">
        <motion.div 
          className="flex flex-col md:flex-row w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-teal-500 font-semibold my-1 md:hidden p-2">About Us</h2>
          <motion.div 
            className="p-2 w-full md:w-1/3"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/aboutusimg.jpg"
              className="rounded-md min-w-[150px] opacity-90"
              alt="aboutme"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div 
            className="text-gray-700 w-full md:w-2/3 font-sans px-2 md:ml-4 md:mt-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-teal-500 font-semibold my-1 hidden md:block">About Us</h2>
            <p className="mt-2 text-slate-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur alias incidunt repellat! 
              Corrupti saepe ipsum dolore sed fugiat ea laudantium, non aut possimus nisi eius harum ullam 
              voluptas esse doloremque!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis alias earum necessitatibus aut, fugiat cupiditate quisquam adipisci 
              voluptate commodi excepturi dolor porro, sunt, facere ex sed perferendis at. Sed?
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="px-6 max-w-6xl mx-auto py-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className='text-teal-500 font-semibold'>What we do</h3>
          <h2 className='font-semibold text-3xl mt-2'>Make it easy with us</h2>
        </motion.div>
      </div>

      <div className="w-full bg-blue-700 py-6">
        <motion.div 
          className="flex justify-between items-center mx-auto px-6 max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        > 
         <div className='flex items-center space-x-2'> <div><TbWash color='white'/></div>
         <h2 className='text-blue-100 font-semibold mr-4'>Washing</h2></div>
          <p className="text-blue-100 text-sm">consequatur aspernatur llam cupiditate mollitia dolorum!</p>
        </motion.div>
      </div>
      <div className="w-full bg-blue-800 py-6">
        <motion.div 
          className="flex justify-between items-center mx-auto px-6 max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className='flex items-center space-x-2'> <div><TbIroningSteam color='white'/></div>
          <h2 className='text-blue-100 font-semibold mr-4'>Ironing</h2></div>
          
          <p className="text-blue-100 text-sm">consequatur aspernatur llam cupiditate mollitia dolorum!</p>
        </motion.div>
      </div>
      <div className="w-full bg-blue-900 py-6">
        <motion.div 
          className="flex justify-between items-center mx-auto px-6 max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className='flex items-center space-x-2'> <div><MdDryCleaning color='white'/></div>
          <h2 className='text-blue-100 font-semibold mr-4'>Dry cleaning</h2></div>
          <p className="text-blue-100 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing eliljf.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
