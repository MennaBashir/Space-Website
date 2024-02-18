import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Moon from "./Moon";
import Mars from "./Mars";
import Europa from "./Europa";
import Titan from "./Titan";

function MinNavbar() {
    return (
        <div className="contain">
            <p><span>01</span> PICK YOUR DESTINATION</p>
            <Routes>
                <Route path="" element={<Moon/>} />
                <Route path="mars" element={<Mars />} />
                <Route path="europa" element={<Europa />} />
                <Route path="titan" element={<Titan />} />
            </Routes>
            <div className="Min-ul">
                <ul>
                    <li><NavLink to={''}>MOON</NavLink></li>
                    <li><NavLink to={'mars'}>MARS</NavLink></li>
                    <li> <NavLink to={'europa'}>EUROPA</NavLink></li>
                    <li><NavLink to={'titan'}>TITAN</NavLink></li>
                </ul>
            </div>

        </div>
    )
}
export default MinNavbar;