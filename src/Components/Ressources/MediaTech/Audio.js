import React,{useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './audio.css';

const audioEpisodes = [
      {
        id: 1,
        title: 'Syrine abidi : Amal Épisode 1 ',
        date: '1 Août 2024',
        description: "Le contenu de l’audio présente un guide sur l'entrepreneuriat féminin destiné aux femmes en situation de handicap, produit par l'entreprise KourTable avec le soutien de l'UNESCO en Tunisie. Amel, la narratrice, explique qu'après avoir quitté l'université Ittatik, elle a entamé un parcours pour développer ses compétences professionnelles. Elle partage ses observations sur les obstacles rencontrés par les personnes en situation de handicap, notamment le manque d'accès aux infrastructures adaptées, comme les ascenseurs. Amel souligne l'idée que malgré la force intérieure de chaque individu, il est difficile de réussir seul. Elle raconte ensuite une rencontre avec son amie Salima, qui dirige un projet dans les industries créatives et culturelles. Salima a partagé son expérience et a souligné l'importance du soutien qu'elle a reçu de ses mentors et conseillers dans sa carrière. Le guide vidéo aspire à faire découvrir les défis que rencontrent les femmes entrepreneures et à montrer comment elles peuvent être surmontées, en espérant que les spectateurs apprendront des expériences partagées et trouveront inspiration et solutions. ",
        audioUrl: `${process.env.PUBLIC_URL}/audios/episode1.mp3`,
        downloadUrl: `${process.env.PUBLIC_URL}/audios/episode1.mp3`,
        imageUrl: `${process.env.PUBLIC_URL}/podcasts/backcard1.jpg`  // Placeholder image URL
    },
    {
        id: 2,
        title: 'Syrine abidi : Amal Épisode 2',
        date: '8 Août 2024',
        description: "Dans ce podcast, Rasha partage son parcours inspirant de surmonter les obstacles liés à son handicap pour poursuivre ses rêves. Elle a d'abord rencontré des difficultés à trouver des filières d'études adaptées à ses intérêts, mais a passé une année à se dédier au dessin et à l'art en autodidacte. Rasha a ensuite décidé d'étudier la gestion des affaires pour acquérir les compétences nécessaires à la création de son projet artistique. Malgré un manque de financement initial, elle a trouvé le soutien d'une association et a pu lancer son projet. Elle remercie sa famille et ceux qui l'ont aidée, soulignant l'importance de la détermination et du soutien extérieur pour réaliser ses aspirations.",
        audioUrl: `${process.env.PUBLIC_URL}/audios/episode2.mp3`,
        downloadUrl: `${process.env.PUBLIC_URL}/audios/episode2.mp3`,
        imageUrl: `${process.env.PUBLIC_URL}/podcasts/backcard1.jpg`  // Placeholder image URL
    },
    {
        id: 3,
        title: 'Syrine abidi : Amal Épisode 3',
        date: '15 Août 2024',
        description: "Dans ce podcast, Anik partage son expérience en tant qu'entrepreneuse qui a créé son propre projet sans soutien financier ni aide institutionnelle. Elle explique comment elle a dû compter sur sa famille et ses amis pour la soutenir dans ses initiatives, soulignant que les ressources disponibles pour les entrepreneurs handicapés sont souvent limitées et insuffisantes. Malgré les obstacles, Anik a réussi à transformer sa passion en une entreprise artistique, bien que le secteur de l'art ne soit pas prioritaire pour les investisseurs et les programmes de financement, qui préfèrent généralement les projets agricoles. Anik aspire à organiser des expositions internationales pour présenter son travail à un public plus large, mais elle fait face à des défis logistiques, notamment en matière de transport et de financement. Elle encourage les autres femmes aspirant à devenir entrepreneuses à ne pas abandonner leurs rêves, malgré les difficultés. Elle insiste sur l'importance de poursuivre des projets qui les passionnent réellement, car cela leur permet de persévérer face aux défis.",
        audioUrl: `${process.env.PUBLIC_URL}/audios/episode3.mp3`,
        downloadUrl: `${process.env.PUBLIC_URL}/audios/episode3.mp3`,
        imageUrl:`${process.env.PUBLIC_URL}/podcasts/backcard1.jpg`  // Placeholder image URL
    },
    {
        id: 4,
        title: 'Syrine abidi : Amal Épisode 4',
        date: '15 Août 2024',
        description: "Dans le podcast sur le projet 'Pour améliorer l'accès des personnes handicapées aux services et aux droits en Tunisie', on explore les initiatives visant à garantir une meilleure inclusion des personnes en situation de handicap dans le pays. Le podcast détaille les efforts pour rendre les services publics et les droits accessibles, en mettant en avant les défis rencontrés et les solutions mises en place pour améliorer l'intégration. Il met également en lumière les témoignages de personnes handicapées et les recommandations pour renforcer les politiques et les infrastructures, afin d'assurer une égalité d'accès aux services et aux droits pour tous les citoyens tunisiens.",
        audioUrl: `${process.env.PUBLIC_URL}/audios/episode4.mp3`,
        downloadUrl: `${process.env.PUBLIC_URL}/audios/episode4.mp3`,
        imageUrl:`${process.env.PUBLIC_URL}/podcasts/backcard1.jpg`  // Placeholder image URL
    },
    {
        id: 5,
        title: 'Syrine abidi : Amal Épisode 5',
        date: '15 Août 2024',
        description: "Le podcast aborde le rôle crucial des associations et des ONG dans le soutien aux femmes entrepreneuses, particulièrement celles en situation de handicap. Il souligne l'importance des associations pour sensibiliser aux droits des personnes handicapées et leur offrir un soutien pratique à travers des programmes et des projets. En Tunisie, plusieurs organisations telles que l'Union Nationale des Aveugles et l'Union Tunisienne pour l'Assistance aux Personnes Handicapées jouent un rôle clé dans ce soutien. Le podcast met également en avant les meilleures pratiques pour une communication efficace dans les entreprises, en insistant sur la nécessité d'une vision claire, d'objectifs définis et d'une stratégie de communication bien élaborée pour le succès des entreprises et la satisfaction des clients.",
        audioUrl: `${process.env.PUBLIC_URL}/audios/episode5.mp3`,
        downloadUrl: `${process.env.PUBLIC_URL}/audios/episode5.mp3`,
        imageUrl:`${process.env.PUBLIC_URL}/podcasts/backcard1.jpg` // Placeholder image URL
    },
    {
      id: 6,
      title: 'Syrine abidi : Amal Épisode 6',
      date: '15 Août 2024',
      description: "L’épisode décrit les activités de l'Association Ibsar, qui se consacre aux personnes en situation de handicap, en particulier les femmes. L'association organise des événements culturels, comme un festival international pour les musiciens et créateurs en situation de handicap, et encourage la participation des femmes handicapées dans des activités artisanales telles que la fabrication de laine et la céramique. Elle soutient également l'accès à la culture en adaptant des livres pour enfants en braille et en fournissant des ressources éducatives accessibles via une plateforme en ligne. L'association œuvre pour l'inclusion et l'autonomisation des personnes handicapées à travers la culture, l'éducation, et le réseautage.",
      audioUrl: `${process.env.PUBLIC_URL}/audios/episode6.mp3`,
      downloadUrl: `${process.env.PUBLIC_URL}/audios/episode6.mp3`,
      imageUrl: `${process.env.PUBLIC_URL}/podcasts/backcard1.jpg`  // Placeholder image URL
  },
];

const Audio = () => {
    const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

    const toggleDescription = (id) => {
        setExpandedDescriptionId(expandedDescriptionId === id ? null : id);
    };

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <h1 className="podcasts-title">Derniers Épisodes d'audios</h1>
                    </Col>
                </Row>
                <Row>
                    {audioEpisodes.map((episode) => (
                        <Col md={4} key={episode.id} className="mb-4">
                            <Card className="h-100">
                                <Card.Img variant="top" src={episode.imageUrl} alt={episode.title} />
                                <Card.Body>
                                    <Card.Title>{episode.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{episode.date}</Card.Subtitle>
                                    <Card.Text>
                                        {expandedDescriptionId === episode.id ? episode.description : `${episode.description.substring(0, 200)}...`}
                                    </Card.Text>
                                    <Button variant="link" onClick={() => toggleDescription(episode.id)}>
                                        {expandedDescriptionId === episode.id ? 'Afficher moins' : 'Afficher plus'}
                                    </Button>
                                    <audio controls className="audio-player-podcast-audio ">
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

export default Audio;
    