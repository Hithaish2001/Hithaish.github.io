import React from 'react'
import './contact.css'


const contact=()=> {
  return (
    <div id='contact' className=' w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black-gray'>
        <div className="w-ful text-center"><p className='text-5xl sm:text-6xl font-semibold uppercase font-mono  pb-9 text-black dark:text-white'>contact me</p></div>
         <div className="bg-white dark:bg-gray-950  shadow-xl sm:hover:shadow-3xl sm:dark:shadow-gray-800 w-[80%] sm:border-none sm:w-[65%] h-[69%] sm:h-[70%] rounded-[39px] relative justify-center items-center flex transition-all duration-500 ease-in-out">
            
                <div className='hidden sm:block space-y-3'>
                    <p className='text-7xl font-semibold text-black dark:text-white font-serif '>Get in </p>
                    <p className='text-7xl font-semibold text-black dark:text-white font-serif '>touch<span className='animate-pulse'>!</span> </p>

                  <hr className='w-96 border-2 border-black dark:border-gray-600 rotate-90 translate-x-24 -translate-y-16'/>
                </div>
               
             
              <form action="https://getform.io/f/d5e65022-78c1-48b5-b9d3-b69012c174d4" method='POST' className='w-80 text-lg flex flex-col text-black dark:text-white pb-16 sm:pb-5 space-y-9'>
                  
                  <div className="input-box relative px-2">
                    <input type="text" id="fname" name="name"  className='w-full group outline-none p-4 rounded-md border bg-transparent focus:border-2 dark:focus:border-white focus:border-black border-gray-700' required autoComplete='off'/>
                    <span className='absolute left-0 p-3 pl-5 text-gray-700'>Name</span>
                  </div>
                  <div className="input-box relative px-2">
                    <input type="text" id="lname" name="email"  className='w-full group outline-none p-4 rounded-md border bg-transparent focus:border-2 dark:focus:border-white focus:border-black border-gray-700' required autoComplete='off'/>
                    <span className='absolute left-0 p-3 pl-5  text-gray-700'>Mail-ID</span>
                  </div>
                  <div className="input-box relative px-2">
                    <input type="text" id="lname" name="feedback" className='w-full group outline-none p-4 rounded-md border bg-transparent focus:border-2 dark:focus:border-white focus:border-black border-gray-700' required autoComplete='off'/>
                    <span className='absolute left-0 p-3 pl-5  text-gray-700'>Message</span>
                  </div>
                  <div className='relative justify-center items-center flex'>
                  <button className="absolute border-2 top-2 text-black bg-neutral-300 shadow-lg dark:bg-black-gray dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-black font-bold py-2 px-4 rounded-lg transition-all duration-500 ease-in-out" type="submit">Submit</button>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default contact