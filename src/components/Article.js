import foodImage from '../assets/images/chat.png'

function Article(props) {
    return(
        <div className='article'>
            <div>
                 <img src={foodImage} className= 'foodImage' />
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )}
export default Article