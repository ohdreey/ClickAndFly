import ReactAudioPlayer from "react-audio-player"
import "./LecteurAudio.css"

const LecteurAudio = ({audio}) => {

return (
  <div>
    <ReactAudioPlayer className="audioPlayer" src={audio} controls/>
  </div>

)
}

export default LecteurAudio