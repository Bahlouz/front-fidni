import React from 'react';
import './Events.css'; // Import the CSS file for styling

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Conférence sur l\'accessibilité numérique',
      date: '10 août 2024',
      location: 'Paris, France',
      description: 'Une conférence pour discuter des défis et des solutions en matière d\'accessibilité numérique.'
    },
    {
      id: 2,
      title: 'Atelier sur la technologie d\'assistance',
      date: '15 septembre 2024',
      location: 'Lyon, France',
      description: 'Un atelier pratique sur les dernières technologies d\'assistance pour les personnes handicapées.'
    },
    {
      id: 3,
      title: 'Journée de sensibilisation au handicap',
      date: '25 octobre 2024',
      location: 'Marseille, France',
      description: 'Une journée pour sensibiliser le public aux défis rencontrés par les personnes handicapées.'
    }
  ];

  return (
    <div className="events-container">
      <h2>Nos Événements</h2>
      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card" tabIndex="0">
            <h3>{event.title}</h3>
            <div className="event-content">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Lieu:</strong> {event.location}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
