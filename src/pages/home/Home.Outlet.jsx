import React from 'react'
import Avatar from '../../assets/image/Avatar.png';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';


function home() {
  const Social = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md',
      src: 'LinkedIn'
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Mikun07',
      src: 'Github'
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:ayomikunolaleye@gmail.com',
      src: 'Mail'
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'Resume.pdf',
      style: 'rounded-br-md',
      download: true,
      src: 'Resume'
    },
  ];
  return (
    <div name='home' className='h-screen w-full pt-16 bg-[#F9FAFB]'>
      <div className='max-w-screen-lg gap-6 p-4 mx-auto flex flex-col w-full items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center'>
          <h2 className='text-4xl sm:text-7xl font-bold text-gray-800'>Hi, I'm Ayomikun</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            A Frontend developer, I have 3 years of experience building and designing interface.
            Currently, I work on web application using technologies like React and Tailwind CSS.
          </p>

          <div className='lg:hidden my-1 flex justify-between items-center'>
            {Social.map(({ id, child, src, href, style, download }) => (
              <button key={id} className={'flex items-center rounded-md cursor-pointer w-14 h-14 px-4 bg-gray-900'}>
                <a alt={src} href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                  {child}
                </a>
              </button>
            ))}
          </div>

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