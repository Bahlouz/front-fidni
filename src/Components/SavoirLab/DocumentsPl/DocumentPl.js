import React from 'react';
import { Container, Row, Col,Card} from 'react-bootstrap';
import './DocumentPl.css';

const DocumentPl = () => {
    const pdfList = [
        {
            title: 'Étude sur les violences sexuelles et les besoins en santé sexuelle et reproductive des jeunes et des femmes en situation de handicap',
            description: 'Ce document analyse les besoins en santé sexuelle et reproductive des femmes et des jeunes en situation de handicap.',
            link: 'http://example.com/pdf/etude-violences-sexuelles.pdf',  // Replace with the actual URL
        },
        {
            title: 'Accessibilité aux structures de prise en charge des violences basées sur le genre pour les femmes en situation de handicap',
            description: 'Ce rapport évalue l’accessibilité des structures de soutien aux femmes handicapées victimes de violence.',
            link: 'http://example.com/pdf/accessibilite-structures-violences.pdf',  // Replace with the actual URL
        },
        {
            title: 'Les défis de l’inclusion des personnes en situation de handicap dans les processus de plaidoyer',
            description: 'Une analyse des défis et des stratégies pour inclure les personnes en situation de handicap dans les activités de plaidoyer.',
            link: 'http://example.com/pdf/defis-inclusion-plaidoyer.pdf',  // Replace with the actual URL
        },
        {
            title: 'Guide pratique pour le plaidoyer en faveur des droits des personnes en situation de handicap',
            description: 'Un guide pratique pour mener des activités de plaidoyer en faveur des droits des personnes handicapées.',
            link: 'http://example.com/pdf/guide-pratique-plaidoyer.pdf',  // Replace with the actual URL
        },

    ];
  return (
    <div>
      <div className="background-image-DocumentPl"></div>
      <Container fluid className="DocumentPl-container">
        <div className="p-5 overlay-text-DocumentPl">
          <h1 className="DocumentPl-titre">Documents de plaidoyer</h1>
          <p className="DocumentPl-description">
          Vous allez trouver dans cette section des informations concernant les documents de plaidoyer. Elle a pour vocation de fournir des documents de conseils pratiques pour mener à bien une activité de plaidoyer en faveur de la défense des droits des personnes en situation de handicap.
          </p>
        </div>
        <Row className="pdf-list">
        {pdfList.map((pdf, index) => (
          <Col key={index} xs={12} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{pdf.title}</Card.Title>
                <Card.Text>{pdf.description}</Card.Text>
                <Card.Link href={pdf.link} target="_blank" rel="noopener noreferrer">
                  Voir PDF
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
};

export default DocumentPl;
