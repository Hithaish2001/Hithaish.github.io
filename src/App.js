import Navbar from "./components/navbar";
import Home from "./components/Homepage";
import About from "./components/about";
import Project from "./components/projects";
// import Carousel from "./components/sample";
function App() {
  return (
    <div className="app w-screen  ">
      <Navbar/>
      <Home/>
      <About/> 
      <Project/>
      {/* <Carousel autoSlide='true'/> */}
    </div>
  );
}

export default App;
