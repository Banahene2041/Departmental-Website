import React from 'react'
import { assets } from '../assets/assets'

const AboutHistory = () => {
  return (
    <article className='px-2'>
      <h4 className='text-2xl lg:text-[3.5rem] font-semibold lg:font-bold text-[#080872] md:text-3xl mb-1 md:mb-6 lg:mb-8'>
        Brief History
      </h4>
      <p className='text-lg md:leading-8 md:text-2xl lg:leading-10 lg:text-3xl font-normal'>
        The Computer Engineering Department at University Of Energy And Natural
        Resources is a hub of innovation and excellence in computing and
        technology. Established in the Year 2023 , our department is dedicated
        to advancing the frontiers of computer science and engineering. We offer
        a dynamic learning environment that combines rigorous academic programs
        with hands-on research opportunities, preparing our students to become
        leaders in the rapidly evolving tech industry. Our department have
        distinguished experts in areas such as artificial intelligence, cyber
        security, and software engineering and are committed to fostering a
        community of collaboration and discovery. At University Of Energy and
        Natural Resources, we empower our students to push the boundaries of
        what is possible, equipping them with the skills and knowledge to shape
        the future of technology.
      </p>
      <div className='flex flex-col lg:flex-row lg:gap-8 mt-10'>
        <div>
          <h4 className='font-semibold lg:font-semibold text-2xl lg:text-[2.4rem] mb-2 lg:mb-4 md:mb-3'>
            Mission
          </h4>
          <p className='text-lg md:text-xl lg:text-2xl'>
            Our mission is to empower computer engineering students through
            education, collaboration, and professional development, equipping
            them to become innovative leaders and ethical problem solvers in the
            technology field.
          </p>
        </div>
        <div className='my-6 lg:my-0'>
          <h4 className='font-semibold lg:font-semibold text-2xl lg:text-[2.4rem] mb-2 lg:mb-4 md:mb-3'>
            Vision
          </h4>
          <p className='text-lg md:text-xl lg:text-2xl'>
            We aspire to be the leading association for computer engineering
            students, to shape a smarter, more connected, and sustainable
            future.
          </p>
        </div>
      </div>
      <h4 className='uppercase text-center text-xl lg:text-3xl md:text-2xl mt-0 lg:mt-8 md:mt-6 font-semibold lg:font-semibold'>
        project developers
      </h4>
      <div className='flex w-[100%] flex-row items-center justify-center gap-2 lg:gap-20 mt-4 lg:mt-8'>
        <img
          src={assets.judicial_rep}
          className='w-full lg:w-1/6 h-[21vh] md:h-[30vh] lg:h-[35vh] object-cover rounded-full'
          alt=''
        />
        <img
          src={assets.project_dev2}
          className='w-full lg:w-1/6 h-[21vh] md:h-[30vh] lg:h-[35vh] object-cover rounded-full'
          alt=''
        />
        <img
          src={assets.project_dev1}
          className='w-full lg:w-1/6 h-[21vh] md:h-[30vh] lg:h-[35vh] object-cover rounded-full'
          alt=''
        />
      </div>
      <div className='mt-8 flex flex-col lg:flex-row lg:mt-14'>
        <img src={assets.it_monitor} className='object-cover h-[30vh] md:h-[45vh] lg:h-[50vh] mb-2 md:mb-0 lg:mb-0 w-full' alt="" />
        <img src={assets.ict_image} className='object-cover h-[30vh] md:h-[45vh] lg:h-[50vh] w-full' alt="" />
      </div>
    </article>
  )
}

export default AboutHistory