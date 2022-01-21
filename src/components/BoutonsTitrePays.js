import { useState } from "react";
import {  Outlet, Link } from "react-router-dom";
import LecteurAudio from "./LecteurAudio";
import "./BoutonsTitrePays.css";
import monument from "../assets/monument.png"
import photos from "../assets/photos.png";
import plane from "../assets/monde.png";
import recipe from "../assets/recipe.png";
import Monuments from "./Monuments"
import Recipe from "./Recipe";
import Slide from "./Slide"


const BoutonsTitrePays = ({setChat, audio, id, selectPays, country, dataPays}) => {

    const [isActive, setIsActive] = useState(false);
    const [monumentIsTrue, setMonumentIsTrue] = useState(false)
    const [recipeIsTrue, setRecipeIsTrue] = useState(false)
    const [pictureIsTrue, setPictureIsTrue] = useState(false)

    const onClickPays = () => {
        setIsActive(!isActive);
        setPictureIsTrue(!pictureIsTrue)
        setRecipeIsTrue(false)
        setMonumentIsTrue(false)
        setChat("Découvrons les joyaux de ce monde !")
        console.log("Marche stp", isActive);
    }
    return (  
        <div className="ButtonsAndTitle">
            <div className="NameCountry">
                
                <h1>{country}</h1>
                <LecteurAudio audio={audio} />
            </div>
            <div className="AllButtons">
                <Link to={`/pays/monument/${id}`}>
                    <div className="button">    
                        <button className="buttonMonument" onClick={() => 
                            setMonumentIsTrue(!monumentIsTrue)
                            && setRecipeIsTrue(false)
                            && setPictureIsTrue(false)
                            && setChat("Allons voir quels momunents nous cache ce magnifique pays!") 
                        }
                            >
                            <img src={monument} alt="boutonMonument" />  
                        </button>
                    </div> 
                </Link>
                <div className="button">    
                    <Link to='/pays/picture'>
                        <button className="buttonPicture" 
                            onClick={() => 
                            onClickPays()}
                        >
                            <img src={photos} alt="boutonPhoto" />
                        </button>
                    </Link>
                </div> 
                <div className="button">
                    <Link to={`/pays/recipe/${id}`}>
                        <button className="buttonRecipe" onClick={() => 
                            setRecipeIsTrue(!recipeIsTrue) 
                            && setMonumentIsTrue(false)
                            && setPictureIsTrue(false)
                            && setChat("Quelles recettes allons nous découvrir ?!")}
                        >
                            <img src={recipe} alt="boutonRecette" /> 
                        </button>
                    </Link>
                </div>
                <div className="button">  
                    <Link to = "/"> 
                        <button className="buttonPlane"
                            onClick={() => setChat(" On repart à l'aventure !")}
                        >
                            <img src={plane} alt="boutonAvion" />
                        </button>
                    </Link>
                </div>
            </div>
            <Slide selectPays={selectPays} isActive={isActive}/>
            <Outlet />
        </div>
    )
}
    
export default BoutonsTitrePays