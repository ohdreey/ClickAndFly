import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Slide from './components/Slide'
import BoutonsPays from './components/BoutonsPays'
import Globe from './components/Globes'
import Home from './screens/Home'
import Pays from './screens/Pays'
import Header from "./components/Header"
import Bot from './components/Bot'
import Monuments from './components/Monuments'
import Recipe from './components/Recipe'
import Footer from './components/Footer'
//import { Carousel } from 'react-responsive-carousel';

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
          <Route path="/pays/monument/:id" element={<Monuments />} />
          <Route path="/pays/picture/:id" element={<Slide />} />
          <Route path="/pays/recipe/:id" element={<Recipe />} />
          {/*<Route path="/pays/4" element={<Slide />} /> */}
        </Route>
        <Route path='/test/:id' element={<Pays audio={audio} setChat={setChat} selectPays={selectPays} />}/>
     </Routes>
     <Footer />
    </div>
  )
}
 
export default App