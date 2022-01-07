import BoutonsTitrePays from '../components/BoutonsTitrePays'
import BoutonsPays from '../components/BoutonsPays'
import Globe from '../components/Globes'
import './Home.css'
import Articlebox from '../components/Articlebox'

const Home = () => {
  return (
    <div>
       <Globe />
        
          <BoutonsPays />
          <BoutonsTitrePays />
          <Articlebox/>
         
        
    </div>
  )}
export default Home
