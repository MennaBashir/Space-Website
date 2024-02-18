import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Person1 from "./Person1";
import Person2 from "./Person2";
import Person3 from "./Person3";
import Person4 from "./Person4";

function Crew() {
    return (
        <div className="people">
            <p><span>02</span> MEET YOUR CREW</p>
            <ul>
                <li><NavLink to={''}></NavLink></li>
                <li><NavLink to={'person2'}></NavLink></li>
                <li> <NavLink to={'person3'}></NavLink></li>
                <li><NavLink to={'person4'}></NavLink></li>
            </ul>
            <Routes>
                <Route path="" element={<Person1 />} />
                <Route path="person2" element={<Person2 />} />
                <Route path="person3" element={<Person3 />} />
                <Route path="person4" element={<Person4 />} />
            </Routes>
        </div>
    )
}
export default Crew;