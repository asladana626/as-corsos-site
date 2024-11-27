"use client";

import { usePathname } from "next/navigation"

type NavLinksProps = {
  type: string;
}
export function NavLinks({type}: NavLinksProps) {
  const pathname = usePathname();
  
  const highlightClass = type === 'yellow' ? 'text-yellow-400' : 'bg-[#3f444a] text-white'

  return (
    <>
      <li className={(pathname === '/home' ? highlightClass : '')}>
        <a href='/home'>Home</a>
      </li>
      <li className={(pathname === '/home/about_us' ? highlightClass : '')}>
        <a href='/home/about_us'>About</a>
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
    </>
  )
}