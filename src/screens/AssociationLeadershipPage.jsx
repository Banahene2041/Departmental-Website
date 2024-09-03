import React from 'react'
import Hod from "../components/Hod"
import { assets } from '../assets/assets'
import AcesLeaders from '../components/AcesLeaders'

const AssociationLeadershipPage = () => {
  return (
    <section className='lg:mt-5 lg:mx-40 md:mt-4 md:mx-28 pb-[4rem] md:pb-[6rem] lg:pb-[10rem]'>
      <Hod
        text1='Head of Department'
        text2='Professor Asubam Weyori Benjamin'
        img={assets.hod_image}
      />
      <Hod
        text1='Departmental Examination Officer'
        text2='Dr. Samuel Tweneboah Kodua'
        img={assets.exams_officer}
      />
      <AcesLeaders />
    </section>
  )
}

export default AssociationLeadershipPage