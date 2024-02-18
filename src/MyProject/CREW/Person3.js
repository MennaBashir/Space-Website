import person3 from "../../images/crew/image-mark-shuttleworth.png"
function Person3() {
    return (
        <>
            <div className="person ">
                <div className="desc">
                    <p>MISSION SPECIALIST</p>
                    <h1>MARK SHUTTLEWORTH</h1>
                    <p>
                        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.                    </p>
                </div>
                <div className="imge">
                    <img src={person3} alt="not found" />
                </div>
            </div>
        </>
    )
}
export default Person3;