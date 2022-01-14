import BoutonsTitrePays from '../components/BoutonsTitrePays'
import BoutonsPays from '../components/BoutonsPays'
import Globe from '../components/Globes'
import './Home.css'
import Articlebox from '../components/Articlebox'
import Header from "../components/Header"
import Bot from '../components/Bot'
import { useState } from 'react'

const Home = () => {
  
  const [chat, setChat] = useState("Hey ! Prêt à découvrir le monde ?");
  return (
    <div>
       <Globe />
        <Header />
          <BoutonsPays setChat={setChat} />
          <div className= "boitebot">
          <Bot chat={chat} />
          </div>
          <BoutonsTitrePays setChat={setChat}/>
          <Articlebox/>
         
        
    </div>
  )}
export default Home
