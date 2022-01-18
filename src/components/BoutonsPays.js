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
  
const BoutonsPays = ({setAudio, setImage ,setChat, setSelectPays}) => {
	const handelClick = (mp3, botSentence, pays) => {
        setAudio(mp3)
        setChat(botSentence)
        setSelectPays(pays)
        // console.log('poulet', mp3)
		// return <LecteurAudio audio={mp3} />
        console.log('yolo',usa)
        setImage(usa)
  }

	return (  
      <div className="AllButtonsCountry">
        <div>    
            {/* <button className="buttonCountry" onClick={() => handelClick(italie, "L'Italie ! Super ! Allons déguster des pasta !", 1)}>Italie</button> */}
        </div> 
        <div>    
            <button className="buttonCountry" onClick={() => handelClick(afrique, "L'Afrique du Sud ! Allons faire un safari !", 6)}> Afrique du Sud</button>
        </div>  
        <div>    
            <button className="buttonCountry" onClick={() => handelClick(jamaique,"Jamaîca ! Bombacla !", 3)}>Jamaïque</button>
        </div>   
        <div>    
            <button className="buttonCountry" onClick={() => handelClick(australie, "Australie ! As-tu déjà rencontrer des kangourou ?", 0)}>Australie</button>
        </div>  
        <div>    
            <button className="buttonCountry" onClick={() => handelClick(thailande, "La Thaïlande, excellent choix ! Connais-tu le pad-thai ?", 5)} >Thaïlande</button>
        </div>  
        <div>    
            <button className="buttonCountry" onClick={() => handelClick(usap, "Good Morning USA !", 2)}>Etat de New York</button>
        </div>  
        <div>    
            <button className="buttonCountry" onClick={() => handelClick(samba,"J'adore les plages de Kopa Cabana", 4)}>Brésil</button>
        </div>  
      </div> 
    ) 
}   
export default BoutonsPays