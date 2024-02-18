import person2 from "../../images/crew/image-douglas-hurley.png"
function Person2() {
    return (
        <>
            <div className="person">
                <div className="desc">
                    <p>COMMANDER</p>
                    <h1>DOUGLAS HURLEY</h1>
                    <p>
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.                    </p>
                </div>
                <div className="imge">
                    <img src={person2} alt="not found" />
                </div>
            </div>
        </>
    )
}
export default Person2;