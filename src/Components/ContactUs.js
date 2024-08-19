import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import backnavhead from "../Assets/back navhead.jpg";
const ContactUs = () => {
  return (
    <>
    <Row>
        <img className="backnavhead" src={backnavhead} alt="Background" />
    </Row>
    <Container fluid className="p-5 bg-light">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4">Contactez Nous</h1>
          <p className="lead">
            Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName" className="mb-4">
              <Form.Label>Nom & Prénom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom et prénom" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-4">
              <Form.Label>Adresse Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-4">
              <Form.Label>Sujet</Form.Label>
              <Form.Control type="text" placeholder="Entrez le sujet" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Écrivez votre message ici..." />
            </Form.Group>

            <Button variant="primary" type="submit" size="lg" className="w-100">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ContactUs;
