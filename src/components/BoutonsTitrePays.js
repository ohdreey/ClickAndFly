import LecteurAudio from '../components/LecteurAudio'

import recette from "../assets/images/recette.png";
import monuments from "../assets/images/monuments.png"
import photos from "../assets/images/photos.png";
import plane from "../assets/images/plane.png";



import "./BoutonsTitrePays.css";

const BoutonsTitrePays = ({setChat, audio}) => {
    return (  
        <div className="ButtonsAndTitle">
            <div className="NameCountry">
                <h1>Nom du Pays</h1>
                  <LecteurAudio audio={audio} />
            </div>
                <div className="AllButtons">
                    <div className="button">    
                        <button className="buttonMonument" onClick={() => setChat("Allons voir quels momunents nous cache ce magnifique pays!")}>
                            <img src={monuments} alt="boutonMonument" />  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPicture" onClick={() => setChat("Découvrons les joyaux de ce monde !")}>
                            <img src={photos} alt="boutonPhoto" />
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonRecipe" onClick={() => setChat("Quels recettes allons nous découvrir ?!")}>
                            <img src={recette} alt="boutonRecette" />  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPlane" onClick={() => setChat(" On repart à l'aventure !")}>
                            <img src={plane} alt="boutonAvion" />
                        </button>
                    </div>
                </div>
            </div>
    ) 
}
    
export default BoutonsTitrePays