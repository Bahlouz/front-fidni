import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './UsefulAddresses.css';

const adressesUtiles = [
    {
        id: 1,
        titre: 'Services Locaux pour les Personnes Handicapées',
        adresse: '123 Main St, Ville, Pays',
        telephone: '+1234567890',
        email: 'info@example.com'
    },
    {
        id: 2,
        titre: 'Agence Nationale pour les Personnes Handicapées',
        adresse: '456 Elm St, Ville, Pays',
        telephone: '+0987654321',
        email: 'support@example.com'
    },
    {
        id: 3,
        titre: 'Fondation Internationale pour les Personnes Handicapées',
        adresse: '789 Oak St, Ville, Pays',
        telephone: '+1122334455',
        email: 'foundation@example.com'
    }
];

const AdressesUtiles = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1 className="adresses-utiles-titre">Adresses Utiles</h1>
                </Col>
            </Row>
            <Row>
                {adressesUtiles.map((adresse) => (
                    <Col md={4} key={adresse.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{adresse.titre}</Card.Title>
                                <Card.Text>{adresse.adresse}</Card.Text>
                                <Card.Text>Téléphone : {adresse.telephone}</Card.Text>
                                <Card.Text>Email : {adresse.email}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <iframe
                                    width="100%"
                                    height="200"
                                    frameBorder="0" 
                                    style={{ border: 0 }}
                                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(adresse.adresse)}`}
                                    allowFullScreen>
                                </iframe>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AdressesUtiles;
