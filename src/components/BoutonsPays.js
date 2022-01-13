import React from "react";
import "./BoutonsPays.css";

import carnaval from "../assets/images/lecteur/carnaval.png"
import play2 from "../assets/images/play2.png"
import afriquesud from "../assets/images/lecteur/afriquesud.png"
import australiep from "../assets/images/lecteur/australiep.png"
import jamaiquep from "../assets/images/lecteur/jamaiquep.png"
import tuktuk from "../assets/images/lecteur/tuktuk.png"
import usa from "../assets/images/lecteur/usa.png"
// import venus from "../assets/venus.png"

import samba from "../assets/sons/samba.mp3"
import afrique from "../assets/sons/afrique.mp3"
import australie from "../assets/sons/australie.mp3"
import jamaique from "../assets/sons/jamaique.mp3"
import thailande from "../assets/sons/thailande.mp3"
import usap from "../assets/sons/usap.mp3"



const BoutonsPays = ({setAudio, setImage}) => {
    const defaultLecteur = () => {
        setAudio(Audio)
        setImage(play2)
    }
    const italieLecteur = () => {
        setAudio()
        setImage()
}
    const afriqueLecteur = () => {
        setAudio(afrique)
        setImage(afriquesud)
}
    const bresilLecteur = () => {
        setAudio(samba)
        setImage(carnaval)
}
    const jamaiqueLecteur = () => {
        setAudio(jamaique)
        setImage(jamaiquep)
}
    const australieLecteur = () => {
        setAudio(australie)
        setImage(australiep)
}
    const thailandeLecteur = () => {
        setAudio(thailande)
        setImage(tuktuk)
}
    const nyLecteur = () => {
        setAudio(usap)
        setImage(usa)
}


return (  
       <div className="AllButtonsCountry">
              
                <div>    
                    <button className="buttonCountry" onClick={() => italieLecteur()}>Italie</button>
                </div> 
        
                 <div>    
                    <button className="buttonCountry" onClick={() => afriqueLecteur()}> Afrique du Sud</button>
                </div>  
                    
                <div>    
                    <button className="buttonCountry" onClick={() => jamaiqueLecteur()}>Jamaïque</button>
                </div>   

                <div>    
                    <button className="buttonCountry" onClick={() => australieLecteur()}>Australie</button>
                </div>  

                <div>    
                    <button className="buttonCountry" onClick={() => thailandeLecteur()} >Thaïlande</button>
                </div>  

                <div>    
                    <button className="buttonCountry" onClick={() => nyLecteur()}>Etat de New York</button>
                </div>  

                <div>    
                    <button className="buttonCountry" onClick={() => bresilLecteur()}>Brésil</button>
                </div>  

            </div> 

    
    ) 
}   
export default BoutonsPays