"use client";

type BigLinkProps = {
  title: string;
  subtitle: string;
  path: string;
}
export function BigLink({title, subtitle, path}: BigLinkProps) {
  return (
    <a href={path} className='flex flex-col w-full items-center py-[20px] transition-colors duration-300 ease bg-white text-gray-700 hover:bg-[#5e5e5e] hover:text-white'>
      <span className='font-heading text-[36px] font-semibold text-center'>{title}</span>
      <span className='font-body text-[20px] font-medium text-center'>{subtitle}</span>
    </a>
  )
}