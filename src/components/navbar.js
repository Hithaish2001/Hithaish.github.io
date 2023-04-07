import React, {useState} from "react"
import {FaBars, FaTimes} from 'react-icons/fa';
const Navbar=()=>{
    const [nav, setNav]=useState(false)
    const handleclick=()=>setNav(!nav);
    return(
        <nav className="nav fixed bg-black w-full h-24 flex text-white justify-between ">
            <div className="logo flex">
                <h1 className=" pt-8 pl-10 text-2xl">Portfolio.</h1>
            </div>
           <div className="flex  pr-8 pt-12 hidden md:flex">
            <li className="list-none px-5"><a href="#home" id="home">HOME</a></li>
            <li className="list-none px-5"><a href="#about" id="about">ABOUT</a></li>
            <li className="list-none px-5"><a href="#projects" id="projects">PROJECTS</a></li>
            <li className="list-none px-5"><a href="#contact" id="contact">CONTACT  ME</a></li>
            <li className="list-none px-5">TOGGLE</li>
           </div>


           {/* mobile navbar */}
           <div onClick={handleclick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/>}
           </div>

           <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"}>
           <li className="list-none py-4"><a href="#home" id="home">HOME</a></li>
            <li className="list-none py-4"><a href="#about" id="about">ABOUT</a></li>
            <li className="list-none py-4"><a href="#projects" id="projects">PROJECTS</a></li>
            <li className="list-none py-4"><a href="#contact" id="contact">CONTACT  ME</a></li>
            <li className="list-none py-4">TOGGLE</li>
           </ul>
        </nav>
    )
}

export default Navbar