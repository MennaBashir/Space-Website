import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Techno1 from "./Techno1";
import Techno2 from "./Techno2";
import Techno3 from "./Techno3";

function Technology() {
    return (
        <div className="techno">
            <p><span>03</span> SPACE LAUNCH 101</p>
            <ul>
                <li><NavLink to={''}>1</NavLink></li>
                <li><NavLink to={'techno2'}>2</NavLink></li>
                <li> <NavLink to={'techno3'}>3</NavLink></li>
            </ul>
            <Routes>
                <Route path="" element={<Techno1 />} />
                <Route path="techno2" element={<Techno2 />} />
                <Route path="techno3" element={<Techno3 />} />
            </Routes>
        </div>
    )
}
export default Technology;