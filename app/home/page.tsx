import { BigLink } from "./BigLink";
import { Button } from "./Button";

export default async function Page() {
  return (
    <div className='h-[200vh]'>
      <BigLink title='Puppies' subtitle='see all' path='/home' />
    </div>

  )
}