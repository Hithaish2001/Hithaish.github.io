import React, { useState } from "react";
import pic from "../assets/portfolio.jpg";
import "../components/about.css";
import css from "../assets/css.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const About = () => {
  const [selected, setSelected] = useState("skills");

  const handleClick = (e) => {
    if (selected === e) {
      setSelected(selected);
    } else {
      setSelected(e);
    }
  };

  return (
    <div
      id="about"
      className="w-screen h-fit lg:h-screen flex justify-center items-center flex-col md:bg-white bg-white dark:bg-black-gray md:dark:bg-black-gray font-[470] py-14 xl:py-0 select-none"
    >
      <div className="w-full text-center"><p className='md:hidden text-5xl md:text-6xl font-bold font-mono pb-14 md:text-black text-black md:dark:text-white dark:text-white'>ABOUT</p></div>
      <div className="hidden absolute md:block w-full pb-20">
        <p className="text-5xl md:text-[180px] font-bold text-center md:pb-20 pb-9 font-mono md:text-black md:dark:text-white text-black dark:text-white opacity-[0.05] z-0">
          <span className="">&lt;</span>About<span className="">/&gt;</span>
        </p>
      </div>
      <div name="" className="md:flex w-full justify-center items-start">
        <div className="hidden md:flex w-72 h-96 flex-none">
          <div className="absolute w-56 h-96 dark:border-gray-800 border-4 border-stone-200 "></div>
          <img
            src={pic}
            alt=""
            className=" z-50 -translate-y-6 -translate-x-7 hover:translate-y-0 hover:translate-x-0 duration-700 ease-in-out"
          />
        </div>

        <div className="max-w-[900px] h-full text-base md:text-xl px-9  md:pl-20">
          <p className="text-justify  md:text-black  text-black dark:text-white md:dark:text-white font-[470]">
          As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSSI excel in designing and maintaining responsive websites that offer a smooth user experience.
           My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
            I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
          </p>
          <ul className="text-base md:text-black text-black md:dark:text-gray-400 dark:text-gray-400 md:text-xl pt-5 flex space-x-8 font-medium cursor-pointer uppercase w-full select-none">
            <li
              className={`navelements select-none ${
                selected === "skills" ? "active-navelements" : ""
              }`}
              onClick={() => handleClick("skills")}
            >
              Skills
            </li>
            <li
              className={`navelements select-none ${
                selected === "education" ? "active-navelements" : ""
              }`}
              onClick={() => handleClick("education")}
            >
              Education
            </li>
            <li
              className={`navelements select-none ${
                selected === "experience" ? "active-navelements" : ""
              }`}
              onClick={() => handleClick("experience")}
            >
              Experience
            </li>
          </ul>

          <div className="mainContainer w-full h-[340px]  translate-y-7 md:translate-y-7">
            {selected === "skills" && (
              <div
                name="skills"
                className={` content active-content w-full h-full md:pt-0 `}
              >
                <p className="dark:text-white text-black font-[470] text-base md:text-xl">These are some of the technologies I'v worked with</p>
                
                <ol className="w-full h-fit grid grid-cols-3 md:grid-cols-5 gap-y-5 gap-x-2 md:gap-y-0  justify-items-center items-center font-medium translate-y-7 md:translate-y-12">
                  <li>
                    <img
                      src={html}
                      alt="HTMl"
                      className="w-24  md:w-32 animate-animation-bounce drop-shadow-xl"
                    />
                    <p className="text-black dark:text-white md:dark:text-white md:text-black pt-3 text-center font-sans">
                      HTML
                    </p>
                  </li>
                  <li>
                    <img
                      src={css}
                      alt="css"
                      className="w-24  md:w-32   animate-animation-bounce drop-shadow-xl"
                    />
                    <p className="text-black dark:text-white md:dark:text-white md:text-black pt-3 text-center font-sans">
                      CSS
                    </p>
                  </li>
                  <li>
                    <img
                      src={java}
                      alt="java"
                      className="w-24  md:w-32   animate-animation-bounce drop-shadow-xl"
                    />
                    <p className="text-black dark:text-white md:dark:text-white md:text-black pt-3 text-center font-sans">
                      JAVA
                    </p>
                  </li>
                  <li>
                    <img
                      src={react}
                      alt="react"
                      className="w-24  md:w-32   animate-animation-bounce drop-shadow-xl"
                    />
                    <p className="text-black dark:text-white md:dark:text-white md:text-black pt-3 text-center font-sans">
                      REACTJS
                    </p>
                  </li>
                  <li>
                    <img
                      src={tailwind}
                      alt="tailwind"
                      className="w-24  md:w-32   animate-animation-bounce drop-shadow-xl"
                    />
                    <p className="text-black dark:text-white md:dark:text-white md:text-black pt-3 text-center font-sans">
                      TAILWIND CSS
                    </p>
                  </li>
                </ol>
              </div>
            )}

            {selected === "education" && (
              <div
                name="education"
                className=" md:text-black md:dark:text-white text-black dark:text-white px-5 md:px-0 w-full h-full"
              >
                <ol className="list-disc flex flex-col space-y-5 font-[470]">
                  <li>
                    <span className="font-medium">Graduated 2023</span>
                    <span className="flex">
                      B.E IN COMPUTER SCIENCE AND ENGINEERING &nbsp; | &nbsp;
                      CGPA: 8.25
                    </span>
                  </li>
                  <li>
                    <span className="font-medium">Graduated 2019</span>
                    <span className="flex flex-col">
                      PUC &nbsp; | &nbsp; Percentage: 89.5
                    </span>
                  </li>
                  <li>
                    <span className="font-medium">Graduated 2017</span>
                    <span className="flex flex-col">
                      SSLC &nbsp; | &nbsp; Percentage: 84.96
                    </span>
                  </li>
                </ol>
              </div>
            )}

            {selected === "experience" && (
              <div
                name="experience"
                className=" md:text-black md:dark:text-white text-black dark:text-white pl-5 md:pl-0 w-full h-full"
              >
                <ol className="list-disc font-[470] space-y-1 text-justify">
                  <p className="font-semibold py-1">
                    {" "}
                    Full Stack Developer Intern (Aug 2022-Sep 2022)
                  </p>
                  <li className="">
                    I have done one month internship at{" "}
                    <a
                      className="font-medium underline"
                      href="https://thaniyatech.com/"
                    >
                      Thaniya Technologies IT Solutions LLP
                    </a>
                    , Mangaluru.
                  </li>
                  <li className="">
                    One of the most valuable skills I had learned are project
                    planning & management and the ability to speak with people
                    in a professional setting.
                  </li>
                  <li className="">
                    Developed a full-stack application for an online bookseller.
                    It Primarily enables the admin to manage the program by
                    keeping track of orders, book availability, managing users,
                    and other admin's actions.
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
