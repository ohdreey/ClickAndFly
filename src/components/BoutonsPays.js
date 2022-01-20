import React from "react";
import { Link } from "react-router-dom";

import LecteurAudio from '../components/LecteurAudio'

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
    }
	return (  
    <div className="AllButtonsCountry">
        <div>    
            {/* <button className="buttonCountry" onClick={() => handelClick(italie, "L'Italie ! Super ! Allons déguster des pasta !", 1)}>Italie</button> */}
        </div> 
        <div>    
            <Link to='/test/6'>
                <button className="buttonCountry" onClick={() => handelClick(afrique, "L'Afrique du Sud ! Allons faire un safari !", 6)}> Afrique du Sud</button>
            </Link>
        </div>  
        <div>
            <Link to='/test/3'>    
                <button className="buttonCountry" onClick={() => handelClick(jamaique,"Jamaîca ! Bombacla !", 3)}>Jamaïque</button>
            </Link> 
        </div>   
        <div>    
            <Link to='/test/0'>  
                <button className="buttonCountry" onClick={() => handelClick(australie, "Australie ! As-tu déjà rencontrer des kangourou ?", 0)}>Australie</button>
            </Link> 
        </div>  
        <div>
            <Link to='/test/5'>      
                <button className="buttonCountry" onClick={() => handelClick(thailande, "La Thaïlande, excellent choix ! Connais-tu le pad-thai ?", 5)} >Thaïlande</button>
            </Link> 
        </div>  
        <div>
            <Link to='/test/2'>         
                <button className="buttonCountry" onClick={() => handelClick(usap, "Good Morning USA !", 2)}>Etat de New York</button>
            </Link>
        </div>  
        <div>
            <Link to='/test/4'>    
                <button className="buttonCountry" onClick={() => handelClick(samba, "J'adore les plages de Kopa Cabana", 4)}>Brésil</button>
            </Link>        
        </div>  
      </div> 
    ) 
}   
export default BoutonsPays