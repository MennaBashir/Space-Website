import europa from "./../../images/destination/image-mars.png"
function Europa() {
    return (
        <>
            <div className="planet ">
                <div className="imge">
                    <img src={europa} alt="not found" />
                </div>
                <div className="info">
                    <h1>EUROPA</h1>
                    <p>
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                    </p>
                    <div className="num">
                        <p><span>AVG. DISTANCE</span> 628 MIL. km</p>
                        <p><span>EST. TRAVEL TIME</span>3 YEARS</p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Europa;