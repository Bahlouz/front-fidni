import React, { useEffect,useState } from 'react';
import './PressCorner.css';
import PressCornerData from './PressCornerData';
const PressCorner = () => {
  const [pressReleases, setPressReleases] = useState([]);

  useEffect(() => {
    setPressReleases(PressCornerData);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const over = e.currentTarget.querySelector('.over');
      if (over) {
        over.style.backgroundImage = `radial-gradient(circle at ${(mouseX * 100) / -e.currentTarget.offsetWidth + 100}% ${(mouseY * 100) / -e.currentTarget.offsetHeight + 100}%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.33) 50%)`;
      }

      e.currentTarget.style.transform = `rotateY(${((mouseX * 100) / e.currentTarget.offsetWidth - 50) / 100 * 2}deg) rotateX(${((mouseY * 100) / e.currentTarget.offsetHeight - 50) / 100 * 2}deg)`;
    };  

    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';

      const over = e.currentTarget.querySelector('.over');
      if (over) {
        over.style.backgroundImage = 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.3) 50%)';
      }
    };

    const articles = document.querySelectorAll('.article');
    articles.forEach((article) => {
      article.addEventListener('mousemove', handleMouseMove);
      article.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      articles.forEach((article) => {
        article.removeEventListener('mousemove', handleMouseMove);
        article.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="wrap" role="main">
      {[
        {
          title: "Nouvelles innovations dans la technologie d'accessibilité",
          category: "Appareils d'accessibilité"
        },
        {
          title: "Militer pour les droits des personnes handicapées dans l'éducation",
          category: "Droits des personnes handicapées"
        },
        {
          title: "Comment la technologie d'assistance transforme les lieux de travail",
          category: "Technologie d'assistance"
        },
        {
          title: "Conseils de voyage accessibles pour les personnes handicapées",
          category: "Voyages accessibles"
        },
        {
          title: "Briser les barrières : Éducation inclusive pour tous",
          category: "Éducation inclusive"
        },
        {
          title: "Mettre en lumière les artistes handicapés dans le monde de l'art",
          category: "Arts accessibles"
        }
      ].map((article, index) => (
        <article className="article" key={index} role="article" aria-labelledby={`article-title-${index}`}>
          <div className="over" aria-hidden="true"></div>
          <div className="wrap-cat">
            <span className="cat" data-hover={article.category} aria-label={article.category}>{article.category}</span>
          </div>
          <h1 id={`article-title-${index}`}>
            <span>{article.title}</span>
          </h1>
        </article>
      ))}
    </div>
  );
};

export default PressCorner;
