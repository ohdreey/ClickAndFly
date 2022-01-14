import React from "react";
import LecteurAudio from '../components/LecteurAudio'

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

import "./BoutonsPays.css";
  
const BoutonsPays = ({setAudio, setImage}) => {
	const defaultLecteur = (mp3) => {
        setAudio(mp3)
        // console.log('poulet', mp3)
		// return <LecteurAudio audio={mp3} />
        console.log('yolo',usa)
        setImage(usa)
  }
	return (  
      <div className="AllButtonsCountry">
        <div>    
            <button className="buttonCountry" onClick={() => defaultLecteur()}>Italie</button>
        </div> 
        <div>    
            <button className="buttonCountry" onClick={() => defaultLecteur(afrique)}> Afrique du Sud</button>
        </div>  
        <div>    
            <button className="buttonCountry" onClick={() => defaultLecteur(jamaique)}>Jamaïque</button>
        </div>   
        <div>    
            <button className="buttonCountry" onClick={() => defaultLecteur(australie)}>Australie</button>
        </div>  
        <div>    
            <button className="buttonCountry" onClick={() => defaultLecteur(thailande)} >Thaïlande</button>
        </div>  
        <div>    
            <button className="buttonCountry" onClick={() => defaultLecteur(usap)}>Etat de New York</button>
        </div>  
        <div>    
            <button className="buttonCountry" onClick={() => defaultLecteur(samba)}>Brésil</button>
        </div>  
      </div> 
    ) 
}   
export default BoutonsPays