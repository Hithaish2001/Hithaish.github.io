import React, {useState} from "react"
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa';
import {BsLinkedin, BsInstagram} from 'react-icons/bs';
import { GrTwitter} from 'react-icons/gr';
import './navbar.css'
import { Link } from 'react-router-dom';
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import  uparrow from "../assets/up-arrow.png";


const Navbar=()=>{

    const [nav, setNav]=useState(false)
    const handleclick=()=>setNav(!nav);

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSectionMobile = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
      setNav(!nav);
    };

    const [mode, setmode] = useState(sun)

      const handleMode=()=>{
        if (mode===sun) {
          setmode(moon)
        } else {
          setmode(sun)
        }
        let htmltag = document.getElementById('htmlTag');
        if (htmltag.classList.contains('dark')){
          htmltag.classList.remove('dark')
        }
        else{
          htmltag.classList.add('dark')

        }
      }

    return(
       <main className="w-screen  text-black dark:text-white z-50 select-none" id="navbar">
            <div className="nav z-50 flex justify-between items-center dark:bg-black-gray bg-white">


                <div className="hidden md:flex w-full h-24 justify-between items-center">
                    <div className="logo flex">
                        <h1 className="text-2xl font-semibold px-16">Hithaish.</h1>
                    </div>
                    <div className="flex font-medium justify-center items-center px-5">
                        <li className="list-none px-5"><Link to="#"   onClick={() => scrollToSection('home')} className="links">HOME</Link></li>
                        <li className="list-none px-5"><Link to="/about"  onClick={() => scrollToSection('about')}  className="links">ABOUT</Link></li>
                        <li className="list-none px-5"><Link to="/projects"   onClick={() => scrollToSection('projects')} className="links">PROJECTS</Link></li>
                        <li className="list-none px-5"><Link to="/contact"  onClick={() => scrollToSection('contact')}  className="links">CONTACT  ME</Link></li>
                        <li className="list-none px-5 pt-5" id="togglemode"><img src={mode} alt="" onClick={handleMode} className="bg-gradient-to-br from-slate-300 to-white  rounded-full text-white p-2 w-12 h-12 cursor-pointer -translate-y-3 hover:rotate-45 transition-all duration-700"/></li>
                    </div>
                </div>
                


                {/* mobile navbar */}

                <div className="md:hidden w-full h-16 z-50" id="navbar">
                  <div className="h-full flex items-center justify-between w-full sticky z-10 dark:text-white text-zinc-700 " id="navbar">
                      <div className="px-5"><img src={mode} alt="" onClick={handleMode} className="bg-gradient-to-br from-slate-300 to-white  rounded-full text-white p-2 w-9 h-9 cursor-pointer hover:rotate-45 transition-all duration-700"/></div>
                      <div className="px-5" onClick={handleclick}>{!nav ? <FaBars size={25}/> : <FaTimes size={25}/>}</div>
                  </div>

                  <ul className={!nav ? "hidden" : "absolute dark:text-white font-medium text-lg text-zinc-700 top-0 right-0 w-[50%] h-screen opacity-80 bg-white dark:bg-gray-700 flex flex-col justify-center items-center space-y-5  "}>
                      <li className="list-none "><Link to="#"   onClick={() => scrollToSectionMobile('home')} className="hover:text-black hover:font-medium dark:hover:text-white">HOME</Link></li>
                      <li className="list-none "><Link to="/about"  onClick={() => scrollToSectionMobile('about')} className="hover:text-black hover:font-medium dark:hover:text-white">ABOUT</Link></li>
                      <li className="list-none "><Link to="/projects"   onClick={() => scrollToSectionMobile('projects')} className="hover:text-black hover:font-medium dark:hover:text-white">PROJECTS</Link></li>
                      <li className="list-none "><Link to="/contact"  onClick={() => scrollToSectionMobile('contact')} className="hover:text-black hover:font-medium dark:hover:text-white">CONTACT  ME</Link></li>
                  </ul>
                </div>
                
            </div>


            {/* social accout reach-outs */}
            <div className="social hidden lg:flex fixed flex-col left-0 top-[350px] z-50">
            <ul>
                <li className="bg-black w-40 h-14 flex justify-between items-center ml-[-98px] hover:ml-[0px] duration-700">
                    <a className="flex w-36 text-white  justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hithaish-n-shetty-698a45227"><span>LinkedIn</span><BsLinkedin size={40}/></a>
                </li>
                <li className="bg-black w-40 h-14 flex justify-between items-center ml-[-98px] hover:ml-[0px] duration-700">
                    <a className="flex w-36 text-white  justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="https://github.com/Hithaish2001"><span>Github</span> <FaGithub size={40}/></a>
                </li>
                <li className="bg-black w-44 h-14 flex justify-between items-center ml-[-114px] hover:ml-[0px] duration-700">
                    <a className="flex w-40 text-white  justify-between items-center text-xl pl-5 font-medium " target="_blank" rel="noreferrer" href="https://www.instagram.com/the_lazy_.sage/"><span>Instagram</span> <BsInstagram size={40}/></a>
                </li>
                <li className="bg-black w-40 h-14 flex justify-between items-center ml-[-98px] hover:ml-[0px] duration-700">
                    <a className="flex w-36 text-white  justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="https://twitter.com/Hithaish01"><span>Twitter</span> <GrTwitter size={40}/></a>
                </li>
            </ul>
            </div>

            <div className="fixed bottom-2 right-2 md:right-6 md:bottom-6 w-10 md:w-12 h-10 md:h-12 z-50  dark:border-white border bg-white border-black justify-center items-center flex  rounded-lg cursor-pointer" onClick={() => scrollToSection('home')}>
                <div className="w-6 h-6 translate-y-1 "><img src={uparrow} alt=""  className="animate-animation1-bounce bottom-0"/></div>
            </div>

       </main>
    )
}

export default Navbar