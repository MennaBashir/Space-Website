import moon from "../../images/destination/image-moon.png";
function Moon() {
    return (
            <div className="planet">
                <div className="imge">
                    <img src={moon} alt="not found" />
                </div>
                <div className="info">
                        <h1>MOON</h1>
                        <p>relaxing trip away to help regain perspective and come back refreshed. While you’re there,
                            take
                            in
                        some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        <div className="num">
                            <p><span>AVG. DISTANCE</span>384,400 KM</p>

                            <p><span>EST. TRAVEL TIME</span>3 DAYS </p>
                      
                    </div>
                </div>
            </div>
    )
}
export default Moon;