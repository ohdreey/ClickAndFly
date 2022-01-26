import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom'
import './Slide.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import '@splidejs/splide/dist/css/splide.min.css';
function Slide() {
  const [images, setImage] = useState([]);
  let params = useParams();
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/JulesCharles/API-PAYS/master/api/id/${params.id}.json`)
    .then((res) => res.json())
    .then((res) => console.log(res.image01) || setImage(res))
  },[])
    // .then((res) => console.log(res)||setData()) 
    // return <div>{images.map(image => <p>{image.image01}<p>)}
    // console.log("C'est la",isActive)
  return (
    
    <div>
      <Splide
      >
        <SplideSlide>
          <img src={images.image01} alt='' width='600px'/>
        </SplideSlide>
        <SplideSlide>
          <img src={images.image02} alt='' width='600px'/>
        </SplideSlide>
        <SplideSlide>
          <img src={images.image03} alt= '' width='600px'/>
        </SplideSlide>
      </Splide>
       {/* <Splide className="carousel"
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
    > */}

    {/* {images.map((image) => ( 
        <Splide className="carousel">
           <SplideSlide>
          <div className="image"> 
            <img src={image.images01} alt='' />
          </div>
            </SplideSlide>
          <SplideSlide>
          <div className="image">
            <img src={image.images02} alt='' />
          </div>
            </SplideSlide>
          <SplideSlide>
          <div className="image">
            <img src={image.images03} alt='' />
          </div>
            </SplideSlide>
      </Splide>
      
    ))} */}
      
    </div>
  )
}


export default Slide;
