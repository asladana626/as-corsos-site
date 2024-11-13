"use client";

import Image from 'next/image';

type HeroProps = {
  imageUrl: string;
  imagePos: string;
  imageAlt?: string;
}
export function HeroBanner({imageUrl, imagePos, imageAlt}: HeroProps) {
  
  return (
    <Image
      src={imageUrl}
      alt={imageAlt ? imageAlt : ''}
      width={2106}
      height={1424}
    />
  )
}