import { BigLink } from "./BigLink";
import { Button } from "./Button";
import { HeroBanner } from "./HeroBanner";

// Home Page
export default async function Page() {
  return (
    <div className='h-[200vh]'>
      <HeroBanner imageUrl="/corso-1.jpg" imagePos='' imageAlt='Cane Corso'/>
      <div className='flex'>
        <div className='basis-1/2'>
          <BigLink title='Link' subtitle='see all' path='' />
        </div>
        <div className='basis-1/2'>
          <BigLink title='Link' subtitle='see all' path='' />
        </div>
      </div>
    </div>

  )
}