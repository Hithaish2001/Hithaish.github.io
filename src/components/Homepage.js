import "./home.css";
import { FaGithub} from 'react-icons/fa';
import {BsLinkedin, BsInstagram} from 'react-icons/bs';
import { GrTwitter} from 'react-icons/gr';
import { FiExternalLink } from 'react-icons/fi';
import pic from '../assets/rounded image.jpg'
import devimg from '../assets/devimage.png'

const Home=()=>{

    return(
        <div id='home' className="w-screen h-fit md:h-screen bg-white dark:bg-black-gray justify-center items-center flex select-none">
            <div className="home flex md:flex-none flex-col  w-full h-full justify-center items-center py-14 md:py-0">
                <div className="intro w-full h-full dark:text-white text-black flex justify-center md:justify-end  items-center md:mr-16">
                    <div className="md:absolute md:left-52  md:z-10">
                        <h1 className="hidden md:block text-2xl font-semibold">Hello, I'm</h1>
                        <h1 className="text-5xl md:text-9xl font-bold pt-2 bg-black-top2 bg-clip-text text-transparent dark:bg-black-top dark:bg-clip-text dark:text-transparent font-serif"><span className="md:hidden text-gray-400 font-medium">Hi, I'm</span> Hithaish</h1>
                        <h1 className="text-2xl md:text-3xl font-bold"><span className="bg-gradient-to-r from-[#de6262] to-[#ffb88c] bg-clip-text text-transparent">Frontend</span> Developer</h1>
                        <div className="translate-y-4 md:translate-y-7 md:w-32 w-28 h-10 md:h-12">
                            <a href="https://drive.google.com/file/d/1DsCe3WIEg7MBwY61h8tEpRcbwt6qzCfi/view?usp=share_link" target="_blank" rel="noreferrer" className="flex border-2 w-full justify-center items-center space-x-3 dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white hover:bg-black hover:text-white text-center h-full text-lg sm:text-xl font-medium rounded-md transition-all duration-700 ease-in-out" type="submit"><span >Resume</span> <FiExternalLink size={22}/></a>
                        </div>
                    </div>
                    <div className="hidden md:block w-[50%]  z-0 opacity-5 pb-20 ">
                        <img src={devimg} alt="developer png img" />
                    </div>
                </div>

                
              

                

                <div className="md:hidden h-fit w-full space-y-12 justify-center items-center flex flex-col pt-20">
                    <div className="flex">
                        <div className="relative rounded-full w-[215px] h-[215px] blur-xl bg-black dark:bg-white animate-pulse"></div>
                        <img src={pic} alt="" className='absolute object-cover rounded-full w-56 h-56 z-20 -translate-y-2' />
                    </div>
                    <div className="flex space-x-9">
                        <li className="list-none"><a href="https://www.linkedin.com/in/hithaish-n-shetty-698a45227" target="_blank" rel="noreferrer" className="dark:text-white text-black"><BsLinkedin size={35}/></a></li>
                        <li className="list-none"><a href="https://github.com/Hithaish2001" target="_blank" rel="noreferrer" className="dark:text-white text-black"><FaGithub size={35}/></a></li>
                        <li className="list-none"><a href="https://www.instagram.com/the_lazy_.sage/" target="_blank" rel="noreferrer" className="dark:text-white text-black"><BsInstagram size={35}/></a></li>
                        <li className="list-none"><a href="https://twitter.com/Hithaish01" target="_blank" rel="noreferrer" className="dark:text-white text-black"><GrTwitter size={35}/></a></li>
                    </div>
                </div>
            </div>
            
        </div>
      
    );
}

export default Home