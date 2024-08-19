import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css'; // Import the CSS file for styling
import backnavhead from "../../../Assets/back navhead.jpg";
import { Container, Row, Col } from 'react-bootstrap';

export const events = [
  {
    id: 1,
    title: 'La journée du Chien',
    date: '26 august 2024',
    location: 'Tunisie',
    description: "Le 26 août chaque année, c'est la Journée mondiale du Chien. Une journée idéale pour partager des photos et des anecdotes mignonnes ou amusantes au sujet du meilleur ami de l'homme. Cette journée permet également de réfléchir à la place du chien dans notre société et de rappeler l'importance de bien traiter nos compagnons à quatre pattes et de combattre le fléau de l'abandon en cette période estivale.",
    imageUrl: 'https://lemagduchien.ouest-france.fr/images/dossiers/2020-09/journee-internationnale-chien-093611.jpg', // Image related to digital accessibility
  },
  {
    id: 2,
    title: "Où en est l'organisation des Jeux paralympiques de Paris",
    date: '28 août 2024 – 8 septembre 2024',
    location: 'Paris, France',
    description: `Du 28 août au 8 septembre, les Jeux paralympiques de Paris viendront souffler un autre vent de légéreté après celui qui s'est abattu sur la capitale lors des Jeux olympiques.

Le compte à rebours est lancé. La flamme paralympique entamera son long périple depuis le Royaume-Uni le 25 août avant de rejoindre la ville Lumière.

Pour le reste, le Comité d'organisation des Jeux olympiques et paralympiques (Cojo) s'affaire sur place pour régler les derniers détails.

"On doit configurer les sites de compétition qui seront les mêmes, donc toutes les images qui ont fait le tour du monde seront conservées. On les transforme pour que les terrains s'adaptent aux épreuves paralympiques", détaille Michaël Aloïsio.

Ainsi, le tir à l'arc se déroulera toujours aux Invalides, le terrain de beach-volley devient celui du cécifoot et reste au pied de la Tour Eiffel, l'équitatation paralympique sera à Versailles et le judo au Grand Palais éphémère.

Un million de billets vendus
La cérémonie d'ouverture des Jeux paralympiques, la première en ville, sur l'avenue des Champs-Elysées, est aussi en fin de préparation. Quant au village olympique, il accueillera très bientôt ses "4.500 athlètes", deux fois moins que lors des Jeux olympiques.

En matière de vente de billets, le Cojo a observé une accélération ces derniers jours. "Avec les JO, on était autour d'un million de billets vendus avec les épreuves et on a atteint aussi un million pour les paralympiques", explique Michaël Aloïsio.

Deux profils d'acheteurs et acheteuses ont d'ailleurs été identifiés.

"Il y a ceux qui n'ont pas pu vivre les JO et ceux qui les ont vécus et qui ne veulent surtout pas que ça s'arrête", ajoute-t-il.

De nombreuses épreuves affichent déjà complet. "Il faut se dépêcher, car le système est un peu différent que les JO", précise le directeur général délégué. Alors que des places avaient été remises en vente lors des précédentes olympiades, peu seront proposées pour l'édition paralympique.

Mais cette billetterie jouit d'un avantage, car ces Jeux se dérouleront entre deux périodes : la fin des vacances d'été et le début de la rentrée scolaire, selon Michaël Aloïsio. Il rappelle en outre que les sites seront "très accessibles" avec des places "à 15 euros".

La communication sur ces olympiades s'accélèrent à mesure que leur lancement approche. "On a vu que l'ambiance était complétement dingue et c'est ça que l'on veut reproduire avec les paralympiques", conclut-il.`,
    imageUrl: "https://www.corporateknights.com/wp-content/uploads/2021/08/Paralympics-heat.png"
  },
  {
    id: 3,
    title: "La Tunisie organisera une election presidentielle",
    date: '6 Octobre 2024',
    location: 'Tunisie',
    description: 'Un atelier pratique sur les dernières technologies d\'assistance pour les personnes handicapées.',
    imageUrl: 'data:image/jpeg;base64,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', // New image related to assistive technology
  },
  
  {
    id: 4,
    title: "Délégation de l’UE : lancement de la 5e édition du Prix Lina Ben Mhenni pour la liberté d’expression",
    date: '31 octobre 2024',
    location: 'Tunisie',
    description: `
La Délégation de l’Union européenne en Tunisie vient de lancer la cinquième édition du « Prix Lina Ben Mhenni pour la liberté d’expression », dont le dernier délai de dépôt des candidatures est fixé au 31 octobre 2024.

Dans un communiqué, la Délégation européenne souligne que ce prix, créé en 2020, vise à soutenir et contribuer à promouvoir une presse écrite de qualité en Tunisie. Il constitue, également, un hommage à Lina Ben Mhenni, « icône de la révolution tunisienne » et à sa lutte en faveur des valeurs communes entre la Tunisie et l’Union européenne.

Financé par l’UE, le “Prix Lina Ben Mhenni pour la liberté d’expression” est ouvert aux journalistes, blogueurs et lanceurs d’alertes tunisiens.

Les candidats doivent soumettre, en langue arabe, française ou anglaise, un article d’investigation (enquête, reportage, portrait d’investigation) sur un sujet autour des valeurs partagées entre l’Union européenne et la Tunisie, notamment la défense des principes de la démocratie, de la liberté et de la solidarité, et en particulier de la liberté d’expression et des droits humains économiques et sociaux.

L’article soumis au concours doit avoir été publié dans la presse écrite imprimée ou en ligne (site d’information, blog) entre le 1er janvier 2023 et le 15 octobre 2024. Il ne doit pas dépasser 15 000 signes et ne doit pas avoir été primé auparavant.`,
    imageUrl: `${process.env.PUBLIC_URL}/events/event4.jpg`, // Image related to tech innovations
  },
];

const Events = () => {
  const imageLoaded = () => {
    // Your image loaded logic here
  };

  
  
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
              <Link to={`/events/${event.title}`} className="text-decoration-none">
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
