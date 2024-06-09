"use client"

import { link } from 'fs';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Aboutus' },
    { id: 3, text: 'Pricing' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='absolute top-0 left-0 w-full z-10
       flex justify-between items-center 
       h-16 max-w-[1240px] mx-auto px-6 text-white'>
      <h1 className='w-full text-2xl text-white font-mono font-semibold'>Cleanease</h1>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black font-mono'
          ><a href={`#${item.text}`}>
          {item.text}
        </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-white bg-[#48a5f7] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }>
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-white m-4'>Cleanease</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;