import React from 'react'
import { assets } from '../assets/assets'

const Robotics = () => {
  return (
    <section className='flex w-[100%] lg:items-center border-b-2 lg:border-b-[.3rem] md:border-b-[.3rem] border-b-[#0A2A53] border-t-2 border-t-[#0A2A53] lg:border-t-[.3rem] md:border-t-[.3rem] lg:justify-center flex-col-reverse lg:flex-row py-4 lg:gap-8 lg:pb-8'>
      <div className='p-4 lg:w-[45%]'>
        <h4 className='lg:pt-[6rem] text-lg text-[#080872] lg:text-2xl font-semibold'>
          The UENR Robotics Club in collaboration with ACES and GhiE-Wine
          launches the Hackathon
        </h4>
        <p className='mt-2 text-lg lg:text-2xl text-[#080872] font-medium lg:pt-[2rem]'>
          Aug 10, 2024.
        </p>
      </div>
      <div className='lg:flex lg:items-center lg:justify-end md:flex md:items-center md:justify-end md:p-0 sm:p-2 lg:p-0 lg:w-[55%]'>
        <img
          src={assets.robotics_image}
          alt='Pathway'
          className='w-full object-cover lg:w-[45rem] md:w-[35rem] h-auto'
        />
      </div>
    </section>
  )
}

export default Robotics