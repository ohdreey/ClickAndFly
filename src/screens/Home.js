import BoutonsTitrePays from '../components/BoutonsTitrePays'
import './Home.css'
import Article from '../components/Article'
import play2 from "../assets/images/play2.png"
import { useState  } from 'react'


const Home = ({audio, setChat}) => {
  const [image, setImage] = useState(play2)
  return (
    <div>
      <BoutonsTitrePays audio={audio} image={setImage} setChat={setChat}/>
      <Article/>   
    </div>
  )
}

export default Home
