import person1 from "../../images/crew/image-anousheh-ansari.png"
function Person1() {
    return (
        <>
            <div className="person ">
                <div className="desc">
                    <p>FLIGHT ENGINEER</p>
                    <h1>ANOUSHEH ANSARI</h1>
                    <p>
                        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
                    </p>
                </div>
                <div className="imge">
                    <img src={person1} alt="not found" />
                </div>
            </div>
        </>
    )
}
export default Person1;