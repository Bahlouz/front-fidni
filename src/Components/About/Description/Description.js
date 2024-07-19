import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEye, FaBullseye, FaHandsHelping } from 'react-icons/fa';
import './Description.css';

const DescriptionOfConcept = () => {
    return (
        <Container as="main" className="mt-4 description" aria-labelledby="concept-title">
            <Row>
                <Col>
                    <h1 tabIndex="1" id="concept-title" className="concept-title">Description du Concept</h1>
                    <p tabIndex="2" id="concept-description" className="concept-description">
                        Nous explorons les idées fondamentales qui animent notre mission et notre vision. Notre concept repose sur la création d'une plateforme inclusive et accessible pour tous les utilisateurs, avec un accent particulier sur l'assistance aux personnes handicapées grâce à des technologies innovantes et un design réfléchi.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                    <section aria-labelledby="vision-title" className="concept-section">
                        <FaEye className="concept-icon" aria-hidden="true" />
                        <h2 tabIndex="3" id="vision-title">Notre Vision</h2>
                        <p tabIndex="4">
                        La plateforme FIDNI est une plateforme en ligne centralisée et
accessible visant à faciliter la collecte, la centralisation et la diffusion d'informations
pertinentes, de données, d'analyses et de recherches stratégiques sur le handicap,
en réponse à l'impératif d'une meilleure accessibilité à l'information, et à la prise de
décision politique éclairée.

                        </p>
                    </section>
                </Col>
                <Col md={4}>
                    <section aria-labelledby="mission-title" className="concept-section">
                        <FaBullseye className="concept-icon" aria-hidden="true" />
                        <h2 tabIndex="5" id="mission-title">Notre Mission</h2>
                        <p tabIndex="6">
                        <li>Faciliter l&#39;accès à l&#39;information.<br /> </li>  
                    <li>Promouvoir l&#39;adoption de politiques inclusives fondées sur des recherches et
                    ancrées dans les connaissances scientifiques.<br /></li>
                    <li>Favoriser les échanges entre les personnes en situation de handicap en
                    Tunisie, les chercheurs, les journalistes, les acteurs de la société civile et les
                    décideurs.</li>
                        </p>
                    </section>
                </Col>
                <Col md={4}>
                    <section aria-labelledby="values-title" className="concept-section">
                        <FaHandsHelping className="concept-icon" aria-hidden="true" />
                        <h2 tabIndex="7" id="values-title">Valeurs Fondamentales</h2>
                        <ul>
                            <li tabIndex="8">Inclusion : Nous croyons en un monde où chacun a un accès égal à l'information et aux opportunités.</li>
                            <li tabIndex="9">Innovation : Nous nous engageons à améliorer continuellement et à innover pour répondre aux besoins de nos utilisateurs.</li>
                            <li tabIndex="10">Empowerment : Nous visons à autonomiser les individus en leur fournissant les outils dont ils ont besoin pour réussir.</li>
                        </ul>
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default DescriptionOfConcept;
