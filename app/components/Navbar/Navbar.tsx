"use client";

import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { NavLinks } from "../NavLinks/NavLinks";

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

  let navbarClassName = 'p-2 fixed w-full min-w-[375px] h-[100px] flex items-center justify-between text-white transition-[background-color] duration-150 ease-in ';
  navbarClassName += scrollPosition === 0 ? 'bg-[#333]' : 'bg-[#333333a0]';

  let dropdownClassName = 'fixed top-[100px] w-full bg-white laptop:hidden ';
  dropdownClassName += menuIsOpen ? 'block' : 'hidden';

  return (
    <>
      {/* Navbar */}
      <div className={navbarClassName}>
        {/* Title */}
        <div>
          <a href='/home' className='text-[38px] sm:ml-10 font-heading'>Alpha Sierra Corsos</a>
        </div>

        {/* Menu button for mobile and tablet */}
        <div onClick={handleMenuToggle} className='laptop:hidden cursor-pointer bg-white text-black text-[32px] rounded w-8 h-9 sm:mr-4 flex items-center justify-center'>
          {menuIsOpen ? <FaXmark /> : <HiMenu />}
        </div>

        {/* Menu links for desktop */}
        <nav className='hidden laptop:block basis-1/2 font-body pt-2 mr-10 '>
          <ul className='flex flex-wrap justify-center space-x-5 [&>*]:mb-2 [&>*]:cursor-pointer'>
            <NavLinks type="yellow" />
          </ul>
         </nav>
      </div>

      {/* Menu Dropdown */}
      <nav className={dropdownClassName}>
        <ul className='text-[1rem] font-body font-medium [&>li>*]:block [&>li>*]:px-8 [&>li>*]:py-2' onClick={handleMenuToggle}>
          <NavLinks type='gray' />
        </ul>
      </nav>
    </>
  )
}

// 