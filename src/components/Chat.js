import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Chat = () => {
  return (
    <article className='flex w-[100%] h-[70vh] flex-col lg:flex-row lg:gap-28 border-3 border-[#000] lg:border-0'>
      <div className='w-[100%] h-[40vh] lg:h-full md:h-full lg:w-[60%]'>
        <img
          src={assets.welcome_icon}
          className='w-[100%] lg:w-[100%] lg:h-[70vh] h-full'
          alt=''
        />
      </div>
      <div className='w-[100%] h-[30vh] lg:h-full md:h-full lg:w-[40%]'>
        <h4 className='text-2xl lg:text-[3.5rem] font-medium lg:font-semibold md:font-semibold'>
          Welcome,
        </h4>
        <p className='uppercase text-lg mt-1 lg:mt-6 font-medium lg:text-3xl lg:font-medium'>
          fellow technologian
        </p>
        <p className='flex lg:flex-col justify-center gap-4 mt-8 lg:mt-11'>
          <span className='font-medium text-lg lg:text-3xl'>Let's begin</span>
          <span className='lg:mt-5'>
            <Link to='/chat' className='bg-[#FFBF00] py-2 lg:py-4 lg:px-8 rounded-md text-2xl px-5 text-white'>
              chat
            </Link>
          </span>
        </p>
      </div>
    </article>
  )
}

export default Chat