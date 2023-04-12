import React from 'react'
import pic from '../assets/portfolio.png'
import '../components/about.css'

const About=()=> {
  return (
    <div name="about" className='w-fit h-full mt-24'>
        <p className='ml-44 mt-3 text-5xl font-semibold text-center'>About Me</p>
        <div name="content" className='flex'>
            <div className="box bg-stone-500 absolute w-60 h-96 ml-52 mt-[75px] rounded-3xl blur-xl"></div>
              <div className="pic  ml-52 mt-10 w-72 h-96 flex flex-none relative hover:-translate-y-5 duration-300">
                <img src={pic} alt="a pic " className='rounded-3xl ' />
              </div>
            <div className="selfD mt-14 ml-14 mr-24 text-lg font-normal">
              <p>Hello guys, I'm Hithaish. I am interested in developing web applications and exploring new technologies. Currently I'm working on reactjs projects for learning</p>
              <ul className='subnav mt-5 flex space-x-7 font-medium cursor-pointer'>
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