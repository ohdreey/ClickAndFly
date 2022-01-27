import React from "react";
import { Link } from "react-router-dom";
import samba from "../assets/sons/samba.mp3"
import afrique from "../assets/sons/afrique.mp3"
import australie from "../assets/sons/australie.mp3"
import jamaique from "../assets/sons/jamaique.mp3"
import thailande from "../assets/sons/thailande.mp3"
import usap from "../assets/sons/usap.mp3"
import italie from "../assets/sons/italie.mp3"


import "./BoutonsPays.css";

const BoutonsPays = ({setAudio, setImage ,setChat, setSelectPays}) => {
	const handelClick = (mp3, botSentence, pays) => {
        setAudio(mp3)
        setChat(botSentence)
        setSelectPays(pays)
    }
    console.log("pays",handelClick)
	return (  
        <div className="AllButtonsCountry">
            <div>  <Link to='/test/1'> 
                <button className="buttonCountry" onClick={() => handelClick(italie, "L'Italie ! Super ! Allons déguster des pastas !", 0)}>Italie</button>
                </Link>
            </div> 
            <div>    
                <Link to='/test/2'>
                    <button className="buttonCountry" onClick={() => handelClick(afrique, "L'Afrique du Sud ! Allons faire un safari !", 1)}> Afrique du Sud</button>
                </Link>
            </div>  
            <div>
                <Link to='/test/3'>    
    
                    <button className="buttonCountry" onClick={() => handelClick(jamaique,"La Jamaique, nation du reggae !", 3)}>Jamaïque</button>
                </Link> 
            </div>   
            <div>    
                <Link to='/test/4'>  
                    <button className="buttonCountry" onClick={() => handelClick(australie, "Ah, Australie ! As-tu déjà rencontré des kangourous ?", 0)}>Australie</button>
                </Link> 
            </div>  
            <div>
                <Link to='/test/5'>      
                    <button className="buttonCountry" onClick={() => handelClick(thailande, "La Thaïlande, excellent choix ! Entre zenitude et farnienté", 5)} >Thaïlande</button>
                </Link> 
            </div>  
            <div>
                <Link to='/test/6'>         
                    <button className="buttonCountry" onClick={() => handelClick(usap, "Good Morning USA ! I got the feeling that it's gonna be a wonderful day!", 2)}>Etat de New York</button>
                </Link>
            </div>  
            <div>
                <Link to='/test/7'>    
                    <button className="buttonCountry" onClick={() => handelClick(samba, "J'adore la plage de Copacabana", 4)}>Brésil</button>
    
                </Link>        
            </div>  
          </div> 
        ) 
    }   
    export default BoutonsPays