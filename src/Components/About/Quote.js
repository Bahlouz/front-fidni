import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Quote.css";
import unescoImage from './eric.jpg';
import beforefooter from "../../Assets/beforefooter.svg";
function QuoteComponent() {
  return (
    <Container fluid className=' p-0 testimony-container'>
    <Container fluid className="quote-container">
      <Row>
        <Col xs={12} className="text-center">
          <div className="quote-text">
            Chaque voix mérite d'être entendue
          </div>
        </Col>
      </Row>
      <Row className="align-items-start">
        <Col md={4} className="quote-container-left">
          <div className="quote-author">
            <div className="quote-mot">
            Mot d'Eric FALT:
            </div>
            Directeur régional du bureau
            <br />
            de l'UNESCO pour le Maghreb
          </div>
          <img src={unescoImage} alt="Eric Falt" className="unesco-logo" />
        </Col>
        <Col md={6} className="quote-content">
          <div className="quote-body">
            <p>
              Portée par la conviction que chaque voix mérite d'être entendue,
              I'UNESCO, Organisation des Nations Unies pour l'éducation, la
              science et la culture, s'est engagée sur le chantier d'une
              communication plus des personnes en situation de handicap en
              Tunisie.
            </p>
            <p>
              Ce voyage vers l'inclusion a débuté avec la signature pionnière de
              la Tunisie en 2007 et sa ratification dès 2008 de la Convention
              relative aux droits des personnes handicapées, et l'inclusion
              historique dans la Constitution tunisienne de l'obligation de l'État de
              protéger les personnes handicapées contre toute discrimination et
              de prendre des mesures qui garantissent leur pleine inclusion dans
              la société. Malgré des progrès notables, les rapports récents du
              Comité des droits des personnes handicapées révèlent un écart
              entre les aspirations tunisiennes et la réalisation de la Convention,
              notamment en matière de dignité des personnes handicapées dans
              les médias. Cette plateforme est notre réponse à cet impératif, et
              illustre notre engagement à briser les barrières des préjugés, en
              commençant par la transformation des mentalités.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid className="quote-container">
  <Row>

  </Row>
  <Row className="align-items-start">
    <Col md={6} className="quote-content">
      <div className="quote-body">
        <p>
          Portée par la conviction que chaque voix mérite d'être entendue,
          I'UNESCO, Organisation des Nations Unies pour l'éducation, la
          science et la culture, s'est engagée sur le chantier d'une
          communication plus des personnes en situation de handicap en
          Tunisie.
        </p>
        <p>
          Ce voyage vers l'inclusion a débuté avec la signature pionnière de
          la Tunisie en 2007 et sa ratification dès 2008 de la Convention
          relative aux droits des personnes handicapées, et l'inclusion
          historique dans la Constitution tunisienne de l'obligation de l'État de
          protéger les personnes handicapées contre toute discrimination et
          de prendre des mesures qui garantissent leur pleine inclusion dans
          la société. Malgré des progrès notables, les rapports récents du
          Comité des droits des personnes handicapées révèlent un écart
          entre les aspirations tunisiennes et la réalisation de la Convention,
          notamment en matière de dignité des personnes handicapées dans
          les médias. Cette plateforme est notre réponse à cet impératif, et
          illustre notre engagement à briser les barrières des préjugés, en
          commençant par la transformation des mentalités.
        </p>
      </div>
    </Col>
    <Col md={4} className="quote-container-left">
      <div className="quote-author">
        <div className="quote-mot">
            Mot de Mohamed Mansouri :
        </div>
        Président et Fondateur
        <br />
        de ​l’association IBSAR
      </div>
      <img src={unescoImage} alt="Eric Falt" className="unesco-logo" />
    </Col>
  </Row>
</Container>
<img className="before-footer" src={beforefooter} aria-hidden="true" />    
  </Container>
  );
}

export default QuoteComponent;
