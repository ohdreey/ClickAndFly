import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import './Slide.css'

function Slide({ isActive, selectPays }) {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/JulesCharles/API-PAYS/master/api/all.json')
    .then((res) => res.json())
    .then((data) => setImage([data[selectPays].image01, data[selectPays].image02, data[selectPays].image03]))
  },[selectPays])
    // .then((res) => console.log(res)||setData()) 
    // return <div>{images.map(image => <p>{image.image01}<p>)}
    console.log("C'est la",isActive)
    

  return (
    
    <div>
      <button></button>
    { images !== [] &&
      <div className={`holderCarousel ${isActive ? 'active' : ''}`}>
      <Carousel className="carousel">
        <div className="image"> 
        <img src={images[0]} alt='' />
        </div>
        <div className="image">
        <img src={images[1]} alt='' />
        </div>
        <div className="image">
        <img src={images[2]} alt='' />
        </div>
      </Carousel>
      </div>
    }
    </div>
  )
}

export default Slide;
