import { socialMedia } from '../../data/SocialMediaData';
export const BasicInformation = () => {
  return (
    <div className='w-full'>
      <div className='flex w-full justify-center lg:justify-start'>
        <img src="./foto.png" alt="" className='w-2/3' />
      </div>
      <h1 className='font-bold text-6xl text-principal-0 text-center lg:text-left'>Jhon Ospina</h1>
      <h2 className='font-semibold text-2xl lg:text-lg text-principal-0 mt-3 text-center lg:text-left'>Front-end developer</h2>
      <p className='hidden lg:block text-principal-50 mt-3 text-center lg:text-left [@media(max-height:824px)]:hidden'>I'm a proactive mid-senior frontend developer, blending solid engineering principles with innovative design to craft seamless digital experiences.</p>
      <div className='flex gap-2 py-3 justify-center lg:justify-start'>
        {
          socialMedia.map(social => (
            <a key={social.id} target='_blank' href={social.link} className='cursor-pointer text-3xl text-principal-50 hover:text-principal-0'>
              {social.icon}
            </a>
          ))
        }
      </div>

    </div>
  )
}
