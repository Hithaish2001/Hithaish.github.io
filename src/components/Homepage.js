import logo from "../assets/programmer.gif";
const Home=()=>{
    return(
        <main className="flex w-screen h-screen">
            <div className="home flex h-fit w-fit" id="home">
                <div className="intro mt-80 ml-60">
                    <h1 className="text-2xl font-semibold">Hello, My name is</h1>
                    <h1 className="text-7xl font-bold">Hithaish</h1>
                </div>
            </div>
            
            <div className="image flex ml-96 mt-52 mr-20 static bg-zinc-900  w-1/2 h-4/6">
                <img className="flex" src={logo} alt=""/>
            </div>
        </main>
      
    );
}

export default Home