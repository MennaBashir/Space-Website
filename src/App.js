import './App.css';
import Navbar from './MyProject/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./MyProject/Home";
import Crew from "./MyProject/CREW/Crew";
import MinNavbar from "./MyProject/Destination/MinNavbar";
import Technology from "./MyProject/TECHNOLOGY/Technology";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dest/*" element={<MinNavbar/>} />
        <Route path="crew/*" element={<Crew />} />
        <Route path="techno/*" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
