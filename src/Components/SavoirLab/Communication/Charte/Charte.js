import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import './Charte.css';

const Droits = () => {
  const cardData = [
    {
      title: "",
      description: "Adoptée par la « Coalition nationale pour des médias inclusifs et accessibles aux personnes handicapées », la charte vise à promouvoir l'inclusion et l'accessibilité des personnes handicapées dans les médias tunisiens.Les principaux acteurs de cette initiative comprennent des institutions de recherche et de formation, des organisations professionnelles, des organismes de régulation et d'autorégulation des médias, des associations de défense des droits des personnes handicapées, des organisations internationales et de nombreux médias tunisiens, ainsi que des personnalités médiatiques et des membres de l'Assemblée des représentants du peuple. Avec pour objectifs clés la création d'un comité de suivi du traitement médiatique des questions liées au handicap, l'organisation de campagnes de plaidoyer régulières et l'institution d'un prix professionnel annuel, le 'Prix de l'accessibilité et de l'inclusion', pour honorer les initiatives médiatiques exemplaires.",
      link: '/savoir-lab/communication-inclusive/charte-nationale/coalition'
    },

  ];

  return (
    <Container fluid className="droits-container">
      <div className="background-image-Communication">
        <div className="p-5 overlay-text-droits">
          <h1 className="droits-titre">La charte nationale pour des médias inclusifs et accessibles aux personnes handicapées en Tunisie </h1>
        </div>
      </div>
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Card className="droit-card full-width-card mb-4" key={index}>
            <Card.Body>
              <Card.Title className="droit-card-title">{card.title}</Card.Title>
              <Card.Text className="droit-card-description">{card.description}</Card.Text>
              <Button variant="primary" className="droit-card-button" href={card.link}> 
              <span class="droits-button-text">En apprendre plus </span>
              <span class="droits-button-icon">  →</span></Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Droits;
