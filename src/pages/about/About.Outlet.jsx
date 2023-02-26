import React from 'react';

function AboutOutlet() {
    return (
        <div name="about" className='bg-[#F5FBFF] w-full h-screen text-gray-900'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis laudantium, fugiat saepe placeat ex doloribus doloremque necessitatibus animi consectetur iusto porro ipsam, dolores voluptatem qui tempora suscipit. Aperiam, esse?
                </p>

                <br />

                <p className='text-xl mt-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vero reiciendis, beatae veniam modi assumenda, impedit soluta laudantium ad sunt neque ex adipisci inventore autem, dicta obcaecati dolorem? Similique, eligendi.
                </p>
            </div>
        </div>
    )
}

export default AboutOutlet