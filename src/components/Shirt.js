import React from 'react'
import { assets } from '../assets/assets'

const Shirt = () => {
  return (
    <section className='w-[100%] border-t-2 border-t-[#0A2A53] lg:border-t-0 lg:gap-8 md:gap-8 md:border-t-0 flex flex-col py-4 lg:py-8 lg:flex-row'>
      <div className='w-full lg:w-[55%]'>
        <img className='w-full' src={assets.t_shirt} alt='' />
      </div>
      <div className='w-full lg:w-[45%] pt-3 lg:pt-[9rem] text-lg lg:text-3xl text-[#080872] md:text-2xl'>
        <h4 className='font-semibold'>The 23/24 executive batch releases its yearly apparel for ACES</h4>
        <p className='pt-4 lg:pt-[5rem] md:pt-[3rem] font-medium'>Aug 7, 2024.</p>
      </div>
    </section>
  )
}

export default Shirt