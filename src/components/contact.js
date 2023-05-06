import React from 'react'
import './contact.css'


const contact=()=> {
  return (
    <div id='contact' className=' w-full h-fit sm:h-screen flex flex-col justify-center items-center md:bg-white bg-white dark:bg-black-gray md:dark:bg-black-gray py-14 sm:py-0 '>
        <div className="w-ful text-center"><p className='text-5xl sm:text-6xl font-semibold uppercase font-mono  pb-9 md:text-black  text-black md:dark:text-white dark:text-white'>contact me</p></div>
         <div className="bg-white md:bg-white  dark:bg-gray-950 md:dark:bg-gray-950  shadow-xl sm:hover:shadow-3xl sm:dark:shadow-gray-800 w-[75%] h-[70%] rounded-[39px] relative justify-around items-center flex  transition-all duration-500 ease-in-out">
            
                <div className='hidden md:block space-y-3 w-fit h-fit pb-16 p-8'>
                    <p className='text-5xl lg:text-7xl font-semibold md:text-black text-black dark:text-white md:dark:text-white font-serif '>touch<span className='animate-pulse'>!</span> </p>
                    <p className='text-5xl lg:text-7xl font-semibold md:text-black text-black dark:text-white md:dark:text-white font-serif '>Get in </p>
                </div>
               
             
                  <form action="https://getform.io/f/d5e65022-78c1-48b5-b9d3-b69012c174d4" method='POST' className='w-full lg:w-[60%]  md:h-[70%] md:border-l-4 relative text-lg flex flex-col text-black dark:text-white'>
                    
                    <div className="relative space-y-9 py-10 xl:pl-28 px-5">
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
                    </div>

                    <div className='flex justify-center items-center relative xl:pl-28 pb-7 '>
                      <button className=" border-2 text-black bg-neutral-300 shadow-lg dark:bg-black-gray dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-black font-bold py-2 px-4 rounded-lg transition-all duration-500 ease-in-out" type="submit">Submit</button>
                    </div>

                </form>
          </div>
    </div>
  )
}

export default contact