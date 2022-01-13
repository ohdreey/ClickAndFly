import BoutonsTitrePays from '../components/BoutonsTitrePays'
import BoutonsPays from '../components/BoutonsPays'
import Globe from '../components/Globes'
import './Home.css'
import Articlebox from '../components/Articlebox'
import Header from "../components/Header"
import { useState } from 'react'
import carnaval from "../assets/carnaval.png"
import samba from "../assets/samba.mp3"


const Home = () => {
  const [audio, setAudio] = useState(samba);
const [image, setImage] = useState(carnaval)
  return (
    <div>
       <Globe />
        <Header />
          <BoutonsPays setAudio={setAudio}/>
          <BoutonsTitrePays audio={audio} image={image}/>
          <Articlebox/>
         
        
    </div>
  )}
export default Home
