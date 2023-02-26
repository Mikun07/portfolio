import React from 'react';
import HtmlLogo from '../../assets/Logo/HTML5.svg';
import CSS from '../../assets/Logo/CSS.svg';
import Angular from '../../assets/Logo/Angular.svg';
import Bootstrap from '../../assets/Logo/Bootstrap.svg';
import ReactLogo from '../../assets/Logo/React.svg';
import Java from '../../assets/Logo/Java.svg';
import JavaScript from '../../assets/Logo/JavaScript.svg';
import Tailwind from '../../assets/Logo/Tailwind.svg'

function ExperienceOutlet() {

    const badge = [
        {
            id: 1,
            src: HtmlLogo,
            title: 'HTML',
            style: 'shadow-[#E65100]'
        },
        {
            id: 2,
            src: CSS,
            title: 'CSS',
            style: 'shadow-[#0277BD]'
        },
        {
            id: 3,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-[#00c1e0]'
        },
        {
            id: 4,
            src: Bootstrap,
            title: 'Bootstrap',
            style: 'shadow-[#673ab7]'
        },
        {
            id: 5,
            src: ReactLogo,
            title: 'React',
            style: 'shadow-[#80deea]'
        },
        {
            id: 6,
            src: Java,
            title: 'Java',
            style: 'shadow-[#1565C0]'
        },
        {
            id: 7,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-[#f7df1e]'
        },
        {
            id: 8,
            src: Angular,
            title: 'Angular',
            style: 'shadow-[#b71c1c]'
        },
    ];

    return (
        <div name='experience' className='bg-[#F9FAFB] w-full h-screen'>
            <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-900'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>What experience do i have? Here are some techologies i've worked with.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        badge.map(({ id, src, title, style }, index) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ExperienceOutlet