import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'  

import BoutonsPays from './components/BoutonsPays'
import Globe from './components/Globes'
import Home from './screens/Home'
import Header from "./components/Header"
import Bot from './components/Bot'

import './App.css'

function App() {
  const [audio, setAudio] = useState("");
  const [chat, setChat] = useState("Hey ! Prêt à découvrir le monde ?")

  return (
    <div className='App'>
      <Header />
      <Globe />
      <div className= "boitebot">
        <Bot chat={chat} />
      </div>
      <BoutonsPays setAudio={setAudio} setChat={setChat }/>
      <Routes>
        <Route path='/' element={<Home audio={audio} setChat={setChat }/>} />
     </Routes>
    </div>
  )
}

export default App

