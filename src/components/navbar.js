
const Navbar=()=>{
    return(
        <div className="nav bg-black h-20">
           <ul className="flex-col md:flex-row">
           <li className="list-none text-white"><a href="#" id="home">HOME</a></li>
            <li className="list-none text-white"><a href="#" id="about">ABOUT</a></li>
            <li className="list-none text-white"><a href="#" id="projects">PROJECTS</a></li>
            <li className="list-none text-white"><a href="#" id="contact">CONTACT ME</a></li>
           </ul>
        </div>
    )
}

export default Navbar