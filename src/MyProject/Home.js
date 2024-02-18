import { NavLink } from "react-router-dom";
import destBack from "../images/destination/background-destination-desktop.jpg";

function Home() {
    return (
        <main>
            <section>
                <p>SO, YOU WANT TO TRAVEL TO</p>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                    hover
                    kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
                experience!</p>
            </section>
            <aside>
                <NavLink to={'dest'} onClick={() => document.querySelector(".container").style.backgroundImage=`url(${destBack})`}>
                    <div></div>
                </NavLink>
            </aside>
        </main>
    )
}
export default Home;