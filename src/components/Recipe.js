import { useEffect, useState } from 'react'
import './Recipe.css'
import { useParams  } from 'react-router-dom'


function Recipe () {
    const [datas, setDatas] = useState([])
    
    let params = useParams();

useEffect(() => {
        fetch(`https://raw.githubusercontent.com/JulesCharles/API-PAYS/master/api/id/${params.id}.json`)
        .then((res) => res.json())
        .then((res) => setDatas(res))
}, [params.id])



    return(
        <div className='artcont'>
                <div className='cateBox'>
                    <h3>Spécialités Culinaires</h3>
                </div>
                <div className='artBox'>
                    <div className='article'>
                        <div>
                            <img className='imageR'src={datas.food01} alt={datas.foodName01} />
                        </div>
                        <div>
                            <h4>{datas.foodName01}</h4>
                            <p>{datas.recipe01}</p>
                        </div>
                    </div>
                </div>
                <div className='artBox'>        
                    <div className='article'>
                        <div>
                            <img className='imageR' src={datas.food02} alt='' />
                        </div>
                        <div>
                            <h4>{datas.foodName02}</h4>
                            <p>{datas.recipe02}</p>
                        </div>
                    </div>
                </div>
                <div className='artBox'>
                    <div className='article'>
                        <div>
                            <img className='imageR' src={datas.food03} alt='' />
                        </div>
                        <div>
                            <h4>{datas.foodName03}</h4>
                            <p>{datas.recipe03}</p>
                        </div>
                    </div>
                </div>
        </div>   
    
    
    )}
    export default Recipe;