import Navbar from "./components/navbar";
import Home from "./components/Homepage";
import About from "./components/about";
function App() {
  return (
    <div className="app w-screen  ">
      <Navbar/>
      <Home/>
      <About/> 
    </div>
  );
}

export default App;
