import './Globes.css'
import Earth from '../videos/earth.mp4'

const Globe = () => {
  return ( 
  <div className="container">
    <div className='GlobeStyle'>
      <video autoPlay loop muted>
        <source src={Earth} type='video/mp4' />
      </video>
    </div>
    <div className='body'>
      <button>Clique</button>
     </div>
  </div>
  )}
  

export default Globe
