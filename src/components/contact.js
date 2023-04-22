import React from 'react'
import mail from "../assets/mailbox.png";
const contact=()=> {
  return (
    <div name='contact' id='contact' className=' w-screen h-screen flex flex-col justify-center items-center'>
        <p className='text-5xl font-semibold uppercase font-mono py-7'>contact me</p>
         <div className=" border-2 shadow-xl w-[65%] h-[70%] rounded-[39px] relative group overflow-hidden grid grid-cols-2 gap-x-20 pl-24">
            <div className='pt-10 space-y-9'>
             <div className='space-y-2'>
             <p className='text-3xl font-medium'>Get in touch!</p>
              
              
             </div>
              <form action="" className='text-lg flex flex-col'>
                  <label className='block'>Your Name:</label>
                  <input type="text" id="fname" name="fname" placeholder='name' className='outline-none border-b  pt-1'/>
                  <label className='pt-5'>Your Email:</label>
                  <input type="text" id="lname" name="lname" placeholder='abc@gmail.com' className='outline-none border-b  pt-1'/>
                  <label className='pt-5'>your Message:</label>
                  <input type="text" id="lname" name="lname" placeholder='message' className='outline-none border-b  pt-1'/>

                  <div className='relative'>
                  <button className="absolute top-10 border-2  bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-lg transition-all duration-700 ease-in-out" type="submit">Submit</button>
                  </div>
              </form>
            </div>
            <div className='pt-16'><img src={mail} alt="" className='w-[350px] h-[350px] pt-1 scale-90 group-hover:scale-100 transition-all duration-700 ease-in-out' /></div>
         </div>
    </div>
  )
}

export default contact