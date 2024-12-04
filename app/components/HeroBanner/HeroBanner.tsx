"use client";

import { ReactNode } from "react";

type HeroProps = {
  children?: ReactNode,
  image: string;
  imageFill?: string,
  imagePos?: string;
  mobileHeight: number;
  tabletHeight?: number;
  laptopHeight?: number;
}
export function HeroBanner({children, image, imageFill, imagePos, mobileHeight, tabletHeight, laptopHeight}: HeroProps) {
  let divClassName = 'bg-no-repeat';

  /**
   * I initially had more dynamic creation of tailwind classes but that caused rendering errors
   * I moved over to switch statements as an alternative to if statements
   */
  switch (image) {
    case 'corso-1':
      divClassName += ' bg-[url("/corso-1.jpg")]';
      break;
    case 'corso-2':
      divClassName += ' bg-[url("/corso-2.jpg")]';
      break;
    case 'corso-family-1':
      divClassName += ' bg-[url("/corso-family-1.jpg")]';
      break;
    case 'corso-gifts-1':
      divClassName += ' bg-[url("/corso-gifts-1.jpg")]';
      break;
    case 'corso-woods-1':
      divClassName += ' bg-[url("/corso-woods-1.jpg")]';
      break;
  }

  switch (imageFill) {
    case 'cover':
      divClassName += ' bg-cover';
      break;
    case 'contain':
      divClassName += ' bg-contain';
      break;
    default:
      divClassName += ' bg-auto';
  }

  switch (imagePos) {
    case 'right':
      divClassName += ' bg-right';
      break;
    case 'top':
      divClassName += ' bg-top';
      break;
    default:
      divClassName += ' bg-center';
  }
  
  switch (mobileHeight) {
    case 0:   // I'm using this for testing
      divClassName += ' h-[225px]'
      break;
    case 275:
      divClassName += ' h-[275px]'
      break;
    case 275:
      divClassName += ' h-[275px]';
      break;
    case 300:
      divClassName += ' h-[300px]';
      break;
    default:
      divClassName += ' h-[300px]';
  }

  switch (tabletHeight) {
    case 0:   // I'm using this for testing
      divClassName += ' tablet:h-[325px]'
      break;
    case 325:
      divClassName += ' tablet:h-[325px]'
      break;
    case 500:
      divClassName += ' tablet:h-[500px]';
      break;
    default:
      divClassName += tabletHeight ? ' tablet:h-[500px]' : '';
  }

  switch (laptopHeight) {
    case 0:   // I'm using this for testing
      divClassName += ' laptop:h-[600px]';
      break;
    case 600:
      divClassName += ' laptop:h-[600px]';
      break;
    case 800:
      divClassName += ' laptop:h-[800px]';
      break;
    default:
      divClassName += laptopHeight ? ' laptop:h-[800px]' : '';
  }

  return (
    <div className={divClassName}>
      {children}
    </div>
  )
}