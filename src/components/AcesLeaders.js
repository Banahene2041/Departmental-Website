import React from "react"
import { acesLeaders } from "../data"

const AcesLeaders = () => {
  return (
    <article className='grid grid-cols-1 gap-2 md:gap-5 lg:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 lg:mt-10'>
      {acesLeaders.map((item, index) => {
        const { position, image, name, year } = item
        return (
          <div
            key={index}
            className='p-4 aces-leaders border rounded-lg text-lg lg:text-3xl text-[#080872] md:text-2xl'
          >
            <img src={image} alt={name} className='w-full h-auto rounded-md' />
            <h4 className='mt-2 font-semibold'>{position}</h4>
            <p className='text-xl my-1 md:my-2 lg:my-3'>{year}</p>
            <p className='text-xl'>{name}</p>
          </div>
        )
      })}
    </article>
  )
}

export default AcesLeaders
