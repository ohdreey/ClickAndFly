import { useEffect, useState } from 'react'
import './Monuments.css'
import { useParams  } from 'react-router-dom'


function Monuments () {
    const [datas, setDatas] = useState([])
    
    let params = useParams();

useEffect(() => {
        fetch(`https://raw.githubusercontent.com/JulesCharles/API-PAYS/master/api/id/${params.id}.json`)
        .then((res) => res.json())
        .then((res) => setDatas(res))
}, [])
return(
    <div className='artcont'>
        
            <div className='cateBox'>
                <h3>Monuments</h3>
            </div>
            <div className='artBox'>
                <div className='article'>
                    <div>
                        {console.log('kingofchicken', datas)}
                        <img className ="imageMonum" src={datas.monument01} alt='' />
                    </div>
                    <div>
                        <h4>{datas.monumentName01}</h4>
                        <p className ="txtMonum">{datas.story01}</p>
                    </div>
                </div>
            </div>

            <div className='artBox'>        
                <div className='article'>
                    <div>
                        {console.log('kingofchicken', datas)}
                        <img className ="imageMonum" src={datas.monument02} alt='' />
                    </div>
                    <div>
                        <h4>{datas.monumentName02}</h4>
                        <p className ="txtMonum">{datas.story02}</p>
                    </div>
                </div>
            </div>
            <div className='artBox'>
                <div className='article'>
                    <div>
                        {console.log('kingofchicken', datas)}
                        <img className ="imageMonum" src={datas.monument03} alt='' />
                    </div>
                    <div>
                        <h4>{datas.monumentName03}</h4>
                        <p className ="txtMonum">{datas.story03}</p>
                    </div>
                </div>
            </div>
    </div>   


)}
    export default Monuments;