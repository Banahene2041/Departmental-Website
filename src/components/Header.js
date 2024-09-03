import React, { useState } from "react"
import { assets } from "../assets/assets"
import { NavLink } from "react-router-dom"
import { navigation } from "../data"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='flex flex-wrap justify-between lg:justify-around md:justify-around items-center w-full h-auto py-4 px-4 sm:px-8 sm:border-b-2 lg:border-b-[.3rem] md:border-b-[.2rem] border-[#0A2A53]'>
      <div className='flex items-center gap-2 sm:gap-4 lg:gap-8 md:gap-6'>
        <img
          src={assets.uenr_logo}
          className='w-10 sm:w-14 md:w-16 lg:w-20'
          alt=''
        />
        <img
          src={assets.aces_logo}
          className='w-10 sm:w-14 md:w-16 lg:w-20'
          alt=''
        />
        <p className='uppercase text-xs sm:text-sm md:text-lg lg:text-2xl text-[#0A2A53] font-normal lg:font-medium'>
          department of <br /> computer engineering
        </p>
      </div>
      <button
        className='text-[#080872] text-2xl sm:hidden'
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        )}
      </button>
      <div
        className={`w-full sm:w-auto ${
          isMenuOpen ? "block" : "hidden"
        } sm:block mt-4 sm:mt-0`}
      >
        <ul className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
          {navigation.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                onClick={()=>setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#080872] text-white text-sm sm:text-base md:text-lg lg:text-lg font-medium px-2 py-2 sm:py-2 rounded"
                    : "text-[#080872] text-sm sm:text-base md:text-lg lg:text-lg font-medium"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
