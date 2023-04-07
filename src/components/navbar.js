
const Navbar=()=>{
    return(
        <nav className="nav bg-black h-24 flex justify-between ">
            <div className="logo flex">
                <h1 className="text-white  pt-8 pl-10 text-2xl">Portfolio.</h1>
            </div>
           <div className="flex  pr-8 pt-12">
            <li className="list-none text-white px-5"><a href="#home" id="home">HOME</a></li>
            <li className="list-none text-white px-5"><a href="#" id="about">ABOUT</a></li>
            <li className="list-none text-white px-5"><a href="#" id="projects">PROJECTS</a></li>
            <li className="list-none text-white px-5"><a href="#" id="contact">CONTACT  ME</a></li>
            <li className="list-none text-white px-5">TOGGLE</li>
           </div>
        </nav>
    )
}

export default Navbar