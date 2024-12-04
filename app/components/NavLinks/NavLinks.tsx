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
        <Link href='/home/about_us'>About Us</Link>
      </li>
      <li>
        <Link href='/home/about_the_breed'>About the Breed</Link>
      </li>
      <li>
        <Link href='/home'>Contact Us</Link>
      </li>
      <li>
        <Link href='/home'>Wait List</Link>
      </li>
      <li>
        <Link href='/home'>Available</Link>
      </li>
      <li>
        <Link href='/home'>Testimonials</Link>
      </li>
      <li>
        <Link href='/home'>FAQ</Link>
      </li>
    </>
  )
}