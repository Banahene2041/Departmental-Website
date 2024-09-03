import React from "react"
import { assets } from "../assets/assets"
import { Link } from "react-router-dom"
import { TiSocialFacebook } from "react-icons/ti"
import { FaInstagram } from "react-icons/fa"
import { RiTwitterXLine } from "react-icons/ri"

const Footer = () => {
  return (
    <footer className='bg-[#080872] text-white pt-10'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8'>
          {/* First Column */}
          <div className='flex flex-col lg:flex-row lg:items-center gap-4'>
            <img
              src={assets.uenr_logo}
              className='w-[11rem] h-[13rem] object-cover'
              alt='UENR Logo'
            />
            <div className='h-[15rem] bg-white w-[0.2rem] hidden lg:block'></div>
            <div className='flex flex-col mt-4 lg:mt-0'>
              <h2 className='uppercase text-2xl lg:text-[2rem] font-bold'>
                UENR
              </h2>
              <Link
                target='_blank'
                to={
                  "https://admissions.uenr.edu.gh/applicant-login?_gl=1*p33ex3*_ga*MTcxNzUyMjc1MS4xNzI1MDExNDI4*_ga_J9GJ0913HE*MTcyNTAxMTQyOC4xLjAuMTcyNTAxMTQzOC4wLjAuMA..*_ga_K4X2JYSBS2*MTcyNTAxMTQyOS4xLjAuMTcyNTAxMTQyOS4wLjAuMA"
                }
                rel='noreferrer'
                className='my-2 text-lg'
              >
                Admission Portal
              </Link>
              <Link
                target='_blank'
                to={
                  "https://sis.uenr.edu.gh/?_gl=1*1jje1go*_ga*MTcxNzUyMjc1MS4xNzI1MDExNDI4*_ga_J9GJ0913HE*MTcyNTAxMTQyOC4xLjEuMTcyNTAxMTQ4My4wLjAuMA..*_ga_K4X2JYSBS2*MTcyNTAxMTQyOS4xLjEuMTcyNTAxMTQ4MS4wLjAuMA"
                }
                rel='noreferrer'
                className='mb-3 text-lg'
              >
                Admission Tracker
              </Link>
              <div className='flex gap-4'>
                <Link
                  target='_blank'
                  to={
                    "https://facetime.apple.com/join#v=1&p=NekXASa8Ee+TSZ6XY2xMtw&k=FXEByYkyWx-owfOr8Jqu8jt3Bf-voQIBnLz_A56iTBs"
                  }
                  rel='noreferrer'
                  className='bg-white text-[#080872] p-2 rounded-full'
                >
                  <TiSocialFacebook className='text-2xl' />
                </Link>
                <Link
                  target='_blank'
                  to={
                    "https://www.instagram.com/aces_uenr?igsh=cW01aG1qMGJkbzJq"
                  }
                  rel='noreferrer'
                  className='bg-white text-[#080872] p-2 rounded-full'
                >
                  <FaInstagram className='text-2xl' />
                </Link>
                <Link
                  target='_blank'
                  to={"https://x.com/acesonline38?s=11"}
                  rel='noreferrer'
                  className='bg-white text-[#080872] p-2 rounded-full'
                >
                  <RiTwitterXLine className='text-2xl' />
                </Link>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className='mt-8 lg:mt-0'>
            <h2 className='uppercase text-2xl lg:text-[2rem] font-bold mb-4'>
              Quick Links
            </h2>
            <div className='flex flex-col gap-2'>
              <Link to='#'>University Staff</Link>
              <Link to='#'>University Publication</Link>
              <Link
                target='_blank'
                to={"https://uenr.edu.gh/faq/"}
                rel='noreferrer'
                className='uppercase'
              >
                FAQs
              </Link>
            </div>
          </div>

          {/* Third Column */}
          <div className='mt-8 lg:mt-0'>
            <h2 className='uppercase text-2xl lg:text-[2rem] font-bold mb-4'>
              Other Info
            </h2>
            <p>Post Office Box 214, Sunyani, Ghana, West Africa</p>
            <p>Registrar's Office: +233(0) 035 299 0382</p>
            <p>HOD's Office: +233(0) 020 093 4851</p>
            <p>Email: info@uenr.edu.gh</p>
          </div>
        </div>

        <div className='mt-12 flex flex-row items-center gap-0 lg:gap-4 md:gap-4 justify-center pb-8 pt-4 text-center'>
          <div className='h-[.1rem] w-[4.3rem] bg-gradient-to-r from-[#fff] to-[#959292] lg:w-[12rem] md:w-[7rem]'></div>
          <p>All rights reserved © 2024</p>
          <div className='h-[.1rem] w-[4.3rem] bg-gradient-to-l from-[#fff] to-[#959292] lg:w-[12rem] md:w-[7rem]'></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
