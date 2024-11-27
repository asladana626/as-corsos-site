"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"
import { useCallback } from "react";

type NavLinksProps = {
  type: string;
}
export function NavLinks({type}: NavLinksProps) {
  const pathname = usePathname();
  
  const highlightClass = type === 'yellow' ? 'text-yellow-400' : 'bg-[#3f444a] text-white';

  return (
    <>
      <li className={(pathname === '/home' ? highlightClass : '')}>
        <Link href='/home'>Home</Link>
      </li>
      <li className={(pathname === '/home/about_us' ? highlightClass : '')}>
        <Link href='/home/about_us'>About</Link>
      </li>
      <li>
        <Link href='/home'>Wait List</Link>
      </li>
      <li>
        <Link href='/home'>Recommended Supplements</Link>
      </li>
      <li>
        <div className='flex items-center'>
          <Link href='/home' className='mr-1'>For Sale</Link>
          <div className='text-[1.25rem]'>
            {/* <IoMdArrowDropdown /> */}
          </div>
        </div>
      </li>
      <li>
        <Link href='/home'>History</Link>
      </li>
      <li>
        <Link href='/home'>Studs</Link>
      </li>
      <li>
        <Link href='/home'>Females</Link>
      </li>
      <li>
        <Link href='/home'>FAQ</Link>
      </li>
      <li>
        <div className='flex items-center'>
          <Link href='/home' className='mr-1'>Testimonials/Past Clients</Link>
          <div className='text-[1.25rem]'>
            {/* <IoMdArrowDropdown /> */}
          </div>
        </div>
      </li>
      <li>
        <Link href='/home'>Media</Link>
      </li>
    </>
  )
}