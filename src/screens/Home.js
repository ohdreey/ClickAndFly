
import './Home.css'
import play2 from "../assets/images/play2.png"
import { useState  } from 'react'


const Home = ({audio, setChat, selectPays}) => {
  const [image, setImage] = useState(play2)
  return (
    <div>
      {/* <BoutonsTitrePays audio={audio} image={setImage} setChat={setChat} selectPays={selectPays}/>
      <Articlebox/>    */}
    </div>
  )
}

export default Home
