import Navbar from "./components/navbar";
import Home from "./components/Homepage";
import About from "./components/about";
import Project from "./components/projects";
import Contact from "./components/contact";
function App() {
  return (
    <div className="app w-screen  dark:bg-gradient-to-r from-black to-gray-800 bg-white">
      <Navbar/>
      <Home/>
      <About/> 
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
