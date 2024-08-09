import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Entrepreneursitems } from './Entrepreneursitems'; // Import Entrepreneursitems data
import "./Wikid.css";
import "./Entrepreneurs.css"
const Entrepreneurs = () => {
    const location = useLocation();
    const currentPath = location.pathname.split('/').pop(); // Extract current page from URL
    const latestStory = Entrepreneursitems[0];

    // Updated links based on your provided categories
    const wikidlinks = [
        { title: 'Les acteurs sociaux et politiques', link: '/savoir-lab/wikiphedia/acteurs-sociaux-politiques', page: 'acteurs-sociaux-politiques' },
        { title: 'Les artistes', link: '/savoir-lab/wikiphedia/artistes', page: 'artistes' },
        { title: 'Les chercheurs', link: '/savoir-lab/wikiphedia/chercheurs', page: 'chercheurs' },
        { title: 'Les entrepreneurs', link: '/savoir-lab/wikiphedia/entrepreneurs', page: 'entrepreneurs' },
        { title: 'Les sportifs', link: '/savoir-lab/wikiphedia/sportifs', page: 'sportifs' }
    ];

    return (
        <>
            <div className="background-image-entrepreneurs">
                <div className="overlay-text-entrepreneurs">
                    <h1 className="entrepreneurs-titre">Les entrepreneurs </h1>
                    <p className="p-5 entrepreneurs-description">
                        Découvrez des profils détaillés d'artistes, d'athlètes paralympiques, et d'entrepreneurs de scientifiques et d'autres profils de personnes en situation de handicap, Explorez leurs réalisations, parcours et contributions dans divers domaines pour vous inspirer et vous informer.
                    </p>
                </div>

                <div className="button-container">
                    {wikidlinks.map((item, index) => (
                        <Button
                            key={index}
                            className={`wikid-button ${currentPath === item.page ? 'active' : ''}`}
                            href={item.link} // Navigate to the new page
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>
            </div>

            <Container className="mt-4">
                <Row>
                    <Col>
                        <h1 className="Entrepreneurs-title">Histoires des entrepreneurs</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* Display the latest success story */}
                        <Card className="mb-4">
                            <Card.Img variant="top" src={latestStory.imageUrl} />
                            <Card.Body>
                                <Card.Title>{latestStory.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{latestStory.date}</Card.Subtitle>
                                <Card.Text>{latestStory.content}</Card.Text>
                                <Button variant="primary" href={`/Entrepreneurs/${latestStory.id}`}>Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {/* Display remaining success stories */}
                    {Entrepreneursitems.slice(1).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card className="h-100">
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                                    <Card.Text>{item.content}</Card.Text>
                                    <Button variant="primary" href={`/Entrepreneurs/${item.id}`}>Lire plus</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Entrepreneurs;
