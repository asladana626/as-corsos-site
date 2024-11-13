"use client";

import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleMenuToggle() {
    setMenuIsOpen(!menuIsOpen);
  }

  let navbarClassName = 'p-2 fixed w-full h-[100px] flex items-center justify-between text-white transition-[background-color] duration-150 ease-in ';
  navbarClassName += scrollPosition === 0 ? 'bg-[#333]' : 'bg-[#333333a0]';

  let dropdownClassName = 'fixed top-[100px] w-full bg-white laptop:hidden ';
  dropdownClassName += menuIsOpen ? 'block' : 'hidden';

  return (
    <>
      {/* Navbar */}
      <div className={navbarClassName}>
        {/* Title */}
        <div>
          <a href='/home' className='text-[38px] ml-10 font-heading'>Alpha Sierra Corsos</a>
        </div>

        {/* Menu button for mobile and tablet */}
        <div onClick={handleMenuToggle} className='laptop:hidden cursor-pointer bg-white text-black text-[32px] rounded w-8 h-9 mr-4 flex items-center justify-center'>
          {menuIsOpen ? <FaXmark /> : <HiMenu />}
        </div>

        {/* Menu links for desktop */}
        <div className='hidden laptop:flex basis-3/5 mr-10 flex-wrap justify-center space-x-5 font-body [&>*]:mb-2 pt-2 [&>*]:cursor-pointer'>
          <a href='/home' className={(pathname === '/home' ? 'text-yellow-500' : '')}>Home</a>
          <a>About</a>
          <a>Wait List</a>
          <a>Recommended Supplements</a>
          <div className='flex items-center justify-between'>
            <a className='mr-1'>For Sale</a>
            {/* <IoMdArrowDropdown /> */}
          </div>
          <a>History</a>
          <a>Studs</a>
          <a>Females</a>
          <a>FAQ</a>
          <div className='flex items-center justify-between'>
            <a className='mr-1'>Testimonials/Past Clients</a>
            {/* <IoMdArrowDropdown /> */}
          </div>
          <a>Media</a>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div className={dropdownClassName}>
        <ul className='text-[16px] font-body font-medium [&>*]:px-8 [&>*]:py-[8px]'>
          <li className={(pathname === '/home' ? 'bg-[#3f444a] text-white' : '')}>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Wait List</a>
          </li>
          <li>
            <a>Recommended Supplements</a>
          </li>
          <li>
            <div className='flex items-center'>
              <a className='mr-1'>For Sale</a>
              <div className='text-[20px]'>
                {/* <IoMdArrowDropdown /> */}
              </div>
            </div>
          </li>
          <li>
            <a>History</a>
          </li>
          <li>
            <a>Studs</a>
          </li>
          <li>
            <a>Females</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <div className='flex items-center'>
              <a className='mr-1'>Testimonials/Past Clients</a>
              <div className='text-[20px]'>
                {/* <IoMdArrowDropdown /> */}
              </div>
            </div>
          </li>
          <li>
            <a>Media</a>
          </li>
        </ul>
      </div>
    </>
  )
}