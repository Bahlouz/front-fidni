import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { wikiditems } from './wikiditems'; // Import wikiditems data
import "./Wikid.css"
const Wikidi = () => {
    // Assuming wikiditems is an array of success story objects

    // Get the latest success story (assuming it's the first one in the array)
    const latestStory = wikiditems[0];

    return (
        <>
        <div className="background-image-wikiphedia">
        <div className="overlay-text-wikiphedia">
          <h1 className="wikiphedia-titre">Wikiphedia</h1>
          <p className="p-5 wikiphedia-description"> Découvrez des profils détaillés d'artistes, d'athlètes paralympiques, et d'entrepreneurs de scientifiques et d'autres profils de personnes en situation de handicap , Explorez leurs réalisations, parcours et contributions dans divers domaines pour vous inspirer et vous informer.</p>
        </div>
      </div>
        <Container className="mt-4">
           
            <Row>
                <Col>
                    <h1 className="wikidi-title">Histoires de Réussite</h1>
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
                            <Button variant="primary" href={`/wikidi/${latestStory.id}`}>Lire plus</Button>
                            {/* Assuming latestStory has an id for linking to single story page */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                {/* Display remaining success stories */}
                {wikiditems.slice(1).map(item => (
                    <Col key={item.id} md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                                <Card.Text>{item.content}</Card.Text>
                                <Button variant="primary" href={`/wikidi/${item.id}`}>Lire plus</Button>
                                {/* Link each story to its single story page */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );
};

export default Wikidi;
