import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { wikiditems } from './wikiditems';

const SingleWikidi = () => {
    const { storyId } = useParams();

    const storyItem = wikiditems.find(item => item.id === parseInt(storyId));

    if (!storyItem) {
        return <div>Histoire non trouvée</div>; 
    }

    return (
        <Container className="single-wikidi-container mt-4">
            <Card className="mb-4">
                <Card.Img variant="top" src={storyItem.imageUrl} className="single-wikidi-image" />
                <Card.Body>
                    <Card.Title className="single-wikidi-title">{storyItem.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{storyItem.date}</Card.Subtitle>
                    <Card.Text className="single-wikidi-content">{storyItem.content}</Card.Text>
                    <Button variant="primary" href="/wikidi">Retour aux histoires</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SingleWikidi;
