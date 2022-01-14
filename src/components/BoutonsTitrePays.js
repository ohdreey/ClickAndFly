import React from "react";
import LecteurAudio from "./LecteurAudio";
import "./BoutonsTitrePays.css";


import { Link } from "react-router-dom";

import recette from "../assets/images/recette.png";
import monuments from "../assets/images/monuments.png"
import photos from "../assets/images/photos.png";
import plane from "../assets/images/plane.png";
import play2 from "../assets/images/play2.png";

const BoutonsTitrePays = ({audio, image}) => {


    return (  

        <div className="ButtonsAndTitle">
            
            <div className="NameCountry">
                <h1>Nom du Pays</h1>
            </div>

                <div className="AllButtons">

                    <div className="button">    
                        <button className="monument"><img src={monuments} alt="boutonMonument" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="photos"><img src={photos} alt="boutonPhoto" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="recette"><img src={recette} alt="boutonRecette"></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <LecteurAudio audio={audio} />
                        <img src={play2} alt="poulet"/>

                    </div> 
                    <div className="button">  
                    <Link to = "/"> 
                        <button className="buttonPlane"><img src={plane} alt="boutonAvion" ></img>  
                        </button>
                    </Link>
                    </div> 

                </div>

        </div>
    
    ) 
}
    
export default BoutonsTitrePays