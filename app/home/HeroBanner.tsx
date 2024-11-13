"use client";

type HeroProps = {
  imageUrl: string;
  imagePos: string;
  mobileHeight: number;
  tabletHeight?: number;
  laptopHeight?: number;
}
export function HeroBanner({imageUrl, imagePos, mobileHeight, tabletHeight, laptopHeight}: HeroProps) {
  let divClassName = 'bg-cover';
  divClassName += ' bg-[url("' + imageUrl + '")]';
  divClassName += ' h-[' + mobileHeight + 'px]';
  divClassName += tabletHeight ? ' tablet:h-[' + tabletHeight + 'px]' : '';
  divClassName += laptopHeight ? ' laptop:h-[' + laptopHeight + 'px]' : '';
  divClassName += ' bg-' + imagePos;

  return (
    <>
      <div className={divClassName}></div>
    </>
  )
}