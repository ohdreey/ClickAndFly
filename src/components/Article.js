import foodImage from '../assets/images/chat.png'
import './Article.css'

const articleItems = [
    {
        categorie: "Le Titre Principale",
        title: "Le Titre",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare nec eros sit amet sollicitudin. In faucibus nunc lobortis, dictum libero sed, mattis felis. Nunc pharetra ac justo non auctor. Cras suscipit consequat orci, rhoncus posuere leo sodales nec. Mauris neque nisl, fringilla nec urna imperdiet, vulputate pellentesque ante. Maecenas blandit pulvinar turpis, ac faucibus diam vulputate sit amet. Nunc euismod ligula placerat, pharetra tellus sit amet, suscipit odio. Vivamus placerat accumsan volutpat. Cras nisi justo, maximus quis velit ut, pellentesque auctor tellus.",
    }
  ]

function Article() {
    return(
        <div className='artcont'>
      
        {articleItems.map((items) =>(
          <div>
            <div className='cateBox'>
              <h1>Recettes</h1>
            </div>
            <div className='artBox'>
              <div className='article'>
                <div>
                  <img src={foodImage} className= 'foodImage' />
                </div>
                <div>
                  <h2>{items.title}</h2>
                  <p>{items.description}</p>
                </div>
            </div>
    </div></div>
      ))}
    </div>
    )}
export default Article