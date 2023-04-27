import React from 'react'


const contact=()=> {
  return (
    <div id='contact' className=' w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-gradient-to-r from-black to-gray-800'>
        <p className='text-6xl font-semibold uppercase font-mono  pb-9 text-black dark:text-white'>contact me</p>
         <div className="bg-white dark:bg-gradient-to-r from-gray-800 to-black  shadow-2xl dark:shadow-gray-800 w-[65%] h-[70%] rounded-[39px] relative justify-center items-center flex ">
            
                <div className='space-y-3'>
                  <p className='text-7xl font-medium text-black dark:text-white font-serif '>Get in </p>
                  <p className='text-7xl font-medium text-black dark:text-white font-serif '>touch! </p>

                  <hr className='w-96 bg-black rotate-90 translate-x-24 -translate-y-16'/>
                </div>
               
             
              <form action="https://getform.io/f/d5e65022-78c1-48b5-b9d3-b69012c174d4" method='POST' className='text-lg flex flex-col text-black dark:text-white pb-5'>
                  <label className='block'>Your Name:</label>
                  <input type="text" id="fname" name="name" placeholder='name' className='outline-none border-b  pt-1 bg-transparent focus:border-b-2 focus:border-gray-800 w-72 ' required autoComplete='off'/>
                  <label className='pt-7'>Your Email:</label>
                  <input type="text" id="lname" name="email" placeholder='abc@gmail.com' className='outline-none border-b  pt-1 bg-transparent focus:border-b-2 focus:border-gray-800' required autoComplete='off'/>
                  <label className='pt-7'>your Message:</label>
                  <input type="text" id="lname" name="feedback" placeholder='message' className='outline-none border-b  pt-1 bg-transparent focus:border-b-2 focus:border-gray-800' required autoComplete='off'/>

                  <div className='relative'>
                  <button className="absolute top-10 border-2  dark:bg-gradient-to-br from-gray-700 to-black dark:text-white hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-700 ease-in-out" type="submit">Submit</button>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default contact