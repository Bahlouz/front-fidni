import React from "react";
import Audio from "./Audio";
import { audioFiles } from "./audiofiles";
import "./audio.css"
import { Container,Row,Col } from "react-bootstrap";
function AudioPage(){
    return(
            <div>
            <Container className="mt-4">
            <Row>
                <Col>
                    <h1 className="podcasts-title">Derniers Épisodes d'audio</h1>
                </Col>
            </Row>
            </Container>
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
    );
}
export default AudioPage;