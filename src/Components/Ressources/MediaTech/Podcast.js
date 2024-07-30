import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Podcast.css';
import backpodcast from"../../../Assets/backpodcast.jpg";
const podcastEpisodes = [
    {
        id: 1,
        title: 'Épisode 1: Briser les Préjugés sur le Handicap',
        date: '1 Août 2024',
        description: 'Dans cet épisode, nous explorons les préjugés courants liés au handicap et comment les déconstruire pour créer une société plus inclusive.',
        audioUrl: '/path/to/episode1.mp3',
        downloadUrl: '/path/to/episode1.mp3'
    },
    {
        id: 2,
        title: 'Épisode 2: Témoignages de Vie: Surmonter les Obstacles',
        date: '8 Août 2024',
        description: 'Écoutez les histoires inspirantes de personnes vivant avec un handicap et comment elles ont surmonté les défis quotidiens.',
        audioUrl: '/path/to/episode2.mp3',
        downloadUrl: '/path/to/episode2.mp3'
    },
    {
        id: 3,
        title: 'Épisode 3: Accessibilité Numérique: Quoi de Neuf?',
        date: '15 Août 2024',
        description: 'Nous discutons des dernières avancées en matière d’accessibilité numérique et des outils qui facilitent la vie des personnes en situation de handicap.',
        audioUrl: '/path/to/episode3.mp3',
        downloadUrl: '/path/to/episode3.mp3'
    },
]
const Podcast = () => {
    return (
        <>
         <div className="audio-image">
        <img src={backpodcast}></img>
        </div>
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
        </> 
    );
};

export default Podcast;
