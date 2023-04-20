
import bookstore from '../assets/bookstore.png'
import news from '../assets/newszone-min.png'
import textutil from '../assets/textanalyzer.png'
import tictactoe from '../assets/tictactoe.png'
import Wcounter from '../assets/wordcounter.png'
import Carousel  from './sample'

const Project=()=>{


    const images=[news, textutil,bookstore,tictactoe,Wcounter
      // {url: news},
      // {url: textutil},
      // {url: bookstore},
      // {url: tictactoe},
      // {url: Wcounter},
    ];

  // const [current,setCurrent]=useState(0)


  // const previous=()=>{
  //   if (current===0) {
  //     setCurrent(slides.length-1)
  //   }else{
  //     setCurrent(current-1)
  //   }
  // }

  // const next=()=>{
  //   if (current===slides.length-1) {
  //     setCurrent(0)
  //   }else{
  //     setCurrent(current+1)
  //   }
  // }

  // const show=(slideIndex)=>{
  //   setCurrent(slideIndex)
  // }

  return (
    
    <div name="main" className='w-screen h-screen justify-center items-center flex flex-col'>
        <p className='text-5xl font-semibold text-center font-mono py-7'>PROJECTS</p>


         <div className=' w-full h-full relative justify-center items-center flex '>



          <div className='carsoul carsoul-center w-[850px] h-[490px] bottom-16 absolute bg-gray-300 rounded-2xl drop-shadow-2xl ring ring-offset-1 ring-gray-400'>
            <Carousel autoSlide='true'>
              {images.map((s)=>(<img key={s} src={s} alt="" className='h-[490px] rounded-2xl'/> ))}
            </Carousel>
          </div>

           
         </div> 
          
    </div>
  )
}

export default Project






{/* right button */}
           {/* <div className="relative">
            <div className='absolute top-[50%] translate-x-[435px] translate-y-[-50%]  text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-110 duration-[600ms] ' onClick={next}>
              <BsChevronCompactRight size={40}/>
            </div>
          </div> */}



           {/* left button */}
           {/* <div className='relative '>
            <div className='absolute top-[50%] -translate-x-[435px] translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/75 hover:scale-110 duration-[600ms] ' onClick={previous}>
               <BsChevronCompactLeft size={40}/>
             </div>
           </div>
               */}
            

            {/* dots below image slider */}
         {/* <div className='flex space-x-3 pt-16'>
           {slides.map((slide,slideIndex)=>(
             <div key={slideIndex} onClick={()=>show(slideIndex)} className={`flex text-gray-600 cursor-pointer  hover:text-black `}>
               <GoPrimitiveDot size={20}/>
             </div>
           ))}
         </div> */}
        



          // in case the above code dosen't work use this for the main image slider( BACKUP CODE )  

          // <div className="absolute flex justify-center items-center ">
          //   <div name='mainImg' className='w-[790px] h-[490px]  bg-gray-300 rounded-2xl drop-shadow-2xl ring ring-offset-1 ring-gray-300 -translate-y-3 hover:scale-105 duration-500 '>
          //     <img src={`${slides[current].url}`} alt='' className='h-full rounded-2xl '></img>
          //   </div>
          // </div>   
