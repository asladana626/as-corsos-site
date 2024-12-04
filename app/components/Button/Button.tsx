"use client";

type ButtonProps = {
  color: string;
  text: string;
  path: string;
}
export function Button({color, text, path}: ButtonProps) {
  let anchorClassName = 'border-2 py-[12px] px-[30px] tablet:px-[60px] font-body text-[1.125rem] font-medium transition:transform duration-[300ms] ease hover:scale-90';
  if (color === 'white') {
    anchorClassName += ' border-white text-white';
  } else {
    anchorClassName += ' border-gray-300 text-gray-600';
  }
  
  return (
    <div className='flex'>
      <a href={path} className={anchorClassName}>
        {text}
      </a>
    </div>
  )
}