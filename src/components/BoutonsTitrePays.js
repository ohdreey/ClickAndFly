import React from "react";
import LecteurAudio from "./LecteurAudio";
import "./BoutonsTitrePays.css";
import buttonMonument from "../assets/monuments.png"
import buttonPicture from "../assets/photos.png";
import buttonPlane from "../assets/globeAvion.png";
import carnaval from "../assets/carnaval.png"
import samba from "../assets/samba.mp3"

import buttonRecipe from "../assets/recette.png";

const BoutonsTitrePays = ({audio, image}) => {

    return (  

        <div className="ButtonsAndTitle">
            
            <div className="NameCountry">
                <h1>Nom du Pays</h1>
            </div>

                <div className="AllButtons">

                    <div className="button">    
                        <button className="monument"><img src={buttonMonument} alt="boutonMonument" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="photos"><img src={buttonPicture} alt="boutonPhoto" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="recette"><img src={buttonRecipe} alt="boutonRecette"></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <LecteurAudio audio={audio} />
                        <img src={image} alt="boutonRecette"></img>

                    </div> 
                    <div className="button">    
                        <button className="globeAvion"><img src={buttonPlane} alt="boutonAvion" ></img>  
                        </button>
                    </div> 

                </div>

        </div>
    
    ) 
}
    
export default BoutonsTitrePays