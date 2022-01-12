import './Monuments.css'

const Monuments = () => {
    return(
        <div className='monuments'> 
            <div>
                 <img src={monumentImage} className= 'monumentImage' /> 
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )}
    
  
  export default Monuments