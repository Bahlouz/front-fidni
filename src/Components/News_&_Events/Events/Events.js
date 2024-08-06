import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css'; // Import the CSS file for styling
import backnavhead from "../../../Assets/back navhead.jpg";
import { Container, Row, Col } from 'react-bootstrap';

const Events = () => {
  const imageLoaded = () => {
    // Your image loaded logic here
  };

  const events = [
    {
      id: 1,
      title: 'Conférence sur l\'accessibilité numérique',
      date: '16 decembre 2024',
      location: 'Tunis, Tunisie',
      description: 'Une conférence pour discuter des défis et des solutions en matière d\'accessibilité numérique.',
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg', // Image related to digital accessibility
    },
    {
      id: 2,
      title: 'Atelier sur la technologie d\'assistance',
      date: '15 septembre 2024',
      location: 'Sfax, Tunisie',
      description: 'Un atelier pratique sur les dernières technologies d\'assistance pour les personnes handicapées.',
      imageUrl: 'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg', // New image related to assistive technology
    },
    {
      id: 3,
      title: 'Journée de sensibilisation au handicap',
      date: '25 octobre 2024',
      location: 'Sousse, Tunisie',
      description: 'Une journée pour sensibiliser le public aux défis rencontrés par les personnes handicapées.',
      imageUrl: 'https://images.pexels.com/photos/4061522/pexels-photo-4061522.jpeg', // Image related to disability awareness
    },
    {
      id: 4,
      title: 'Forum des innovations technologiques',
      date: '10 novembre 2024',
      location: 'Monastir, Tunisie',
      description: 'Un forum pour présenter les dernières innovations technologiques visant à améliorer l\'accessibilité.',
      imageUrl: 'https://images.pexels.com/photos/2566551/pexels-photo-2566551.jpeg', // Image related to tech innovations
    },
    {
      id: 5,
      title: 'Conférence sur l\'inclusion sociale',
      date: '5 decembre 2024',
      location: 'Gabès, Tunisie',
      description: 'Une conférence pour discuter des stratégies d\'inclusion sociale pour les personnes en situation de handicap.',
      imageUrl: 'https://images.pexels.com/photos/3183176/pexels-photo-3183176.jpeg', // Image related to social inclusion
    },
    {
      id: 6,
      title: 'Séminaire sur l\'éducation inclusive',
      date: '20 septembre 2024',
      location: 'Bizerte, Tunisie',
      description: 'Un séminaire pour promouvoir l\'éducation inclusive et discuter des meilleures pratiques.',
      imageUrl: 'https://images.pexels.com/photos/327509/pexels-photo-327509.jpeg', // Image related to inclusive education
    }
  ];
  
  return (
    <>
      <Row>
        <img className="backnavhead" src={backnavhead} aria-hidden="true" />
      </Row>
      <Container className="py-5">
        <h1 className="events-title">Nos Événements</h1>
        <p>Explorez les activités et les rassemblements axés sur l'inclusion et l'accessibilité pour les personnes handicapées en Tunisie. Consultez les conférences, ateliers, séminaires et événements communautaires à venir. Engagez-vous dans des conversations pertinentes, rencontrez des spécialistes et participez à des projets locaux.
        </p>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          {events.map(event => (
            <Col key={event.id}>
              <Link to={`/event/${event.id}`} className="text-decoration-none">
                <div className="custom-card h-100" style={{ position: 'relative' }}>
                  <div className="custom-bottom-right">{event.date}</div>
                  <div className="custom-top-right">
                    <div className="custom-tags-list mb-2">
                      <span className="custom-tags-list-town text-uppercase">{event.location.split(',')[0]}</span>
                      <span className="custom-free-tag">FREE</span>
                    </div>
                  </div>
                  <div className="custom-image-container">
                    <div className="custom-bottom-left">
                      <div className="custom-thumbnail" style={{ backgroundColor: '#ffa5009e' }}>
                        <div className="custom-thumbnail-date">
                          <span className="custom-thumbnail-date-day">{new Date(event.date).getDate()}</span>
                          <span className="custom-thumbnail-date-month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                        </div>
                      </div>
                    </div>
                    <img 
                      src={event.imageUrl} 
                      onLoad={imageLoaded} 
                      className="custom-card-img-top" 
                      alt="Image" 
                    />
                    <div className="custom-image-overlay custom-text-over text-center d-flex justify-content-center align-items-center text-uppercase">
                      <div>
                        {event.title}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Events;
