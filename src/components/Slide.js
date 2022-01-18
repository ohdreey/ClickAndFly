import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import './Slide.css'

function Slider({ isActive, selectPays }) {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/JulesCharles/API-PAYS/master/api/all.json')
    .then((res) => res.json())
    .then((data) => setImage([data[selectPays].image01, data[selectPays].image02, data[selectPays].image03]))
  })
    // .then((res) => console.log(res)||setData()) 
    // return <div>{images.map(image => <p>{image.image01}<p>)}
  return (
    <>
    <button onClick={() => console.log(images)}>CLICK</button>
    { images !== [] &&
      <div class={`holderCarousel ${isActive ? 'active' : ''}`}>
      <Carousel className="carousel">
        <img src={images[0]} alt='' />
        <img src={images[1]} alt='' />
        <img src={images[2]} alt='' />
      </Carousel>
      </div>
    }
    </>
  )
}

export default Slider;