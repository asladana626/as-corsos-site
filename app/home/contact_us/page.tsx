import { Button } from "@/app/components/Button/Button";
import { Footer } from "@/app/components/Footer/Footer";
import { HeroBanner } from "@/app/components/HeroBanner/HeroBanner";
import emailjs from 'emailjs-com';

export default async function Page() {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // emailjs.sendForm('service_fuzez5h', 'template_lcnwbhk', e.target, 'Y3Ds21IYgk49GXNBR')
  }
  
  return (
    <>
      <HeroBanner image='corso-gifts-1' imageFill='cover' mobileHeight={275} tabletHeight={325} laptopHeight={600}>
        <div className='bg-[#3333337c] h-full pt-5 pl-3 laptop:pl-[3rem] laptop:pt-[4rem]'>
          <h1 className='font-heading text-white text-[3rem] laptop:text-[4rem]'>Contact Us</h1>
        </div>
      </HeroBanner>
      <div className='font-body space-y-3 mx-10'>
        <h1 className='font-heading text-[3rem] mt-10'>Let's Chat!</h1>
        <form onSubmit={sendEmail}>
          <label>
            Name <span className='text-red-500'>*</span>
            <div>
              <input required type='text' className='border-2 rounded w-[75%] mb-5' />
            </div>
          </label>

          <label>
            Email <span className='text-red-500'>*</span>
            <div>
              <input required type='email' className='border-2 rounded w-[75%] mb-5' />
            </div>
          </label>

          <label>
            Message <span className='text-red-500'>*</span>
            <div>
              <textarea required className='border-2 rounded w-[75%] h-[100px] mb-5' />
            </div>
          </label>

          <div className='w-[75%] flex justify-end'>
            <button className='border bg-gray-300 px-3 py-1 rounded-md'>Send!</button>
          </div>
        </form>
      </div>
      
      <HeroBanner image='corso-2' imageFill='contain' imagePos='right' mobileHeight={300} tabletHeight={500} >
        <div className='pl-8 h-full flex flex-col justify-center font-body'>
          <h1 className='font-heading text-[1.875rem] laptop:text-[3.125rem]'>Hello!</h1>
          <p className='max-w-[50%] laptop:max-w-[75%] mb-3 laptop:text-[1.5rem]'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus scelerisque donec purus dui facilisi. 
          </p>
          <p className='hidden tablet:block max-w-[50%] laptop:max-w-[75%] mb-3 laptop:text-[1.5rem]'>
            Id odio torquent dis tortor eros euismod. Ornare pellentesque himenaeos quisque facilisi tincidunt.
          </p>
          <Button color='black' text='Learn more' path='/home' />
        </div>
      </HeroBanner>

      <Footer />
    </>
  )
}