import React from "react";

import "./BoutonsPays.css";
import carnaval from "../assets/carnaval.png"
import samba from "../assets/samba.mp3"
import play2 from "../assets/play2.png"
import Globe from "./Globes";

const BoutonsPays = ({setAudio, setImage}) => {
const bresilLecteur = () => {
    setAudio(samba)
    setImage(carnaval)
}

    return (  
       
            <div className="AllButtonsCountry">
              
                <div>    
                    <button className="buttonCountry">Italie</button>
                </div> 
        
                 <div>    
                    <button className="buttonCountry"> Afrique du Sud</button>
                </div>  
                    
                <div>    
                    <button className="buttonCountry">Jamaïque</button>
                </div>   

                <div>    
                    <button className="buttonCountry">Australie</button>
                </div>  

                <div>    
                    <button className="buttonCountry" >Thaïlande</button>
                </div>  

                <div>    
                    <button className="buttonCountry">Etat de New York</button>
                </div>  

                <div>    
                    <button className="buttonCountry" onClick={() => bresilLecteur()}>Brésil</button>
                </div>  

            </div> 

    
    ) 
}
    
export default BoutonsPays