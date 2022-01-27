import { Link } from "react-router-dom"
import plane from "../assets/images/plane.png"
import "./Header.css"

const Header = () => {
    return <div>
        <header className ="boiteLogo">
        
        <div className="Headerlogo"> 
            <Link to = "/">
            {/* <div><img className="logo" src={plane} alt="logo"/></div> */}
            </Link>
            <div><h1 className="titreLogo">CLICK & FLY</h1> </div>
            

        </div>

        </header>
    
    
    
    </div>

}
export default Header 
