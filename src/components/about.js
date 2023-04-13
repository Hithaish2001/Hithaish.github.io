import React from 'react'
import pic from '../assets/portfolio.png'
import '../components/about.css'

const About=()=> {
  return (
    <div name="about" className='w-screen h-screen flex justify-center items-center flex-col bg-white'>
        <p className='text-5xl font-semibold text-center pb-16'>About Me</p>
        <div name="content" className='flex w-full justify-center items-start pl-32'>
            <div name="shadowbox" className="bg-stone-500 w-60 h-96 rounded-3xl blur-2xl relative right-8 top-3"></div>  
              <div className="pic  w-72 h-96 flex flex-none  hover:-translate-y-5 hover:translate-x-2 duration-300 absolute left-[17rem]">
                <img src={pic} alt="" className='rounded-3xl' />
              </div>
            <div className="selfD w-3/5  text-lg font-normal items-start pl-16">
              <p>Hello guys, I'm Hithaish. I am interested in developing web applications and exploring new technologies. Currently I'm working on reactjs projects for learning</p>
              <ul className='subnav pt-5 flex space-x-7 font-medium cursor-pointer'>
                  <li className='navelements'>Skills</li>
                  <li className='navelements'>Education</li>
                  <li className='navelements'>Experirence</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About