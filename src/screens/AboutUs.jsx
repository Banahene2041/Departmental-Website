import React from "react"
import AboutHistory from "../components/AboutHistory"
import Footer from "../components/Footer"
import Header from "../components/Header"

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className='text-[#080872] lg:mt-[4rem] md:mt-[2rem] lg:mx-40 md:mx-28 pb-[4rem] md:pb-[6rem] lg:pb-[10rem] mt-[1rem]'>
        <AboutHistory />
      </section>
      <Footer />
    </>
  )
}

export default AboutUs
