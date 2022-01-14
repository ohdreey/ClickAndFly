import React from "react";

import "./BoutonsTitrePays.css";
import buttonMonument from "../assets/buttonMonument.png"
import buttonPicture from "../assets/buttonPicture.png";
import buttonPlane from "../assets/buttonPlane.png";
import buttonPlay from "../assets/buttonPlay.png";
import buttonRecipe from "../assets/buttonRecipe.png";

const BoutonsTitrePays = ({setChat}) => {
    return (  

        <div className="ButtonsAndTitle">
            
            <div className="NameCountry">
                <h1>Nom du Pays</h1>
            </div>

                <div className="AllButtons">

                    <div className="button">    
                        <button className="buttonMonument" onClick={ () => setChat("Allons voir quels momunents nous cache ce magnifique pays!")}><img src={buttonMonument} alt="boutonMonument" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPicture" onClick={ () => setChat("Découvrons les joyaux de ce monde !")}><img src={buttonPicture} alt="boutonPhoto" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonRecipe" onClick={ () => setChat("Quels recettes allons nous découvrir ?!")}><img src={buttonRecipe} alt="boutonRecette"></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPlay" onClick={ () => setChat("Un peu de musique ?!")}><img src={buttonPlay} alt="boutonLecture" ></img>  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPlane" onClick={ () => setChat(" On repart à l'aventure !")}><img src={buttonPlane} alt="boutonAvion" ></img>  
                        </button>
                    </div> 

                </div>

        </div>
    
    ) 
}
    
export default BoutonsTitrePays