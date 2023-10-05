import React from 'react'
import './contact.css'


const contact=()=> {
  return (
    <div id='contact' className=' w-screen h-fit sm:h-screen flex flex-col justify-center items-center md:bg-white bg-white dark:bg-black-gray md:dark:bg-black-gray py-14 sm:py-0 select-none'>
        <div className="w-full text-center"><p className='text-5xl sm:text-6xl font-semibold uppercase font-mono  pb-6 md:text-black  text-black md:dark:text-white dark:text-white'>contact me</p></div>
        <p className='dark:text-white text-black pb-6 md:hidden'>Don't be shy... Hit me up<span className='animate-pulse font-bold'>!</span></p>
         <div className="bg-white md:bg-white  dark:bg-gray-950 md:dark:bg-gray-950  shadow-lg sm:hover:shadow-xl sm:dark:shadow-slate-600 w-[85%] h-[70%] md:w-[80%] md:h-[70%] rounded-[39px] relative justify-around items-center flex  transition-all duration-500 ease-in-out">
            
                <div className='hidden md:block space-y-3 w-fit h-fit pb-16 p-8'>
                    <p className='text-5xl lg:text-6xl font-semibold md:text-black text-black dark:text-white md:dark:text-white font-serif '>Don't be shy.. </p>
                    <p className='text-5xl lg:text-6xl font-semibold md:text-black text-black dark:text-white md:dark:text-white font-serif '>Hit me up<span className='animate-pulse'>!</span> </p>
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
                      <button className=" border-2 border-gray-300 text-black bg-transparent  shadow-lg  dark:text-white hover:bg-gray-800 dark:hover:bg-white dark:hover:text-black hover:text-white  font-bold py-2 px-4 rounded-lg transition-all duration-500 ease-in-out" type="submit">Submit</button>
                    </div>

                </form>
          </div>
    </div>
  )
}

export default contact