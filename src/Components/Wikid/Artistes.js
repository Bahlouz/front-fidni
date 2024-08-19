import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Artistesitems } from './Artistesitems'; // Import Artistesitems data
import "./Wikid.css";
import "./Artistes.css";

const Artistes = () => {
    const location = useLocation();
    const currentPath = location.pathname.split('/').pop(); // Extract current page from URL
    const latestStory = Artistesitems[0];

    // Function to format description content
    const formatDescription = (content) => {
        // Replace <b> tags with <strong> tags for better semantics
        // Replace <br> and <br /> with line breaks
        return content
            .replace(/<b>/g, '<strong>')
            .replace(/<\/b>/g, '</strong>')
            .replace(/<br\s*\/?>/g, '<br />');
    };

    // Function to extract the first line of formatted content
    const getFirstLine = (content) => {
        // Format the description
        const formattedContent = formatDescription(content);
        // Create a temporary div to use its textContent property
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = formattedContent;
        // Get the first line
        const firstLine = tempDiv.textContent.split('\n')[0];
        return firstLine;
    };

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
            <div className="background-image-artistes">
                <div className="overlay-text-artistes">
                    <h1 className="artistes-titre">Les artistes</h1>
                    <p className="p-5 artistes-description">
                    Découvrez des profils détaillés d'artistes talentueux, explorez leurs œuvres, parcours créatifs et contributions au monde de l'art. Laissez-vous inspirer par leurs réalisations et leurs approches uniques.
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
                        <h1 className="Artistes-title">Histoires des artistes</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* Display the latest success story */}
                        <Card className="mb-4 ">
                            <Card.Img variant="top" src={latestStory.imageUrl} />
                            <Card.Body>
                                <Card.Title>{latestStory.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{latestStory.date}</Card.Subtitle>
                                <Card.Text className="single-line-text">
                                    {getFirstLine(latestStory.content)}
                                </Card.Text>
                                <Button variant="primary" href={`/savoir-lab/wikiphedia/${latestStory.title}`}>Lire plus</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {/* Display remaining success stories */}
                    {Artistesitems.slice(1).map(item => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card className="h-100">
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                                    <Card.Text className="single-line-text">
                                        {getFirstLine(item.content)}
                                    </Card.Text>
                                    <Button variant="primary" href={`/savoir-lab/wikiphedia/${item.title}`}>Lire plus</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Artistes;
