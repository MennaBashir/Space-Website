import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg"
import destBack from "../images/destination/background-destination-desktop.jpg";
import homeBack from "../images/home/background-home-desktop.jpg";
import crewBack from "../images/crew/background-crew-desktop.jpg";
import technoBack from "../images/technology/background-technology-desktop.jpg";
function Navbar() {
    return (
        <>
            <header>
                <div className="img"><NavLink onClick={() => document.querySelector(".container").style.backgroundImage = `url(${homeBack})`} to={'/'}><img src={logo} alt="not found" /></NavLink></div>
                <div className="UL">
                    <ul>
                        <li onClick={() => document.querySelector(".container").style.backgroundImage = `url(${homeBack})`}><NavLink to={'/'}><span>00</span> HOME</NavLink></li>
                        <li onClick={() => document.querySelector(".container").style.backgroundImage = `url(${destBack})`} > <NavLink to={'dest'}><span>01</span> DESTINATION</NavLink></li>
                        <li onClick={() => document.querySelector(".container").style.backgroundImage = `url(${crewBack})`}><NavLink to={'crew'}><span>02</span> CREW</NavLink></li>
                        <li onClick={() => document.querySelector(".container").style.backgroundImage = `url(${technoBack})`}><NavLink to={'techno'}><span>03</span> TECHNOLOGY</NavLink></li>
                    </ul>

                </div>
            </header>
        </>
    )
}
export default Navbar;