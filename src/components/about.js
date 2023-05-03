import React,{useState} from 'react'
import pic from '../assets/portfolio.jpg'
import '../components/about.css'
import css from "../assets/css.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";


const About=()=> {

  
  const [selected, setSelected] = useState('skills');

  const handleClick = (e) => {
    if (selected === e) {
      setSelected(selected);
    } else {
      setSelected(e);
    }
  };

  return (

    <div id="about" className='w-full border sm:h-screen flex justify-center items-center flex-col bg-white dark:bg-black-gray font-[470] py-14 sm:py-0'>
        <div className="w-full"><p className='text-5xl sm:text-6xl font-bold text-center sm:pb-20 pb-9 font-mono text-black dark:text-white'>About Me</p></div>
        <div name="" className='sm:flex w-full justify-center items-start pl-4 sm:pl-32'>

            
            <div className="hidden md:flex w-72 h-96 flex-none">

              <div className="absolute w-56 h-96 dark:bg-gray-700 bg-stone-200 rounded-3xl"></div>
              <img src={pic} alt="" className='rounded-3xl z-20 -translate-y-6 -translate-x-7 hover:translate-y-0 hover:translate-x-0 duration-700 ease-in-out' />

            </div>

            <div className="max-w-[900px] h-full text-base sm:text-xl px-9 sm:pl-20 text-black dark:text-white">
                <p className='text-justify font-[470]'>Hello guys, welcome to my portfolio! I am a frontend Developer engineering student, interested in developing web applications and exploring new technologies. Currently I'm working on reactjs projects for learning</p>
                <ul className='text-base text-black  dark:text-gray-400 sm:text-xl pt-5 flex space-x-8 font-medium cursor-pointer uppercase w-full'>
                  <li className={`navelements  ${selected === 'skills' ? 'active-navelements' : ''}`} onClick={() => handleClick('skills')}>Skills</li>
                  <li className={`navelements  ${selected === 'education' ? 'active-navelements' : ''}`}  onClick={() => handleClick('education')}>Education</li>
                  <li className={`navelements  ${selected === 'experience' ? 'active-navelements' : ''}`}  onClick={() => handleClick('experience')}>Experirence</li>
                </ul>


                <div className='mainContainer w-full h-[310px]'>
                    
                    {selected === 'skills' && (
                      <div name="skills"  className={`content active-content flex w-full h-full sm:top-6 -left-5`}>
                        <ol className='w-full h-full grid grid-cols-5 justify-center items-center font-medium'>
                          <li><img src={html} alt='HTMl' className='w-32 sm:w-44 px-3 animate-animation-bounce drop-shadow-xl'/><p className='text-black dark:text-white pt-3 text-center font-sans'>HTML</p></li>
                          <li><img src={css} alt='css' className='w-32 sm:w-44 px-3 animate-animation-bounce drop-shadow-xl'/><p className='text-black dark:text-white pt-3 text-center font-sans'>CSS</p></li>
                          <li><img src={java} alt='java' className='w-32 sm:w-44 px-3 animate-animation-bounce drop-shadow-xl'/><p className='text-black dark:text-white pt-3 text-center font-sans'>JAVA</p></li>
                          <li><img src={react} alt='react' className='w-32 sm:w-44 px-3 animate-animation-bounce drop-shadow-xl'/><p className='text-black dark:text-white pt-3 text-center font-sans'>REACTJS</p></li>
                          <li><img src={tailwind} alt='tailwind' className='w-28 sm:w-44 px-3  animate-animation-bounce drop-shadow-xl'/><p className='text-black dark:text-white pt-3 text-center font-sans'>TAILWIND CSS</p></li>
                        </ol>
                      </div>
                     )}

                    
                    {selected=== 'education' && (
                      <div name='education' className='pt-7 pl-4 text-black dark:text-white w-full h-full'>
                        <ol className='list-disc flex flex-col space-y-5 font-[470]'>
                          <li><span className='font-medium'>Graduating 2023</span><span className='flex'>B.E IN COMPUTER SCIENCE AND ENGINEERING &nbsp; | &nbsp; CGPA: 8.03</span></li>
                          <li><span className='font-medium'>Graduated 2019</span><span className='flex flex-col'>PUC &nbsp; | &nbsp; Percentage: 89.5</span></li>
                          <li><span className='font-medium'>Graduated 2017</span><span className='flex flex-col'>SSLC &nbsp; | &nbsp; Percentage: 84.96</span></li>
                        </ol>
                      </div>
                    )}


                    {selected === 'experience' && (
                      <div name='experience' className='pt-7 pl-4 text-black dark:text-white w-full h-full '>
                        <ol className='list-none font-[470] space-y-1 text-justify'>
                        <p className='font-semibold py-1'> Full Stack Developer Intern (Aug 2022-Sep 2022)</p>
                        <li className='list-disc'>I have done one month internship at <a className='font-medium underline' href='https://thaniyatech.com/'>Thaniya Technologies IT Solutions LLP</a>, Mangaluru.</li>
                        <li className='list-disc'>One of the most valuable skills I had learned are project planning & management and the ability to speak with people in a professional setting.</li>
                        <li className='list-disc'>Developed a full-stack application for an online bookseller. It Primarily enables the admin to manage the program by keeping track of orders, book availability, managing users, and other admin's actions.</li>
                        </ol>
                      </div>
                    )}

                </div>
            </div>
        </div>
    </div>
  )
}

export default About