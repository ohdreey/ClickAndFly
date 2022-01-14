import React from "react";
import { Link } from "react-router-dom";
import LecteurAudio from "./LecteurAudio";
import "./BoutonsTitrePays.css";
import monuments from "../assets/monument.png"
import photos from "../assets/photos.png";
import plane from "../assets/monde.png";
import recipe from "../assets/recipe.png";





const BoutonsTitrePays = ({audio, image}) => {


    return (  

    <div className="ButtonsAndTitle">
            
        <div className="NameCountry">
            <h1>Nom du Pays</h1>
            <LecteurAudio audio={audio} />
        </div>

        <div className="AllButtons">

            <div className="button">    
                <button className="monument"><img src={monuments} alt="boutonMonument" ></img></button>
            </div> 
            <div className="button">    
                        <button className="photos"><img src={photos} alt="boutonPhoto" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="recipe"><img src={recipe} alt="boutonRecette"></img>  
                        </button>
                    </div> 
                    <div className="button">  
                    <Link to = "/"> 
                        <button className="plane"><img src={plane} alt="boutonAvion" ></img>  
                        </button>
                    </Link>
                    </div> 

                </div>

        </div>
    
    ) 
}
    
export default BoutonsTitrePays