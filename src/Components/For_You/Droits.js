import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import './Droits.css';

const Droits = () => {
  const cardData = [
    {
      title: "Convention relative aux Droits des Personnes Handicapées (CDPH)",
      description: "La Convention relative aux droits des personnes handicapées (CDPH), adoptée le 13 décembre 2006 par l’Assemblée générale des Nations Unies à New York, a pour objet de « promouvoir, protéger et assurer la pleine et égale jouissance de tous les droits de l’homme et de toutes les libertés fondamentales par les personnes handicapées et de promouvoir le respect de leur dignité intrinsèque ».",
      link: '/services-et-droits/convention'
    },
    {
      title: 'Cadre réglementaire concernant le handicap en Tunisie ',
      description: "En ratifiant la Convention relative aux droits des personnes handicapées le 2 avril 2008, la Tunisie affirmait un engagement fort envers la protection et la promotion des droits des personnes en situation de handicap. Des avancées significatives ont ensuite été enregistrées avec l'intégration de ces principes dans la Constitution tunisienne, en 2014 et réaffirmée en 2022, consacrant ainsi la protection des personnes handicapées contre toute forme de discrimination, conformément à l'article 54 qui stipule que « l’État protège les personnes handicapées contre toute discrimination et prend toutes les mesures propres à leur garantir une entière intégration au sein de la société ». ",
      link: '/services-et-droits/cadre'
    },

  ];

  return (
    <Container fluid className="droits-container">
      <div className="background-image-droits">
        <div className="p-5 overlay-text-droits">
          <h1 className="droits-titre">DROITS ET LEGISLATION</h1>
          <p className="droits-description">Vous allez trouver dans cette section des informations sur les droits des personnes handicapées en Tunisie, à savoir la Convention relative aux Droits des Personnes Handicapées (CDPH) et le cadre légal en Tunisie.</p>
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
