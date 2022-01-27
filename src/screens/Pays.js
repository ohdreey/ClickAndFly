import { useState, useEffect  } from 'react'
import BoutonsTitrePays from '../components/BoutonsTitrePays'
import {useParams  } from 'react-router-dom'
import './Home.css'
import play2 from "../assets/images/play2.png"


const Pays = ({audio, setChat, selectPays}) => {
	
	const [image, setImage] = useState(play2)
	const [dataPays, setDataPays] = useState({})
	let params = useParams();
 
	
	useEffect(() => {
		console.log('poufsdfjsdkfhksd',params);
		fetch(`https://raw.githubusercontent.com/JulesCharles/API-PAYS/master/api/id/${params.id}.json`)
			.then(res => res.json())
			.then(res => console.log(res)||setDataPays(res))
	},[params])
  
	return (
		<div>
			<BoutonsTitrePays id={params.id} audio={audio} image={setImage} setChat={setChat} selectPays={selectPays} country={dataPays.country} dataPays={dataPays}/>
    	</div>
  )
}

export default Pays