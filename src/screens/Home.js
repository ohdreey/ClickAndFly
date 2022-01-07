import BoutonsTitrePays from '../components/BoutonsTitrePays'
import BoutonsPays from '../components/BoutonsPays'
import Globe from '../components/Globes'
import './Home.css'
import Articlebox from '../components/Articlebox'
import Header from "../components/Header"
import './Header.css'
const Home = () => {
  return (
    <div>
       <Globe />
        <Header />
          <BoutonsPays />
          <BoutonsTitrePays />
          <Articlebox/>
         
        
    </div>
  )}
export default Home
