import { useState, useEffect } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'

 const Carousel=({children: slides,autoSlide = false,autoSlideInterval = 3000,})=> {
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
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }} >
        {slides}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-1">
        <button onClick={prev} className="p-1  rounded-full shadow bg-black/80 text-white hover:bg-black  hover:drop-shadow-lg hover:scale-110 duration-500" >
          <BsChevronCompactLeft size={60} />
        </button>

        <button onClick={next}  className="p-1 rounded-full shadow bg-black/80 text-white hover:bg-black  hover:drop-shadow-lg hover:scale-110 duration-500">
        <BsChevronCompactRight size={60} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`transition-all w-3 h-3 bg-black rounded-full hover:scale-110  ${curr === i ? "p-2" : "bg-opacity-50"}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel