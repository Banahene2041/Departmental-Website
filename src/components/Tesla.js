import React from "react"
import { assets } from "../assets/assets"
import { Link } from "react-router-dom"

const Tesla = () => {
  return (
    <>
      <Link to='/tesla-story'>
        <section className='flex lg:items-center lg:justify-center flex-col-reverse lg:flex-row py-3 lg:gap-8 border-b-3 border-b-[#0A2A53] lg:border-b-[.3rem] lg:pb-8'>
          <div className='p-4 lg:w-1/2'>
            <h4 className='lg:pt-[6rem] text-lg text-[#080872] lg:text-2xl font-bold'>
              Tesla Launches New $300M AI Cluster for Advanced Computation
            </h4>
            <p className='mt-2 text-lg lg:text-2xl text-[#080872] font-medium lg:pt-[2rem]'>
              Aug 1, 2024. Source: HPC Wire
            </p>
          </div>
          <div className='lg:flex lg:items-center lg:justify-end md:flex md:items-center md:justify-end md:p-0 sm:p-2 lg:p-0 lg:w-full'>
            <img
              src={assets.pathway}
              alt='Pathway'
              className='w-full object-cover lg:w-[45rem] md:w-[35rem] h-auto'
            />
          </div>
        </section>
      </Link>
    </>
  )
}

export default Tesla
