"use client";

import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";



export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClassName = 'p-2 fixed w-full h-[100px] flex items-center justify-between text-white transition-[background-color] duration-150 ease-in ';
  navbarClassName += scrollPosition === 0 ? 'bg-[#333]' : 'bg-[#333333a0]';

  return (
    <>
      <div className={navbarClassName}>
        <div>
          <a href='/home' className='text-[35px] ml-10'>Alpha Sierra Corsos</a>
        </div>
        <div className='laptop:hidden cursor-pointer bg-white text-black text-[32px] rounded w-8 h-9 flex items-center justify-center'>
          <HiMenu />
        </div>
        <div className='hidden laptop:flex basis-3/5 mr-10 flex-wrap justify-center space-x-5 text-xl [&>*]:mb-2 pt-2 [&>*]:cursor-pointer'>
          <a>Home</a>
          <a>About</a>
          <a>Wait List</a>
          <a>Recommended Supplements</a>
          <div className='flex items-center justify-between'>
            <a className='mr-1'>For Sale</a>
            <IoMdArrowDropdown />
          </div>
          <a>History</a>
          <a>Studs</a>
          <a>Females</a>
          <a>FAQ</a>
          <div className='flex items-center justify-between'>
            <a className='mr-1'>Testimonials/Past Clients</a>
            <IoMdArrowDropdown />
          </div>
          <a>Media</a>
        </div>
      </div>
    </>
  )
}