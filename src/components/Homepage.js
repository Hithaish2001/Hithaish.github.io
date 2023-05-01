import "./home.css";
import { FaGithub} from 'react-icons/fa';
import {BsLinkedin, BsInstagram} from 'react-icons/bs';
import { GrTwitter} from 'react-icons/gr';
import { FiExternalLink } from 'react-icons/fi';
import pic from '../assets/rounded image.jpg'

const Home=()=>{

    return(
        <div id='home' className="bg-white dark:bg-black-gray flex w-full mx-auto h-screen ">
            <div className="home flex sm:flex-row flex-col w-full h-full justify-center items-center ">
                <div className="intro dark:text-white text-black">
                    <h1 className="hidden  sm:block text-2xl font-semibold">Hi, My name is</h1>
                    <h1 className="text-5xl sm:text-9xl font-bold pt-2 bg-black-top2 bg-clip-text text-transparent dark:bg-black-top dark:bg-clip-text dark:text-transparent"><span className="sm:hidden text-gray-400 font-medium">Hi, I'm</span> Hithaish</h1>
                    <h1 className="text-2xl sm:text-3xl font-bold"><span className="bg-gradient-to-r from-[#de6262] to-[#ffb88c] bg-clip-text text-transparent">Frontend</span> Developer</h1>
                    <div className="translate-y-4 sm:translate-y-7 sm:w-32 w-28 h-10 sm:h-12">
                        <a href="https://drive.google.com/file/d/1OZdmdhMPxMJvfTT4iRVfo21bAyoipKAK/view?usp=share_link" target="_blank" rel="noreferrer" className="flex border-2 w-full justify-center items-center space-x-3 dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white hover:bg-black hover:text-white text-center h-full text-lg sm:text-xl font-medium rounded-md transition-all duration-700 ease-in-out" type="submit"><span >Resume</span> <FiExternalLink size={22}/></a>
                    </div>
                </div>

                <div className="sm:hidden space-y-8 translate-y-3 justify-center items-center flex flex-col">
                    <div className="flex pt-10">
                        <div className="relative rounded-full w-[255px] h-[255px] blur-lg bg-slate-800 animate-pulse"></div>
                        <img src={pic} alt="" className='absolute object-cover rounded-full w-56 h-56 z-20 translate-x-3 translate-y-3' />
                    </div>
                    <div className="flex space-x-6">
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