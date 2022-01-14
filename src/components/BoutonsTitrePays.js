import React from "react";

import "./BoutonsTitrePays.css";
import buttonMonument from "../assets/monument.png"
import buttonPicture from "../assets/photos.png";
import buttonPlane from "../assets/monde.png";
import buttonPlay from "../assets/play2.png";
import buttonRecipe from "../assets/recipe.png";
import { Link } from "react-router-dom";

const BoutonsTitrePays = () => {
    return (  

        <div className="ButtonsAndTitle">
            
            <div className="NameCountry">
                <h1>Nom du Pays</h1>
            </div>

                <div className="AllButtons">

                    <div className="button">    
                        <button className="buttonMonument"><img src={buttonMonument} alt="boutonMonument" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPicture"><img src={buttonPicture} alt="boutonPhoto" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonRecipe"><img src={buttonRecipe} alt="boutonRecette"></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPlay"><img src={buttonPlay} alt="boutonLecture" ></img>  
                        </button>
                    </div> 
                    <div className="button">  
                    <Link to = "/"> 
                        <button className="buttonPlane"><img src={buttonPlane} alt="boutonAvion" ></img>  
                        </button>
                    </Link>
                    </div> 

                </div>

        </div>
    
    ) 
}
    
export default BoutonsTitrePays