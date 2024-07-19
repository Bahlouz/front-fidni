import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import pressCornerData from './PressCornerData.jsx';
import './PressCorner.css';

const SinglePressRelease = () => {
    const { pressId } = useParams();

    const pressItem = pressCornerData.find(item => item.id === parseInt(pressId));

    if (!pressItem) {
        return <div>Press release not found</div>;
    }

    return (
        <Container className="single-press-release-container mt-4">
            <Card className="mb-4">
                <Card.Img variant="top" src={pressItem.image} className="single-press-release-image" />
                <Card.Body>
                    <Card.Title className="single-press-release-title">{pressItem.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{pressItem.date}</Card.Subtitle>
                    <Card.Text className="single-press-release-content">{pressItem.content}</Card.Text>
                    <Button variant="primary" href="/presscorner">Back to Press Corner</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SinglePressRelease;
