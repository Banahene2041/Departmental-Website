import React from 'react'

const Hod = ({text1,text2, img}) => {
  return (
    <article className='py-4 w-[100%] md:pt-[3rem] lg:pt-[5rem] md:pb-[2rem] lg:pb-[3rem] flex flex-col lg:flex-row md:gap-[2rem] lg:gap-[3rem]'>
      <div className='w-full md:w-[50%] lg:w-[48%]'>
        <img src={img} className='w-full h-[30vh] md:h-[35vh] lg:h-[40vh] object-cover' alt='' />
      </div>
      <div className='w-full flex flex-col mt-3 lg:text-[2.5rem] text-[#080872] justify-center md:w-[50%] lg:w-[52%]'>
        <h4 className='font-bold'>{text1}</h4>
        <p className=''>{text2}</p>
      </div>
    </article>
  )
}

export default Hod