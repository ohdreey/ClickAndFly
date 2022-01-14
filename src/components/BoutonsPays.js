import React from "react";

import "./BoutonsPays.css";

const BoutonsPays = ({setChat}) => {
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