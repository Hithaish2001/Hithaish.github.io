import React, { useState } from 'react';
import bookstore from '../assets/bookstore.png'
import news from '../assets/newszone-min.png'
import textutil from '../assets/textanalyzer.png'
import tictactoe from '../assets/tictactoe.png'
import Wcounter from '../assets/wordcounter.png'

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides=[
    {image: news},
    {image: textutil},
    {image: bookstore},
    {image: tictactoe},
    {image: Wcounter},
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  
  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={handlePrevSlide} className="relative top-1/2 left-0 z-10 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-l-md">
        Prev
      </button>
      <button onClick={handleNextSlide} className="relative top-1/2 right-0 z-10 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-r-md">
        Next
      </button>




      <div className="relative w-1/3 h-64 m-5">
       {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              currentSlide === index ? 'transform-none opacity-100 z-10' : 'transform translate-x-full opacity-0 z-0'
            }`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div> 
        ))}
      </div>





      <div className="relative w-1/6 h-64 m-5">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              currentSlide === index ? '-translate-x-full opacity-0' : ''
            }`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>



      <div className="relative w-1/6 h-64 m-5">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
              currentSlide === index ? 'translate-x-full opacity-0' : ''
            }`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;




















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
//         <div className=' w-full h-2/3 justify-center items-center flex  space-x-8 '>

//         <div className='relative flex'>
//           <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-105 duration-[600ms] ' onClick={previous}>
//             <BsChevronCompactLeft size={40}/>
//           </div>
//           </div>
//           <div className='relative'>
//             {slides.map((slide, index) => (
//             <div name='mainImg' key={index} className={`w-[290px] h-[190px] absolute -right-2 transition-transform duration-500 ease-in-out ${
//               current === index ? 'transform-none opacity-100 z-10' : 'transform translate-x-full opacity-0 z-0'
//             } `} >
//               <img src={`${slide.url}`} alt={`Slide ${index + 1}`} className='h-full rounded-2xl '></img>
//             </div>
//             ))}
//           </div>
          

//           <div name='mainImg' className='w-[510px] h-[410px] bg-gray-300 rounded-2xl drop-shadow-2xl ring ring-offset-1 ring-gray-300 -translate-y-3 hover:scale-105 duration-500 '>
//             <img src={`${slides[current].url}`} alt='' className='h-full rounded-2xl '></img>
//           </div>

//           <div name='mainImg' className='w-[290px] h-[190px] bg-gray-300 rounded-2xl drop-shadow-2xl opacity-75  ring ring-offset-1 ring-gray-300 translate-y-7 '>
//             <img src={`${slides[current===slides.length-1?0:current+1].url}`} alt='' className='h-full rounded-2xl '></img>
//           </div>

//           <div className="relative"><div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-105 duration-[600ms] ' onClick={next}>
//             <BsChevronCompactRight size={40}/>
//           </div></div>

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
