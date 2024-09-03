import React from "react"
import { acesLeaders } from "../data"

const AcesLeaders = () => {
  return (
    <article className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {acesLeaders.map((item, index) => {
        const { position, image, name, year } = item
        return (
          <div key={index} className='.aces-leaders p-4 border rounded-lg'>
            <img
              src={image}
              alt={name}
              className='leaders w-full md:h-[55vh] lg:h-[60vh] object-cover rounded-md'
            />
            <h4 className='mt-2 font-semibold'>{position}</h4>
            <p className='text-sm text-gray-600'>{year}</p>
            <p className='text-lg'>{name}</p>
          </div>
        )
      })}
    </article>
  )
}

export default AcesLeaders
