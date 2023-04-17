import React,{useState} from 'react'
import pic from '../assets/portfolio.png'
import '../components/about.css'
import css from "../assets/css.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";


const About=()=> {

  
  const [selected, setSelected] = useState(null);

  const handleClick = (e) => {
    if (selected === e) {
      setSelected(null);
    } else {
      setSelected(e);
    }
  };

  return (

    <div name="about" className='w-screen h-screen flex justify-center items-center flex-col bg-white'>
        <p className='text-5xl font-semibold text-center pb-16'>About Me</p>
        <div name="" className='flex w-full justify-center items-start pl-32'>
            <div className="pic  w-72 h-96 flex flex-none  hover:-translate-y-5 hover:translate-x-2 duration-300  left-[17rem] ">
              <img src={pic} alt="" className='rounded-3xl shadow-2xl shadow-zinc-600' />
            </div>
            <div className="selfD w-3/5  text-lg font-normal items-start pl-20">
                <p>Hello guys, I'm Hithaish. I am interested in developing web applications and exploring new technologies. Currently I'm working on reactjs projects for learning</p>
                <ul className='subnav pt-5 flex space-x-8 font-medium cursor-pointer uppercase '>
                  <li className={`navelements active-navelements ${selected === 'skills' ? 'bg-gray-300' : ''}`} onClick={() => handleClick('skills')}>Skills</li>
                  <li className={`${selected === 'skills' ? 'bg-gray-300' : ''}`}  onClick={() => handleClick('education')}>Education</li>
                  <li className={`${selected === 'skills' ? 'bg-gray-300' : ''}`}  onClick={() => handleClick('experience')}>Experirence</li>
                </ul>
                <div className='mainContainer'>
                    
                    {selected === 'skills' && (
                      <div name="skills"  className={`content active-content flex h-72  relative top-14 -left-5`}>
                        <ol className='flex justify-center items-center pb-8 font-medium'>
                          <li><img src={html} alt='HTMl' className='w-44 px-3 animate-animation-bounce drop-shadow-xl'/><p className='text-black pt-3 text-center font-sans'>HTML</p></li>
                          <li><img src={css} alt='css' className='w-44 px-3 animate-animation-bounce drop-shadow-xl'/><p className='text-black pt-3 text-center font-sans'>CSS</p></li>
                          <li><img src={java} alt='java' className='w-44 px-3 animate-animation-bounce drop-shadow-xl'/><p className='text-black pt-3 text-center font-sans'>JAVA</p></li>
                          <li><img src={react} alt='react' className='w-44 px-3 animate-animation-bounce drop-shadow-xl'/><p className='text-black pt-3 text-center font-sans'>REACTJS</p></li>
                          <li><img src={tailwind} alt='tailwind' className='w-44 px-3 animate-animation-bounce drop-shadow-xl'/><p className='text-black pt-3 text-center font-sans'>TAILWIND CSS</p></li>
                        </ol>
                      </div>
                     )}

                    
                    {selected=== 'education' && (
                      <div name='education' className={``}>
                        <ol className='list-disc flex flex-col space-y-5 font-[450]'>
                          <li><span className='font-medium'>Graduating 2023</span><span className='flex'>B.E IN COMPUTER SCIENCE AND ENGINEERING<span className='pl-14'>CGPA: 8.03</span></span></li>
                          <li><span className='font-medium'>Graduated 2019</span><span className='flex'>PUC<span className='pl-[400px]'>Percentage: 89.5</span></span></li>
                          <li><span className='font-medium'>Graduated 2017</span><span className='flex'>SSLC<span className='pl-[400px]'>Percentage: 84.96</span></span></li>
                        </ol>
                      </div>
                    )}


                    {selected === 'experience' && (
                      <div name='experience' className={``}>
                        <ol className='list-none font-[470]'>
                        <p className='font-semibold'> Full Stack Developer Intern <span className='pl-52'>Aug 2022-Sep 2022</span></p>
                        <li className='list-disc'>I have done one month internship at Thaniya Technologies IT Solutions LLP, Mangaluru</li>
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