import "./home.css";

const Home=()=>{

    return(
        <div id='home' className="bg-white dark:bg-black-gray flex w-full mx-auto h-screen ">
            <div className="home flex w-full h-full justify-center items-center ">
                <div className="intro dark:text-white text-black">
                    <h1 className="text-sm sm:text-2xl font-semibold">Hi, My name is</h1>
                    <h1 className="text-5xl sm:text-8xl font-bold pt-2 text-black dark:bg-black-top dark:bg-clip-text dark:text-transparent">Hithaish</h1>
                    <h1 className="text-xl sm:text-3xl font-bold">I'm a <span className="bg-gradient-to-r from-[#de6262] to-[#ffb88c] bg-clip-text text-transparent">Frontend</span> Developer</h1>
                </div>
            </div>
            
        </div>
      
    );
}

export default Home