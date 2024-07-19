import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import './SingleNews.css'; // Import the CSS for single news page
import { newsItems } from './newsItems.jsx'; // Assuming you have this data imported

const SingleNews = () => {
    const { newsId } = useParams();

    // Convert newsId to integer for comparison
    const id = parseInt(newsId);

    // Find the news item based on ID
    const newsItem = newsItems.find(item => item.id === id);

    if (!newsItem) {
        return <div>News not found</div>; // Handle if news item is not found
    }

    return (
        <Container className="single-news-container mt-4">
            <Card className="mb-4">
                <Card.Img variant="top" src={newsItem.imageUrl} className="single-news-image" />
                <Card.Body>
                    <Card.Title className="single-news-title">{newsItem.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{newsItem.date}</Card.Subtitle>
                    <Card.Text className="single-news-content">{newsItem.content}</Card.Text>
                    <Button variant="primary" href="/news-events/news">Retour aux nouvelles</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SingleNews;
