import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Podcast.css';

const podcastEpisodes = [
    {
        id: 1,
        title: 'Épisode 1: Introduction au Podcasting',
        date: '1 Juillet 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        audioUrl: '/path/to/episode1.mp3',
        downloadUrl: '/path/to/episode1.mp3'
    },
    {
        id: 2,
        title: 'Épisode 2: Plongée Profonde dans les Crochets React',
        date: '7 Juillet 2024',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        audioUrl: '/path/to/episode2.mp3',
        downloadUrl: '/path/to/episode2.mp3'
    },
    {
        id: 3,
        title: 'Épisode 3: Interview avec un Invité Spécial',
        date: '14 Juillet 2024',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        audioUrl: '/path/to/episode3.mp3',
        downloadUrl: '/path/to/episode3.mp3'
    }
];

const Podcast = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1 className="podcasts-title">Derniers Épisodes de Podcast</h1>
                </Col>
            </Row>
            <Row>
                {podcastEpisodes.map((episode) => (
                    <Col md={4} key={episode.id} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>{episode.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{episode.date}</Card.Subtitle>
                                <Card.Text>{episode.description}</Card.Text>
                                <audio controls>
                                    <source src={episode.audioUrl} type="audio/mpeg" />
                                    Votre navigateur ne prend pas en charge l'élément audio.
                                </audio>
                                <Button variant="primary" href={episode.downloadUrl} download>Télécharger</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Podcast;
