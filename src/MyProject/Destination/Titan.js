import titan from "./../../images/destination/image-titan.png"
function Titan() {
    return (
        <>
            <div className="planet ">
                <div className="imge">
                    <img src={titan} alt="not found" />
                </div>
                <div className="info">
                    <h1>TITAN</h1>
                    <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                    </p>
                    <div className="num">
                        <p><span>AVG. DISTANCE</span> 1.6 BIL. km</p>
                        <p><span>EST. TRAVEL TIME</span>7 YEARS</p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Titan;