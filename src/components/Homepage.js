import logo from "../assets/programmer.gif";
const Home=()=>{
    return(
        <div className=" flex w-screen h-screen">
            <div className="home flex w-full h-full justify-center items-center" id="home">
                <div className="intro ">
                    <h1 className="text-2xl font-semibold">Hello, My name is</h1>
                    <h1 className="text-7xl font-bold">Hithaish</h1>
                </div>
            </div>
            
            <div className="image flex w-full h-full justify-center items-center static ">
                <img className="flex w-2/3" src={logo} alt=""/>
            </div>


        </div>
      
    );
}

export default Home