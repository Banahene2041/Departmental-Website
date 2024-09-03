import React from "react"

const Welcome = () => {
  return (
    <div className='border-2 sm:border-b-2 lg:border-b-[.3rem] md:border-b-[.2rem] border-t-0 border-x-0 border-b-[#0A2A53] '>
      <div className='welcome-div flex items-center justify-center h-[80vh] w-full'>
        <h3 className='text-white text-center text-[2.7rem] lg:text-[4.5rem] md:text-[3.5rem] flex flex-col items-center justify-center font-bold '>
          Welcome to the <br />
          Association of Computer <br />
          Engineering Students <br />
        </h3>
      </div>
      <div className='flex items-center justify-center px-8 lg:text-3xl sm:text-lg md:text-xl leading-7 lg:leading-10 md:leading-8 py-4 lg:pt-4 md:pt-3 flex-col text-[#080872] font-semibold'>
        <p className='text-center'>
          Dive with us into a world of interactive and effective learning. You
          are <br />
          welcome to the official website of the Association of the Computer
          <br />
          Engineering Students. Let's take a sneak peek into trending stories
          from <br />
          the tech world and the association
        </p>
      </div>
    </div>
  )
}

export default Welcome
