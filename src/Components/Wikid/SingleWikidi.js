import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row } from 'react-bootstrap';
import { ActeurScPlitems } from './ActeurScPlitems';
import { Artistesitems } from './Artistesitems';
import { Chercheursitems } from './Chercheursitems';
import { Entrepreneursitems } from './Entrepreneursitems';
import { Sportifsitems } from './Sportifsitems';
import backnavhead from "../../Assets/back navhead.jpg";

const categories = {
  ActeurScPl: ActeurScPlitems,
  Artistes: Artistesitems,
  Chercheurs: Chercheursitems,
  Entrepreneurs: Entrepreneursitems,
  Sportifs: Sportifsitems,
};

const SingleWikidi = () => {
  const { storyTitle } = useParams();  // Rename storyId to storyTitle

  // Function to format description content
  const formatDescription = (content) => {
    // Replace <b> tags with <strong> tags for better semantics and replace <br /> with line breaks
    return content
      .replace(/<b>/g, '<strong>')
      .replace(/<\/b>/g, '</strong>')
      .replace(/<br\s*\/?>/g, '<br />');
  };

  // Find the category of the item by matching the title
  const findStoryItem = (title) => {
    for (const [category, items] of Object.entries(categories)) {
      const item = items.find(item => item.title.toLowerCase() === title.toLowerCase());
      if (item) {
        return { item, category };
      }
    }
    return null;
  };

  const { item: storyItem, category } = findStoryItem(storyTitle) || {};

  if (!storyItem) {
    return <div>Histoire non trouvée</div>; 
  }

  return (
    <>
      <Row>
        <img className="backnavhead" src={backnavhead} alt="Background" />
      </Row>
      <Container className="single-wikidi-container mt-4">
        <Card className="mb-4">
          <Card.Img variant="top" src={storyItem.imageUrl} className="single-wikidi-image" />
          <Card.Body>
            <Card.Title className="single-wikidi-title">{storyItem.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{storyItem.date}</Card.Subtitle>
            {/* Format the content before displaying it */}
            <Card.Text 
              className="single-wikidi-content" 
              dangerouslySetInnerHTML={{ __html: formatDescription(storyItem.content) }} 
            />
            <Card.Footer>
              <small className="text-muted">Catégorie: {category}</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default SingleWikidi;
