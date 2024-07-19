import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './UsefulLinks.css';

const liensUtiles = [
    {
        id: 1,
        titre: 'Directives d\'Accessibilité',
        description: 'Découvrez les directives et les meilleures pratiques en matière d\'accessibilité web.',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/',

    },
    {
        id: 2,
        titre: 'Technologie d\'Assistance',
        description: 'Explorez les outils et technologies pour assister les personnes en situation de handicap.',
        url: 'https://www.abilitynet.org.uk/',
    },
    {
        id: 3,
        titre: 'Modèles de Conception Accessibles',
        description: 'Découvrez des modèles de conception pour créer des interfaces accessibles.',
        url: 'https://www.w3.org/TR/wai-aria-practices-1.2/',
    }
];

const LiensUtiles = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1 className="liens-utiles-titre">Liens Utiles</h1>
                </Col>
            </Row>
            <Row>
                {liensUtiles.map((lien) => (
                    <Col md={4} key={lien.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{lien.titre}</Card.Title>
                                <Card.Text>{lien.description}</Card.Text>
                                <Card.Link href={lien.url} target="_blank" rel="noopener noreferrer">Visiter le Lien</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default LiensUtiles;
