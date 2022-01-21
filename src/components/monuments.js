import { useEffect, useState } from 'react'
import foodImage from '../assets/images/chat.png'
import Pays from '../screens/Pays'
import './Monuments.css'
import { useParams  } from 'react-router-dom'


function Monuments ({selectPays,SetSelectPays}) {
    const [datas, setDatas] = useState([])
    
    let params = useParams();

useEffect(() => {
        fetch(`https://raw.githubusercontent.com/JulesCharles/API-PAYS/master/api/id/${params.id}.json`)
        .then((res) => res.json())
        .then((res) => setDatas(res))
}, [])


const articleItems = [
    {
        categorie: "Le Titre Principale",
        title: "Le Titre",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare nec eros sit amet sollicitudin. In faucibus nunc lobortis, dictum libero sed, mattis felis. Nunc pharetra ac justo non auctor. Cras suscipit consequat orci, rhoncus posuere leo sodales nec. Mauris neque nisl, fringilla nec urna imperdiet, vulputate pellentesque ante. Maecenas blandit pulvinar turpis, ac faucibus diam vulputate sit amet. Nunc euismod ligula placerat, pharetra tellus sit amet, suscipit odio. Vivamus placerat accumsan volutpat. Cras nisi justo, maximus quis velit ut, pellentesque auctor tellus.",
    }
]


    return(
        <div className='artcont'>
            
                <div className='cateBox'>
                    <h1>Monuments</h1>
                </div>
                <div className='artBox'>
                    <div className='article'>
                        <div>
                            {console.log('kingofchicken', datas)}
                            <img classeName ="imageMonum" src={datas.monument01} alt='' />
                        </div>
                        <div>
                            <h2>{datas.monumentName01}</h2>
                            <p classeName ="txtMonum">{datas.story01}</p>
                        </div>
                    </div>
                </div>

                <div className='artBox'>        
                    <div className='article'>
                        <div>
                            {console.log('kingofchicken', datas)}
                            <img classeName ="imageMonum" src={datas.monument02} alt='' />
                        </div>
                        <div>
                            <h2>{datas.monumentName02}</h2>
                            <p classeName ="txtMonum">{datas.story02}</p>
                        </div>
                    </div>
                </div>
                <div className='artBox'>
                    <div className='article'>
                        <div>
                            {console.log('kingofchicken', datas)}
                            <img classeName ="imageMonum" src={datas.monument03} alt='' />
                        </div>
                        <div>
                            <h2>{datas.monumentName03}</h2>
                            <p classeName ="txtMonum">{datas.story03}</p>
                        </div>
                    </div>
                </div>
        </div>   
    
    
    )}
    export default Monuments;