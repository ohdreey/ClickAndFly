import { Routes, Route } from 'react-router-dom'
import { useState,useEffect } from 'react'  
import Slide from './components/Slide'
import BoutonsPays from './components/BoutonsPays'
import Globe from './components/Globes'
import Home from './screens/Home'
import Pays from './screens/Pays'
import Header from "./components/Header"
import Bot from './components/Bot'

import Poulet from './components/Poulet'
import './App.css'

function App() {
  const [audio, setAudio] = useState("");
  const [chat, setChat] = useState("Hey ! Prêt à découvrir le monde ?");
  const [selectPays, setSelectPays] = useState(0);
  
  // useEffect(() => {},[selectPays])

  return (
    <div className='App'>
      <Header />
      <Globe />
      <div className= "boitebot">
        <Bot chat={chat} />
      </div>
      <BoutonsPays setAudio={setAudio} setChat={setChat} setSelectPays={setSelectPays}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pays' element={<Pays audio={audio} setChat={setChat} selectPays={selectPays} />} >
          <Route path="/pays/monument" element={<Poulet />} />
          <Route path="/pays/picture" element={<Slide />} />
          <Route path="/pays/recipe" element={<Slide />} />
          {/*<Route path="/pays/4" element={<Slide />} /> */}
        </Route>
        
     </Routes>
    </div>
  )
}

export default App

