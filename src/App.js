import Navbar from "./components/navbar";
import Home from "./components/Homepage";
import About from "./components/about";
import Project from "./components/projects";
function App() {
  return (
    <div className="app w-screen  ">
      <Navbar/>
      <Home/>
      <About/> 
      <Project/> 
    </div>
  );
}

export default App;
