import { useEffect, useState } from 'react'
import './Recipe.css'
import { useParams  } from 'react-router-dom'


function Recipe ({selectPays,SetSelectPays}) {
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
                    <h1>Recettes</h1>
                </div>
                <div className='artBox'>
                    <div className='article'>
                        <div>
                            <img src={datas.food01} alt='' />
                        </div>
                        <div>
                            <h2>{datas.foodName01}</h2>
                            <p>{datas.recipe01}</p>
                        </div>
                    </div>
                </div>

                <div className='artBox'>        
                    <div className='article'>
                        <div>
                            <img src={datas.food02} alt='' />
                        </div>
                        <div>
                            <h2>{datas.foodName02}</h2>
                            <p>{datas.recipe02}</p>
                        </div>
                    </div>
                </div>
                <div className='artBox'>
                    <div className='article'>
                        <div>
                            <img src={datas.food03} alt='' />
                        </div>
                        <div>
                            <h2>{datas.foodName03}</h2>
                            <p>{datas.recipe03}</p>
                        </div>
                    </div>
                </div>
        </div>   
    
    
    )}
    export default Recipe;