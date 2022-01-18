import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'  
import Slider from './components/Slide'
import BoutonsPays from './components/BoutonsPays'
import Globe from './components/Globes'
import Home from './screens/Home'
import Header from "./components/Header"
import Bot from './components/Bot'

import './App.css'

function App() {
  const [audio, setAudio] = useState("");
  const [chat, setChat] = useState("Hey ! Prêt à découvrir le monde ?");
  const [selectPays, setSelectPays] = useState(0);

  return (
    <div className='App'>
      <Header />
      <Globe />
      <div className= "boitebot">
        <Bot chat={chat} />
      </div>
      <BoutonsPays setAudio={setAudio} setChat={setChat} setSelectPays={setSelectPays}/>
      <Routes>
        <Route path='/' element={<Home audio={audio} setChat={setChat} selectPays={selectPays}/>} />
     </Routes>
    </div>
  )
}

export default App

