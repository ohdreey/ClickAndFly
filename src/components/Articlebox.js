import './Articlebox.css'
import Article from './Article'


const articleItems = [
  {
      categorie: "Le Titre Principale",
      itemName: "Le Titre",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare nec eros sit amet sollicitudin. In faucibus nunc lobortis, dictum libero sed, mattis felis. Nunc pharetra ac justo non auctor. Cras suscipit consequat orci, rhoncus posuere leo sodales nec. Mauris neque nisl, fringilla nec urna imperdiet, vulputate pellentesque ante. Maecenas blandit pulvinar turpis, ac faucibus diam vulputate sit amet. Nunc euismod ligula placerat, pharetra tellus sit amet, suscipit odio. Vivamus placerat accumsan volutpat. Cras nisi justo, maximus quis velit ut, pellentesque auctor tellus.",
  }
]
const Articlebox = () => {
  return (
    <div className='artcont'>
      
      {articleItems.map((items) =>(
      <div>
          <div className='cateBox'>
            <h1>{items.categorie}</h1>
          </div>
          <div className='artBox'>
          <Article
            title={items.itemName}
            description={items.description} />
          <Article
            title={items.itemName}
            description={items.description} />
          <Article
            title={items.itemName}
            description={items.description} />
        </div></div>
      ))}
    </div>
    )}

export default Articlebox