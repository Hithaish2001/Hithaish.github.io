import React, { useState } from 'react'
import bookstore from '../assets/bookstore.png'
import news from '../assets/newszone-min.png'
import textutil from '../assets/textanalyzer.png'
import tictactoe from '../assets/tictactoe.png'
import Wcounter from '../assets/wordcounter.png'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'

const Project=()=>{
  const slides=[
    {url: news},
    {url: textutil},
    {url: bookstore},
    {url: tictactoe},
    {url: Wcounter},
  ];

  const [current,setCurrent]=useState(0)


  const previous=()=>{
    if (current===0) {
      setCurrent(slides.length-1)
    }else{
      setCurrent(current-1)
    }
  }

  const next=()=>{
    if (current===slides.length-1) {
      setCurrent(0)
    }else{
      setCurrent(current+1)
    }
  }

  const show=(slideIndex)=>{
    setCurrent(slideIndex)
  }


  return (
    <div name="main" className='w-screen h-screen justify-center pl-24 items-center flex flex-col'>
        <p className='text-5xl font-semibold text-center font-mono py-7'>PROJECTS</p>
        <div className=' w-full h-2/3 justify-center items-center flex flex-col space-x-8 '>

        
          <div className='relative right-[550px] bottom-56 justify-center items-center '>
            {slides.map((slide, index) => (
            <div name='mainImg' key={index} className={`w-[510px] h-[410px] absolute ring-4 transition-transform duration-500 ease-in-out ${
              current === index ? 'transform-none opacity-100 z-10' : 'transform translate-x-full opacity-0 z-0'
            } `} >
              <img src={`${slide.url}`} alt={`Slide ${index + 1}`} className='h-full rounded-2xl '></img>
            </div>
            ))}
          </div>
          

          <div className="relative justify-center items-center flex">
            {slides.map((slide, index) => (
            <div name='mainImg' className={`w-[290px] h-[190px] absolute ring-4  transition-transform duration-500 ease-in-out ${
              current === index ? '-translate-x-full opacity-0' : ''
            } `}>
              <img src={`${slide.url}`} alt={`Slide ${index + 1}`} className='h-full rounded-2xl '></img>
            </div>
            ))}
          </div>
          

          <div className="relative justify-center items-center flex">
            {slides.map((slide, index) => (
            <div name='mainImg' className={`w-[290px] h-[190px] absolute ring-4 transition-transform duration-500 ease-in-out ${
              current=== index ? 'translate-x-full opacity-0' : ''
            }`}>
              <img src={`${slide.url}`} alt={`Slide ${index + 1}`} className='h-full rounded-2xl '></img>
            </div>
            ))}
          </div>
          

          

        </div>


            {/* right button */}
        <div className="relative">
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-105 duration-[600ms] ' onClick={next}>
              <BsChevronCompactRight size={40}/>
            </div>
        </div>

            {/* left button */}
        <div className='relative flex'>
          <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-105 duration-[600ms] ' onClick={previous}>
            <BsChevronCompactLeft size={40}/>
          </div>
        </div>

        <div className='flex space-x-3 '>
          {slides.map((slide,slideIndex)=>(
            <div key={slideIndex} onClick={()=>show(slideIndex)} className={`flex text-gray-600 cursor-pointer  hover:text-black `}>
              <GoPrimitiveDot size={20}/>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default Project