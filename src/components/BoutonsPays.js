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

const BoutonsPays = ({setAudio, setImage,setChat}) => {
	return (  
		<div className="AllButtonsCountry">
	    <div>    
      	<button className="buttonCountry" onClick={ () => setChat("L'Italie ! Super ! Allons déguster des pasta !")}>Italie</button>
    	</div> 
      <div>    
        <button className="buttonCountry" onClick={ () => setChat("L'Afrique du Sud ! Allons faire un safari !")}>Afrique du Sud</button>
      </div>  
      <div>    
	      <button className="buttonCountry" onClick={ () => setChat("Jamaîca ! Bombacla !")}>Jamaïque</button>
      </div>   
      <div>    
        <button className="buttonCountry" onClick={ () => setChat("Australie ! As-tu déjà rencontrer des kangourou ?")}>Australie</button>
      </div>  
      <div>    
        <button className="buttonCountry" onClick={ () => setChat("La Thaïlande, excellent choix ! Connais-tu le pad-thai ?")}>Thaïlande</button>
      </div>  
      <div>    
        <button className="buttonCountry" onClick={ () => setChat("Good Morning USA !")}>USA</button>
      </div>  
      <div>    
	      <button className="buttonCountry" onClick={ () => setChat("J'adore les plages de Kopa Cabana")}>Brésil</button>
      </div> 
    </div> 
  ) 
}   
export default BoutonsPays