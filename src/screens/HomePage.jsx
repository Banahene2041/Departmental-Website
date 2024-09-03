import React from 'react'
import Welcome from '../components/Welcome'
import Tesla from '../components/Tesla'
import Shirt from '../components/Shirt'
import Robotics from '../components/Robotics'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
    <Header />
      <section className='lg:mt-5 lg:mx-40 md:mt-4 md:mx-28 pb-[4rem] md:pb-[6rem] lg:pb-[10rem]'>
        <Welcome />
        <Tesla />
        <Shirt />
        <Robotics />
      </section>
      <Footer />
    </>
  )
}

export default HomePage