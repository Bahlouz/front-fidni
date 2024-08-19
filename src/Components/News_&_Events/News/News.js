import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './News.css';
import { newsItems } from './newsItems';

const News = () => {
    const latestNews = newsItems[0]; // Assuming the first item is the latest news

    return (
        <Container fluid className="news-container">
            <Container fluid className="news-content">
                <Row>
                    <Col>
                        <h1 className="news-title">Actualités</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="news-description">
                            Explorez les dernières mises à jour sur l'intégration et l'accessibilité des personnes handicapées en Tunisie. Tenez-vous informé des récentes politiques, actions du gouvernement, événements à venir, initiatives locales, et histoires motivantes. Découvrez des outils pratiques et des conseils pour accéder aux différents soutiens disponibles.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="news-une">A La Une</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={latestNews.imageUrl} />
                            <Card.Body>
                                <Card.Title>{latestNews.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{latestNews.date}</Card.Subtitle>
                                <Card.Text className="news-content-desc">
                                    {latestNews.content}
                                </Card.Text>
                                <Button variant="primary" href={`/news/${latestNews.id}`}>Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {newsItems.slice(1).map((item) => (
                        <Col md={4} key={item.id} className="mb-4">
                            <Card className="h-100">
                                <Card.Img className='img-news' variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                                    <Card.Text className="news-content-desc">
                                        {item.content}
                                    </Card.Text>
                                    <Button variant="primary" href={`/news/${item.id}`}>Lire plus</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default News;
