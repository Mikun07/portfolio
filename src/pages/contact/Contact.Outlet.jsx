import React from 'react'

function ContactOutlet() {
  return (
    <div name='contact' className= 'w-full h-full mt-10 bg-gray-900'>
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-white'>
          <div className='py-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
          </div>

          <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/8871c64d-709f-4c57-9ba7-f877baf87d64" method='POST' className='flex flex-col w-full md:w-1/2'>
              <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

              <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

              <textarea name="message" placeholder='Enter your Message' rows="10"  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

              <button type="submit" className='text-white bg-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Talk to me</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ContactOutlet