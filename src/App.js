import Home from "./Home"
import NavBar from "./NavBar";
import Projects from "./Projects";
import {Routes, Route } from "react-router-dom"

function App() {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/personal-website" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;
