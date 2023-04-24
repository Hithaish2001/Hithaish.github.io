import React, {useState} from "react"
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {GrMail, GrTwitter} from 'react-icons/gr';
import './navbar.css'
import { Link } from 'react-router-dom';


const Navbar=()=>{

    const [nav, setNav]=useState(false)
    const handleclick=()=>setNav(!nav);

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    };


    const [mode, setmode] = useState('Light Mode')

      const handleMode=()=>{
        if (mode==='Light Mode') {
          setmode('Dark Mode')
        } else {
          setmode('Light Mode')
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
       <main className="w-screen h-24">
            <div className="nav fixed z-50  backdrop-blur-2xl  flex text-black dark:text-white justify-between drop-shadow-2xl bg-white dark:bg-black">
                    <div className="w-screen flex justify-between items-center h-24">
                        <div className="logo flex">
                            <h1 className="  text-2xl font-semibold px-16">Portfolio.</h1>
                        </div>
                    <div className=" hidden md:flex font-medium pt-6 px-5">
                        <li className="list-none px-5"><Link to="/"   onClick={() => scrollToSection('home')}className="links">HOME</Link></li>
                        <li className="list-none px-5"><Link to="/about"  onClick={() => scrollToSection('about')}className="links">ABOUT</Link></li>
                        <li className="list-none px-5"><Link to="/projects"   onClick={() => scrollToSection('projects')}className="links">PROJECTS</Link></li>
                        <li className="list-none px-5"><Link to="/contact"  onClick={() => scrollToSection('contact')}className="links">CONTACT  ME</Link></li>
                        <li className="list-none px-5"><button onClick={handleMode}>{mode}</button></li>
                    </div>
                </div>
                


                {/* mobile navbar */}
                <div onClick={handleclick} className="md:hidden z-10 text-zinc-500">
                        {!nav ? <FaBars/> : <FaTimes/>}
                </div>

                <ul className={!nav ? "hidden" : "absolute text-zinc-500 top-0 left-0 w-full h-screen bg-neutral-900 flex flex-col justify-center items-center"}>
                    <li className="list-none px-5"><Link to="/"   onClick={() => scrollToSection('home')}className="links">HOME</Link></li>
                    <li className="list-none px-5"><Link to="/about"  onClick={() => scrollToSection('about')}className="links">ABOUT</Link></li>
                    <li className="list-none px-5"><Link to="/projects"   onClick={() => scrollToSection('projects')}className="links">PROJECTS</Link></li>
                    <li className="list-none px-5"><Link to="/contact"  onClick={() => scrollToSection('contact')}className="links">CONTACT  ME</Link></li>
                    <li className="list-none px-5"><button onClick={handleMode}>TOGGLE</button></li>
                </ul>
            </div>


            {/* social accout reach-outs */}
            <div className="social hidden lg:flex fixed flex-col left-0 top-[350px]">
            <ul>
                <li className="bg-neutral-900 w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-2xl shadow-gray-400 dark:shadow-gray-800  duration-700">
                    <a className="flex w-36 text-white justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hithaish-n-shetty-698a45227">LinkedIn <BsLinkedin size={35}/></a>
                </li>
                <li className="bg-neutral-900 w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-2xl shadow-gray-400 dark:shadow-gray-800  duration-700">
                    <a className="flex w-36 text-white justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="https://github.com/Hithaish2001">Github <FaGithub size={35}/></a>
                </li>
                <li className="bg-neutral-900 w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-2xl shadow-gray-400 dark:shadow-gray-800  duration-700">
                    <a className="flex w-36 text-white justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="mailto:shetty9606@gmail.com">Email <GrMail size={35}/></a>
                </li>
                <li className="bg-neutral-900 w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[0px] shadow-2xl shadow-gray-400 dark:shadow-gray-800  duration-700">
                    <a className="flex w-36 text-white justify-between items-center text-xl pl-5 font-medium" target="_blank" rel="noreferrer" href="https://twitter.com/Hithaish01">Twitter <GrTwitter size={35}/></a>
                </li>
            </ul>
            </div>
       </main>
    )
}

export default Navbar