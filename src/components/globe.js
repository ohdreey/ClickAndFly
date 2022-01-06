import "./components/globe.css"
import Earth from "./videos/earth.mp4"

function Globe () {
    <div className="GlobeStyle">
    <video autoplay loop muted>
    <source src={Earth} type="video/mp4" />
    </video>
    </div>
}

export default Globe