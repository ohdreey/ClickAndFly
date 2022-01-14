import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'  
import BoutonsPays from './components/BoutonsPays'
import Globe from './components/Globes'
import Home from './screens/Home'
import Header from "./components/Header"


import './App.css'

function App() {
  const [audio, setAudio] = useState("");
  return (
    <div className='App'>
      <Header />
      <Globe />
      <BoutonsPays setAudio={setAudio}/>
      <Routes>
        <Route path='/' element={<Home audio={audio}/>} />
      </Routes>
    </div>
  )
}

export default App

