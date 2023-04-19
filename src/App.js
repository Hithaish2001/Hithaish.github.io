import Navbar from "./components/navbar";
import Home from "./components/Homepage";
import About from "./components/about";
import Project from "./components/projects";
// import ImageSlider from "./components/sample";
function App() {
  return (
    <div className="app w-screen  ">
      <Navbar/>
      <Home/>
      <About/> 
      <Project/>
      {/* <ImageSlider/> */}
    </div>
  );
}

export default App;
