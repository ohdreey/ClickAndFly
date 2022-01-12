import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return <div>
        <header className ="boiteLogo">
        
        <div className="Headerlogo"> 
            <Link to = "/">
            <div><h1 className="titreLogo">CLICK & FLY</h1></div>
            </Link>
            
        </div>

        </header>
    
    
    
    </div>

}
export default Header 
