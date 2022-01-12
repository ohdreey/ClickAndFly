import BoutonsTitrePays from '../components/BoutonsTitrePays'
import BoutonsPays from '../components/BoutonsPays'
import Globe from '../components/Globes'
import './Home.css'
import Articlebox from '../components/Articlebox'
import Header from "../components/Header"

const Home = () => {
  return (
    <div>
       
        <Header />
        {/* <div className="bouton-box"> */}
          <BoutonsPays />
          <Globe />
        {/* </div> */}
          <BoutonsTitrePays />
          <Articlebox/>
         
        
    </div>
  )}
export default Home
