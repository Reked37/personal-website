import Home from "./Home"
import NavBar from "./NavBar";
import Projects from "./Projects";
import Resume from "./Resume";
import Technologies from "./Technologies";
import {Routes, Route } from "react-router-dom"

function App() {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/technologies" element={<Technologies />}/>
      </Routes>
    </div>
  );
}

export default App;
