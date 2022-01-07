import './Globes.css'
import Earth from '../videos/earth.mp4'
import BoutonsTitrePays from '../components/BoutonsTitrePays'
import BoutonsPays from '../components/BoutonsPays'
import Articlebox from '../components/Articlebox'

const Globe = () => {
  return ( 
  <div className="container">
    <div className='GlobeStyle'>
      <video autoPlay loop muted>
        <source src={Earth} type='video/mp4' />
      </video>
    </div>
  </div>
  )}
  

export default Globe
