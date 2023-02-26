import React from 'react'
import Avatar from '../../assets/image/Avatar.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';


function home() {
  return (
    <div name='home' className='h-screen w-full pt-16 bg-[#F9FAFB]'>
      <div className='max-w-screen-lg gap-6 p-4 mx-auto flex flex-col w-full items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center'>
          <h2 className='text-4xl sm:text-7xl font-bold text-gray-800'>Hi, I'm Ayomikun</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I'm a Frontend developer, I have 3 years of experience building and designing interface.
            Currently, I work on web application using technologies like React and Tailwind CSS.
          </p>
          <Link to='experience' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-cyan-500 cursor-pointer'>
            Experience<span className='group-hover:rotate-90 duration-300 flex items-center'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
          </Link>
        </div>

        <div className=''>
          <img src={Avatar} alt="" className='rounded-2xl w-80 h-80 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default home