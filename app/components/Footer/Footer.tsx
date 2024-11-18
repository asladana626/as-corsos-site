"use client";

import { NavLinks } from "../NavLinks/NavLinks";

export function Footer() {
  
  return (
    <div className='font-body bg-[#333] text-gray-400 py-12'>
      <div className='tablet:flex tablet:justify-between max-w-[1000px] mx-auto'>
        <h1 className='font-heading text-center text-[50px] mb-[100px] text-white px-[50px] whitespace-nowrap leading-[42px]'>
          Alpha Sierra
          <br />
          <span className='text-[40px]'>Corsos</span>
        </h1>
        <div className='pl-8 space-y-4 mb-4'>
          <p>
            Alpha Sierra Corsos
            <br />
            City, State
          </p>
          <p>
            Email: address@email.com
          </p>
          <p>
            Phone:
            <br />
            <span className='pl-2'>
              (###) ###-#### (name)
            </span>
          </p>
        </div>
        
        <nav className='px-8'>
          <ul className='space-y-1'>
            <NavLinks />
          </ul>
        </nav>
      </div>
    </div>
  )
}