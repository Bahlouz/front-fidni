import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './UsefulLinks.css';
import backnavhead from "../../Assets/back navhead.jpg"
const liensUtiles = [
    {
        id: 1,
        titre: 'Handicap International',
        description: "Handicap International est une organisation non gouvernementale (ONG) fondée en 1982. Elle travaille à améliorer les conditions de vie des personnes handicapées et vulnérables dans des situations de pauvreté et d'exclusion, de conflits et de catastrophes. L'organisation mène des projets dans plus de 60 pays pour fournir des soins de réadaptation, des prothèses, et des services de soutien, et elle plaide pour les droits des personnes handicapées au niveau international.",
        url: 'https://www.handicap-international.fr/',

    },
    {
        id: 2,
        titre: "Conférence Internationale sur l'Inclusion des Personnes en Situation de Handicap",
        description: "Découvrez la Conférence Internationale sur l'Inclusion des Personnes en Situation de Handicap, un événement incontournable prévu pour les 27 et 28 août 2024 au siège de l'UNESCO à Paris. Cette conférence, en parallèle avec les Jeux Paralympiques de Paris 2024, explore le rôle transformateur du para-sport dans l'inclusion sociale.",
        url: 'https://www.unesco.org/fr/articles/conference-internationale-sur-linclusion-des-personnes-en-situation-de-handicap-exploiter-limpact#:~:text=L%27inclusion%20des%20personnes%20en%20situation%20de%20handicap%20est%20une,du%20sport%20(MINEPS%20VII)',
    },
    {
        id: 3,
        titre: 'Inclusive Policy Lab',
        description: "Inclusive Policy Lab est une initiative de l'UNESCO créée pour promouvoir des politiques inclusives et équitables à l’échelle mondiale. Le laboratoire rassemble des chercheurs, des décideurs politiques et des praticiens pour développer et partager des connaissances et des stratégies en matière de politiques publiques inclusives. Il vise à encourager la justice sociale, l'égalité des genres et l'inclusion dans divers contextes sociaux et économiques.",
        url: 'https://en.unesco.org/inclusivepolicylab/',
    },
    {
        id: 4,
        titre: 'Handilab',
        description: "Handilab est une plateforme dédiée à l'innovation et à la recherche dans le domaine du handicap. Elle est conçue pour promouvoir des solutions technologiques et des initiatives innovantes qui améliorent la qualité de vie des personnes en situation de handicap. Handilab travaille à la création et à la diffusion d'outils et de dispositifs qui favorisent l'inclusion et l'accessibilité.",
        url: 'https://www.handilab.com/',
    },
    {
        id: 5,
        titre: 'Handi-Medic',
        description: "Handi-Medic est une entreprise spécialisée dans la fourniture de solutions adaptées aux besoins des personnes en situation de handicap. Fondée pour améliorer la qualité de vie des individus, Handi-Medic propose une gamme de produits médicaux et d'aides techniques, incluant des équipements de réhabilitation et des dispositifs pour l'autonomie.",
        url: 'http://handi-medic.com/',
    }
];

const LiensUtiles = () => {
    return (
        <Container fluid className="liens-utiles-container">
            
        <Container className="p-0 liens-utiles-content">
            <Row>
                <Col>
                    <h1 className="liens-utiles-titre">Liens Utiles</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="liens-utiles-description">Explorez une multitude de ressources pour élargir vos connaissances et obtenir de l'aide. Consultez des renseignements sur divers handicaps, des outils d'aide, des services de santé spécialisés, et des contacts vers des groupes de soutien. Profitez d'opportunités d'apprentissage, de formation, et rejoignez des communautés en ligne pour partager et créer des liens. Parcourez cette page pour découvrir un large éventail de ressources et de solidarité.</p>
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
        </Container>
    );
};

export default LiensUtiles;
