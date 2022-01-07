import React from "react";

import "./BoutonsTitrePays.css";
import buttonMonument from "../assets/buttonMonument.png"
import buttonPicture from "../assets/buttonPicture.png";
import buttonPlane from "../assets/buttonPlane.png";
import buttonPlay from "../assets/buttonPlay.png";
import buttonRecipe from "../assets/buttonRecipe.png";

const BoutonsTitrePays = () => {
    return (  

        <div className="ButtonsAndTitle">
            
            <div className="NameCountry">
                <h1>Nom du Pays</h1>
            </div>

                <div className="AllButtons">

                    <div className="button">    
                        <img src={buttonMonument} alt="boutonMonument" className="buttonMonument" />
                    </div> 
        
                    <div className="button">
                        <img src={buttonPicture} alt="boutonPhoto" className="buttonPicture"/>
                    </div> 
                    
                    <div className="button">
                        <img src={buttonRecipe} alt="boutonRecette" className="buttonRecipe"/>
                    </div>

                    <div className="button">
                        <img src={buttonPlay} alt="boutonLecture" className="buttonPlay"/>
                    </div>

                    <div className="button">
                        <img src={buttonPlane} alt="boutonAvion" className="buttonPlane"/>
                    </div> 

                </div>

        </div>
    
    ) 
}
    
export default BoutonsTitrePays