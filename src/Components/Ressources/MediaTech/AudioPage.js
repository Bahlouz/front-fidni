import React from "react";
import Audio from "./Audio";
import backaudio from"../../../Assets/backaudio.jpg";
import { audioFiles } from "./audiofiles";
import "./audio.css"
import { Container } from "react-bootstrap";
function AudioPage(){
    return(
            <>
            <div className="audio-page">
                <div className="audio-image">
                <img src={backaudio}></img>
                </div> 
                <Container fluid className="p-0 audio-list">
      {audioFiles.map((file, index) => (
        <Audio
          key={index}
          audioSrc={file.url}
          name={file.name}
          description={file.description}
        />
      ))}
    </Container>
    </div>
            </>
    );
}
export default AudioPage;