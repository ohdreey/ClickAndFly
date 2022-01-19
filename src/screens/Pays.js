import { useState, useEffect  } from 'react'
import BoutonsTitrePays from '../components/BoutonsTitrePays'
import { Routes, Route } from 'react-router-dom'
import './Home.css'
// import Articlebox from '../components/Articlebox'
import play2 from "../assets/images/play2.png"


const Pays = ({audio, setChat, selectPays}) => {
	const [image, setImage] = useState(play2)
	const [dataPays, setDataPays] = useState({})

	useEffect(() => {
		console.log('poufsdfjsdkfhksd',selectPays);
		fetch(`https://raw.githubusercontent.com/JulesCharles/API-PAYS/master/api/id/${selectPays}.json`)
			.then(res => res.json())
			.then(res => console.log(res)||setDataPays(res))
	},[])
  
	return (
		<div>
			<div className="NameCountry">
        {/* <h1>yolo{dataPays.country}</h1> */}
				{/* {console.log('yo;ppppppppppppppppppppp')} */}
		 	</div>
			 <BoutonsTitrePays audio={audio} image={setImage} setChat={setChat} selectPays={selectPays} country={dataPays.country}/>
    </div>
  )
}

export default Pays