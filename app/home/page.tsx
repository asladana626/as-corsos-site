import { BigLink } from "./BigLink";
import { Button } from "./Button";
import { HeroBanner } from "./HeroBanner";

// Home Page
export default async function Page() {
  return (
    <div className='pb-[30px] font-body'>
      <HeroBanner imageUrl="/corso-1.jpg" imagePos='right' mobileHeight={300} tabletHeight={500} />
      <div className='flex max-w-[1265px] mx-auto'>
        <div className='basis-1/2'>
          <BigLink title='Link' subtitle='see all' path='' />
        </div>
        <div className='basis-1/2'>
          <BigLink title='Link' subtitle='see all' path='' />
        </div>
      </div>

      {/* Welcoming Paragraphs */}
      <div className='px-3 [&>*]:mt-[15px] max-w-[1265px] mx-auto text-[18px] font-medium text-gray-700 [&>h1]:font-heading [&>h1]:text-[24px] [&>h1]:font-bold'>
        <p>
          Welcome to Alpha Sierra Corsos!
        </p>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar ligula efficitur sollicitudin suspendisse proin vehicula ultrices
          rhoncus? Interdum per nullam auctor fusce vivamus. Elit nec potenti dignissim netus ut id. Nullam lobortis erat ridiculus fusce
          urna urna ornare nostra inceptos. Taciti integer vivamus semper laoreet porta tristique consectetur. Volutpat pharetra aliquet
          amet eros class torquent molestie.
        </p>
        <h1>
          Nam Egestas Nascetur
        </h1>
        <p>
          Nam egestas nascetur himenaeos laoreet a purus. Orci pulvinar tortor fusce porta est inceptos montes. Nam pellentesque curae
          viverra senectus dapibus magna ultrices. Elementum sagittis libero sociosqu malesuada morbi ultrices imperdiet. Integer dignissim
          nostra cubilia parturient varius accumsan ante. Sociosqu tristique diam phasellus pretium est penatibus integer. Etiam faucibus
          mauris sollicitudin consequat orci lacinia venenatis. Enim lorem amet iaculis vitae a hac magna senectus ultricies. Fames quam
          aliquam suspendisse ultrices aptent dui quis.
        </p>
        <h1>
          Molestie Platea ad Netus
        </h1>
        <p>
          Molestie platea ad netus fames dictum porttitor. In vulputate ipsum; facilisi ante semper sed. Diam maximus ante pellentesque
          mus dictum nec aptent. Suspendisse parturient vivamus; nulla dis per efficitur magna habitasse. Etiam cras ut gravida; habitant
          maximus dui. Auctor interdum leo torquent penatibus donec magnis. Id cursus maecenas torquent amet tempus laoreet. At odio platea
          aenean molestie quam inceptos ullamcorper.
        </p>
        <h1>
          Purus Cras Praesent
        </h1>
        <p>
          Purus cras praesent justo finibus nec fringilla neque. Nibh suspendisse elit condimentum vivamus leo. Id morbi laoreet aliquet
          habitasse augue pharetra. Scelerisque cursus dictum id cras gravida netus elit. Nisi morbi malesuada in magna vivamus potenti
          pharetra lectus rhoncus. Urna fringilla natoque interdum quam dignissim donec bibendum eu.
        </p>
        <h1>
          Scelerisque Gravida
        </h1>
        <p>
          Scelerisque gravida tristique pulvinar vel sapien curae sem, nibh maecenas. Id phasellus taciti congue tempus elementum ipsum
          fringilla. Lorem metus sit rhoncus massa id mus. Aptent dis ullamcorper montes facilisi litora ac id. Magna eleifend mi fusce
          primis ad tortor volutpat cubilia. Finibus etiam facilisis pulvinar sociosqu luctus eros ipsum. Consequat litora magna dictumst
          eros risus mauris ipsum quis enim. Iaculis pharetra neque justo cras ante litora donec potenti. Elit id porta ornare tortor ligula
          nostra laoreet taciti. Himenaeos maximus in cubilia habitant, at feugiat sed.
        </p>
      </div>
    </div>

  )
}