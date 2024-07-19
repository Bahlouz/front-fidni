import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { newsItems } from "../News_&_Events/News/newsItems";
import DescriptionOfConcept from "../About/Description/Description";

function Home2() {
  const latestNews = newsItems[0]; // Assuming the first item is the latest news

  return (
    <section>
      <section id="description">
      <DescriptionOfConcept />
      </section>
      <section className="statistics-section">
  <h1 className="home-chiffre">Chiffres Clés</h1>
  <Row className="justify-content-center">
    <Col md={4}>
      <div className="stat-circle">
        <h3 className="stat-number">20422</h3>
        <p>Personnes handicapées</p>
      </div>
    </Col>
    <Col md={4}>
      <div className="stat-circle">
        <h3 className="stat-number">302</h3>
        <p>Gouvernances locales</p>
      </div>
    </Col>
    <Col md={4}>
      <div className="stat-circle">
        <h3 className="stat-number">103</h3>
        <p>Violations reportées</p>
      </div>
    </Col>
  </Row>
</section>

      <Container fluid className="home-about-section" id="about">
        <Row className="mb-4">
          <Col md={8}>
            <h1>À La Une</h1>
            <Card>
              <Card.Img variant="top" src={latestNews.imageUrl} />
              <Card.Body>
                <Card.Title>{latestNews.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{latestNews.date}</Card.Subtitle>
                <Card.Text>{latestNews.content}</Card.Text>
                <Link to={latestNews.readMoreUrl} className="btn btn-primary">Lire plus</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <h2>Autres Nouvelles</h2>
            <ListGroup>
              {newsItems.slice(1, 7).map((item) => (
                <ListGroup.Item key={item.id}>
                  <Link to={item.readMoreUrl}>
                    <h5>{item.title}</h5>
                  </Link>
                  <p className="text-muted">{item.date}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <p>
        </p>
      </Container>
    </section>
  );
}

export default Home2;
