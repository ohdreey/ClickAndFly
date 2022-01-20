import { useState } from 'react'
import './Bot.css'
import bot from "../assets/bot.png";

const Bot = ({chat}) => {
const [supp,setSupp] = useState("chatScreenBot")
function handleDeleteOnClick() {
    setSupp(!supp)
}
    return ( 
        <div className="bot">    
            <img src={bot} alt="boutonBot" onClick={handleDeleteOnClick} ></img> 
            <button className={supp ? "chatScreenBot" : "chatDelete"}>
                {chat}
            </button>   
        </div>
    )}
    
  
  export default Bot