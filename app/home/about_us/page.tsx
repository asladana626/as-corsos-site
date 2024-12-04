import { Button } from "@/app/components/Button/Button";
import { Footer } from "@/app/components/Footer/Footer";
import { HeroBanner } from "@/app/components/HeroBanner/HeroBanner";

export default async function Page() {
  return (
    <>
      <HeroBanner image='corso-gifts-1' imageFill='cover' mobileHeight={275} tabletHeight={325} laptopHeight={600}>
        <div className='bg-[#3333337c] h-full pt-5 pl-3 laptop:pl-[3rem] laptop:pt-[4rem]'>
          <h1 className='font-heading text-white text-[3rem] laptop:text-[4rem]'>About Us</h1>
        </div>
      </HeroBanner>
      <div className='font-body space-y-3 mx-10'>
        <h1 className='font-heading text-[3rem] mt-10'>Who We Are</h1>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh adipiscing litora; odio auctor litora ligula. Aliquam semper purus donec nascetur sapien. Cursus eros lectus massa vivamus quis semper hac. Et vulputate primis aliquet class quis. Habitasse felis metus pretium litora dis mollis imperdiet curabitur.
        </p>
        <p>
          Lobortis finibus integer facilisis mauris gravida et. Ac elit elementum erat tincidunt ultrices quisque habitasse. Class blandit congue convallis ex magnis class sapien enim tellus. Euismod quis potenti nisl ac varius dignissim semper. Ullamcorper parturient velit hendrerit elementum auctor eleifend vel nullam. Urna habitasse urna elit non quam faucibus ut. Scelerisque finibus est turpis facilisi consequat phasellus sodales imperdiet adipiscing. Et duis sodales netus gravida aptent ligula aptent. Dictum lacinia erat sagittis rutrum dolor.
        </p>
        <p>     
          Ac quisque imperdiet scelerisque; consectetur lectus gravida posuere lectus. Habitant finibus mus interdum penatibus luctus. Vulputate platea curae; et dolor tempus libero. Mollis lectus magna luctus odio non risus mattis ornare. Himenaeos nascetur ullamcorper ut praesent etiam nec faucibus neque. Tortor amet placerat tempor cubilia malesuada varius.
        </p>
      </div>
      
      <HeroBanner image='corso-2' imageFill='contain' imagePos='right' mobileHeight={300} tabletHeight={500} >
        <div className='pl-8 h-full flex flex-col justify-center'>
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