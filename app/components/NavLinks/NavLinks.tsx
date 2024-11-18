"use client";

import { usePathname } from "next/navigation"

export function NavLinks() {
  const pathname = usePathname();
  
  return (
    <>
      <li className={(pathname === '/home' ? 'text-yellow-400' : '')}>
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
    </>
  )
}