import { useState, useEffect } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'




function Carousel({children: slides,autoSlide = false,autoSlideInterval = 3000,}, props) {


  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])


  return (
  
        <div className="overflow-hidden relative h-full">

            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${curr * 100}%)` }}>
              {slides}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4 ">

              <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                <BsChevronCompactLeft size={40} />
              </button>

              <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
              <BsChevronCompactRight size={40} />
              </button>

            </div>

            <div className="absolute bottom-3 right-0 left-0">
              <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <div key={i} className={` transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"} `}/>
                ))}
              </div>
            </div>
        </div>
  )
}

export default Carousel




















// import React, { useState } from 'react'
// import bookstore from '../assets/bookstore.png'
// import news from '../assets/newszone-min.png'
// import textutil from '../assets/textanalyzer.png'
// import tictactoe from '../assets/tictactoe.png'
// import Wcounter from '../assets/wordcounter.png'
// import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
// import {GoPrimitiveDot} from 'react-icons/go'

// const Project=()=>{
//   const slides=[
//     {url: news},
//     {url: textutil},
//     {url: bookstore},
//     {url: tictactoe},
//     {url: Wcounter},
//   ];

//   const [current,setCurrent]=useState(0)


//   const previous=()=>{
//     if (current===0) {
//       setCurrent(slides.length-1)
//     }else{
//       setCurrent(current-1)
//     }
//   }

//   const next=()=>{
//     if (current===slides.length-1) {
//       setCurrent(0)
//     }else{
//       setCurrent(current+1)
//     }
//   }

//   const show=(slideIndex)=>{
//     setCurrent(slideIndex)
//   }


//   return (
//     <div name="main" className='w-screen h-screen justify-center pl-24 items-center flex flex-col'>
//         <p className='text-5xl font-semibold text-center font-mono py-7'>PROJECTS</p>


//         <div className=' w-full h-2/3 relative justify-center items-center flex '>

//             <div className="absolute flex justify-center items-center ">
//               {slides.map((slide, index) => (
//               <div name='mainImg' key={index} className={`w-[290px] h-[190px]  bg-gray-300 rounded-2xl drop-shadow-2xl ring ring-offset-1  ring-gray-300 transition-opacity duration-700 ease-in-out ${current===index?'opacity-100':'opacity-0'}   transform -translate-y-[10%] translate-x-32`} >
//                 <img src={`${slides[current===0 ? slides.length-1:current-1].url}`} alt='' className='h-full rounded-2xl '></img>
//               </div>
//                ))}
//             </div>
          
//             <div className="absolute flex justify-center items-center ">
//               <div name='mainImg' className='w-[510px] h-[410px]  bg-gray-300 rounded-2xl drop-shadow-2xl ring ring-offset-1 ring-gray-300 -translate-y-3 hover:scale-105 duration-500 '>
//                 <img src={`${slides[current].url}`} alt='' className='h-full rounded-2xl '></img>
//               </div>
//             </div>   
            
         
//             <div className="absolute flex justify-center items-cente ">
//               {slides.map((slide, index) => (
//               <div name='mainImg' key={index} className={`w-[290px] h-[190px]  bg-gray-300 rounded-2xl drop-shadow-2xl ring ring-offset-1 ring-gray-300  transition-opacity duration-700 ease-in-out ${current===index?'opacity-100':'opacity-0'}  transform -translate-y-[10%] translate-x-[365%]`}>
//                 <img src={`${slides[current===slides.length-1?0:current+1].url}`} alt='' className='h-full rounded-2xl '></img>
//               </div>
//                ))}
//             </div>
          
//         </div>




//         <div className="relative">
//           <div className='absolute top-[50%] translate-x-96 translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-105 duration-[600ms] ' onClick={next}>
//             <BsChevronCompactRight size={40}/>
//           </div>
//         </div>

//         <div className='relative flex'>
//           <div className='absolute top-[50%] -translate-x-96 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-105 duration-[600ms] ' onClick={previous}>
//             <BsChevronCompactLeft size={40}/>
//           </div>
//         </div>

//         <div className='flex space-x-3 '>
//           {slides.map((slide,slideIndex)=>(
//             <div key={slideIndex} onClick={()=>show(slideIndex)} className={`flex text-gray-600 cursor-pointer  hover:text-black `}>
//               <GoPrimitiveDot size={20}/>
//             </div>
//           ))}
//         </div>
        
//     </div>
//   )
// }

// export default Project
