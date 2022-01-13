import BoutonsTitrePays from '../components/BoutonsTitrePays'
import BoutonsPays from '../components/BoutonsPays'
import Globe from '../components/Globes'
import './Home.css'
import Articlebox from '../components/Articlebox'
import Header from "../components/Header"
import { useState } from 'react'
import play2 from "../assets/images/play2.png"



const Home = () => {
  const [audio, setAudio] = useState(audio);
const [image, setImage] = useState(play2)
  return (
    <div>
       
        <Header />
        <Globe />
          <BoutonsPays setAudio={setAudio}/>
          <BoutonsTitrePays audio={audio} image={image}/>
          <Articlebox/>
         
        
    </div>
  )}
export default Home
