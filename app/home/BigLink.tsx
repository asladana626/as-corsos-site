"use client";

type BigLinkProps = {
  title: string;
  subtitle: string;
  path: string;
}
export function BigLink({title, subtitle, path}: BigLinkProps) {
  return (
    <a href={path} className='flex flex-col w-min items-center py-[20px]'>
      <span className='font-heading text-[30px] text-center'>{title}</span>
      <span className='font-body text-center'>{subtitle}</span>
    </a>
  )
}