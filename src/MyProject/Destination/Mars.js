import mars from "./../../images/destination/image-mars.png"
function Mars() {
    return (
        <>
            <div className="planet ">
                <div className="imge">
                    <img src={mars} alt="not found" />
                </div>
                <div className="info">
                    <h1>MARS</h1>
                    <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest
                        planetary mountain in our solar system. It’s two and a half times the size of Everest!
                    </p>
                    <div className="num">
                        <p><span>AVG. DISTANCE</span> 225 MIL. km</p>
                        <p><span>EST. TRAVEL TIME</span>9 MONTHS</p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Mars;