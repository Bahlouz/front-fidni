import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './News.css';
import { newsItems } from './newsItems';


const News = () => {
    const latestNews = newsItems[0]; // En supposant que le premier élément est la dernière nouvelle
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1 className="news-title">Dernières Nouvelles</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="mb-4">
                        <Card.Img variant="top" src={latestNews.imageUrl} />
                        <Card.Body>
                            <Card.Title>{latestNews.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{latestNews.date}</Card.Subtitle>
                            <Card.Text>{latestNews.content}</Card.Text>
                            <Button variant="primary" href={`/news/${latestNews.id}`}>Lire plus</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                {newsItems.slice(1).map((item) => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                                <Card.Text>{item.content}</Card.Text>
                                <Button variant="primary" href={`/news/${item.id}`}>Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default News;
