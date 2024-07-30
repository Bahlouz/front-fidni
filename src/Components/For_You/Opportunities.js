import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Opportunities.css';
import backnavhead from "../../Assets/back navhead.jpg";

const volunteerOpportunities = [
    {
        id: 1,
        title: 'Bénévole pour des événements accessibles',
        organization: 'Centre Communautaire Local',
        description: 'Aidez à organiser et à assister à des événements accessibles aux personnes handicapées.'
    },
    {
        id: 2,
        title: 'Soutenir les initiatives d\'accessibilité',
        organization: 'Fondation Nationale du Handicap',
        description: 'Participez à des initiatives visant à améliorer l\'accessibilité dans les espaces publics et les plateformes en ligne.'
    },
    {
        id: 3,
        title: 'Fournir un soutien technique pour les dispositifs d\'assistance',
        organization: 'Tech pour Tous',
        description: 'Aidez à installer et à dépanner les dispositifs technologiques d\'assistance pour les personnes handicapées.'
    }
];


const Opportunities = () => {
    return (
        <>       
        <Row>
        <img className="backnavhead" src={backnavhead} aria-hidden="true" />
        </Row>
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1 className="opportunities-title">Opportunités de Bénévolat</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="liens-utiles-description">Explorez les options de travail, de formation, de financement et de bénévolat pour les personnes handicapées en Tunisie. Encouragez l'intégration et le développement en saisissant toutes les occasions d'avancer dans votre carrière et votre vie personnelle.
                    </p>
                </Col>
            </Row>
            <Row>
                {volunteerOpportunities.map((opportunity) => (
                    <Col md={4} key={opportunity.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{opportunity.title}</Card.Title>
                                <Card.Text>{opportunity.organization}</Card.Text>
                                <Card.Text>{opportunity.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </>    
    );
};

export default Opportunities;
