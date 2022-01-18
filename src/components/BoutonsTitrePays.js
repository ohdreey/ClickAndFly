
import Slider from './Slide';
import { useState } from "react";
import { Link } from "react-router-dom";
import LecteurAudio from "./LecteurAudio";
import "./BoutonsTitrePays.css";
import monument from "../assets/monument.png"
import photos from "../assets/photos.png";
import plane from "../assets/monde.png";
import recipe from "../assets/recipe.png";
import Articlebox from "./Articlebox";
import Monuments from "./monuments.js"
import Recipe from "./Recipe";
import Slide from "./Slide.js"

const BoutonsTitrePays = ({setChat, audio, selectPays}) => {

    const [isActive, setIsActive] = useState(false);
    const [monumentIsTrue, setMonumentIsTrue] = useState(false)
    const [recipeIsTrue, setRecipeIsTrue] = useState(false)
    const [pictureIsTrue, setPictureIsTrue] = useState(false)

    const onClickPays = () => {
        setChat("Découvrons les joyaux de ce monde !");
        setIsActive(!isActive);
    }
    


    return (  
         <div className="ButtonsAndTitle">
            <div className="NameCountry">
                <h1>Nom du Pays</h1>
                  <LecteurAudio audio={audio} />
            </div>
                <div className="AllButtons">
                    <div className="button">    
                        <button className="buttonMonument" onClick={() => 
                            setMonumentIsTrue(!monumentIsTrue)
                            && setRecipeIsTrue(false)
                            && setPictureIsTrue(false)
                            && setChat("Allons voir quels momunents nous cache ce magnifique pays!")}>
                        <img src={monument} alt="boutonMonument" />  
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonPicture"
                        onClick={() => 
                            setPictureIsTrue(!pictureIsTrue)
                            && setRecipeIsTrue(false)
                            && setMonumentIsTrue(false)
                            && setChat("Découvrons les joyaux de ce monde !")
                            && onClickPays()}>
                            <img src={photos} alt="boutonPhoto" />
                        </button>
                    </div> 
                    <div className="button">    
                        <button className="buttonRecipe" onClick={() => 
                            setRecipeIsTrue(!recipeIsTrue) 
                            && setMonumentIsTrue(false)
                            && setPictureIsTrue(false)
                            && setChat("Quelles recettes allons nous découvrir ?!")}>
                            <img src={recipe} alt="boutonRecette" /> 
                        </button>
                    </div> 
                    <div className="button">  
                    <Link to = "/"> 
                        <button className="buttonPlane" onClick={() => setChat(" On repart à l'aventure !")}>
                            <img src={plane} alt="boutonAvion" />
                        </button>
                    </Link>
                    </div>
                </div>
                <Slider isActive={isActive} selectPays={selectPays}/>
                { 
                    monumentIsTrue ? <Monuments/> : pictureIsTrue ? <Slide/> : recipeIsTrue ? <Recipe/> : null
                    
                    
                }
            </div>
    ) 
}
    
export default BoutonsTitrePays