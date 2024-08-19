import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import './SingleEvents.css'; // Import the CSS for single news page
import { events as eventsData } from './Events.js'; // Import your events data
import backnavhead from "../../../Assets/back navhead.jpg";

const SingleEvents = () => {
    const { eventTitle } = useParams(); // Assume URL contains event title

    // Find the event based on title
    const event = eventsData.find(item => item.title.toLowerCase() === eventTitle.toLowerCase());

    if (!event) {
        return <div>Event not found</div>; // Handle if event item is not found
    }

    return (
        <>
        <img className="backnavhead" src={backnavhead} alt="Background" aria-hidden="true" />
        <Container className="p-0 single-news-container mt-4">
            <Card className="mb-4">
                <Card.Img variant="top" src={event.imageUrl} className="single-news-image" />
                <Card.Body>
                    <Card.Title className="single-news-title">{event.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                    <Card.Text className="single-news-content">{event.description}</Card.Text>
                    <Button variant="primary" href="/news-events/events">Retour aux nouvelles</Button>
                </Card.Body>
            </Card>
        </Container>
        </>
    );
};

export default SingleEvents;
