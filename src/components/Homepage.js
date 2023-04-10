import logo from "../assets/programmer.gif";
const Home=()=>{
    return(
        <main>
            <div className="home flex w-screen h-full" id="home">
                <div className="intro mt-60 ml-60">
                    <h1 className="text-2xl font-semibold">Hello, My name is</h1>
                    <h1 className="text-7xl font-bold">Hithaish</h1>
                </div>
                <div className="image flex ml-96 mt-52 mr-20">
                    <img src={logo} alt="" style={{width: "700px"}}/>
                </div>
            </div>
        </main>
      
    );
}

export default Home