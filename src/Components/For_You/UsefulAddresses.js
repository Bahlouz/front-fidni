import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './UsefulAddresses.css';
import backnavhead from "../../Assets/back navhead.jpg";

const adressesUtiles = [
    {
        id: 4,
        titre: "Centre de Santé de la Procréation - Gouvernorat d'Ariana",
        adresse: "02, Rue Taher Azouidine, 2080 Ariana",
        telephone: "71716873",
        email: ""
    },
    {
        id: 5,
        titre: "Centre de Santé de la Procréation - Gouvernorat de Bizerte",
        adresse: "14, Rue Taher Sfar, 7000 Bizerte",
        telephone: "72431653",
        email: ""
    },
    {
        id: 6,
        titre: "Centre de Santé de la Procréation - Gouvernorat de Béja",
        adresse: "Rue Habib Bourguiba, Béja",
        telephone: "78442604",
        email: ""
    }
];


const AdressesUtiles = () => {
    return (
        <Container fluid className="p-0 address-container">
        <Row>

        </Row>
        <Container className="address-content">
            <Row>
                <Col>
                    <h1 className="adresses-utiles-titre">Adresses Utiles</h1>
                </Col>
            </Row>
            <Row>
                {adressesUtiles.map((adresse) => (
                    <Col md={4} key={adresse.id} className="mb-4">
                        <Card className="adress-card">
                            <Card.Body>
                                <Card.Title>{adresse.titre}</Card.Title>
                                <Card.Text>{adresse.adresse}</Card.Text>
                                <Card.Text>Téléphone : {adresse.telephone}</Card.Text>
                                
                            </Card.Body>
                            
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </Container>
    );
};

export default AdressesUtiles;
