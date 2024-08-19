import React,{useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Podcast.css';
import backpodcast from "../../../Assets/backaudio1.jpg";

const podcastEpisodes = [
    {
        id: 1,
        title: 'Essaida FM : podcast :Épisode 1 ',
        date: '1 Août 2024',
        description: "Dans l'épisode de la série de podcasts 'Écoute-moi' intitulé 'Changements climatiques et leurs impacts sur les personnes handicapées', animé par Jihan El-Zamzami, il est question de la manière dont les changements climatiques affectent spécifiquement les personnes en situation de handicap. Le podcast analyse les risques accrus que ces individus courent en raison des catastrophes naturelles et des conditions climatiques extrêmes, ainsi que les défis d'accessibilité lors des situations d'urgence. Il aborde également les besoins particuliers en matière de préparation et de réponse aux crises, tout en soulignant l'importance d'adapter les politiques climatiques pour inclure les personnes handicapées et garantir leur sécurité et leur bien-être.",
        audioUrl: `${process.env.PUBLIC_URL}/audios/Écoute-moi ep1.mp4`,
        downloadUrl: `${process.env.PUBLIC_URL}/audios/Écoute-moi ep1.mp4`,
        imageUrl: `${process.env.PUBLIC_URL}/podcasts/saida fm.png`  // Placeholder image URL
    },
    {
        id: 2,
        title: 'Essaida FM : podcast : Épisode 2',
        date: '8 Août 2024',
        description: "Le deuxième épisode du podcast 'Écoute-moi' animé par Jihan El-Zamzami se concentre sur les défis auxquels sont confrontées les personnes handicapées pour accéder à l'information. Il explore les obstacles liés aux formats non accessibles, les lacunes dans les réglementations existantes, et les initiatives visant à améliorer l'accessibilité. À travers des témoignages et des exemples concrets, l'épisode met en lumière les efforts réalisés pour surmonter ces obstacles, tout en appelant à une sensibilisation accrue et à des actions concrètes pour garantir un accès équitable à l'information pour tous.",
        audioUrl: `${process.env.PUBLIC_URL}/audios/Écoute-moi ep2.mp4`,
        downloadUrl: `${process.env.PUBLIC_URL}/audios/Écoute-moi ep2.mp4`,
        imageUrl: `${process.env.PUBLIC_URL}/podcasts/saida fm.png`   // Placeholder image URL
    },
    {
        id: 3,
        title: 'podcast kharikoun (yassine)',
        date: '15 Août 2024',
        description: "Ce podcast raconte l'histoire inspirante de Yassine Mohamed, un jeune homme de 24 ans originaire de Kasserine, en Tunisie. Yassine, qui est non-voyant, partage son parcours, ses défis et ses succès malgré les difficultés. Né avec une déficience visuelle, Yassine décrit comment il a grandi dans une région historiquement marginalisée. Il parle de l'importance de la famille, mentionnant sa sœur aînée qui, elle aussi, est non-voyante et qu'il considère comme un modèle et une source d'inspiration. Malgré les obstacles liés à sa condition et à sa situation géographique, Yassine exprime sa fierté d'être Tunisien et sa détermination à réaliser ses ambitions. Il met en avant sa passion pour les langues et les civilisations, et son désir de contribuer positivement à la société. Yassine souligne aussi le manque de soutien de la part de l'État pour les personnes handicapées et l'importance de l'inclusion sociale et éducative. Son optimisme, sa persévérance, et sa capacité à transmettre la joie autour de lui font de son histoire un puissant témoignage de résilience et de succès.",
        audioUrl: `Dream FM ( production médiatique inclusive) Épisode 2.mp4`,
        downloadUrl: `Dream FM ( production médiatique inclusive) Épisode 2.mp4`,
        imageUrl: `${process.env.PUBLIC_URL}/podcasts/backcard.jpg`  // Placeholder image URL
    },
    {
        id: 5,
        title: 'Dream FM ( production médiatique inclusive): Épisode 1',
        date: '15 Août 2024',
        description: "Dans le podcast sur le projet 'Pour améliorer l'accès des personnes handicapées aux services et aux droits en Tunisie', on explore les initiatives visant à garantir une meilleure inclusion des personnes en situation de handicap dans le pays. Le podcast détaille les efforts pour rendre les services publics et les droits accessibles, en mettant en avant les défis rencontrés et les solutions mises en place pour améliorer l'intégration. Il met également en lumière les témoignages de personnes handicapées et les recommandations pour renforcer les politiques et les infrastructures, afin d'assurer une égalité d'accès aux services et aux droits pour tous les citoyens tunisiens.",
        audioUrl: `${process.env.PUBLIC_URL}/audios/Dream FM ( production médiatique inclusive) Épisode 1.mp4`,
        downloadUrl: `${process.env.PUBLIC_URL}/audios/Dream FM ( production médiatique inclusive) Épisode 1.mp4`,
        imageUrl: `${process.env.PUBLIC_URL}/podcasts/backcard.jpg`   // Placeholder image URL
    },
    {
        id: 5,
        title: 'Dream FM ( production médiatique inclusive): Épisode 2',
        date: '15 Août 2024',
        description: "Dans le podcast sur les droits des personnes handicapées au travail selon la législation tunisienne, dans le cadre du projet 'Pour améliorer l'accès des personnes handicapées aux services et aux droits en Tunisie', il est question des dispositions légales garantissant l'égalité des chances en emploi pour les personnes en situation de handicap. L'épisode examine les lois tunisiennes qui visent à faciliter leur intégration sur le marché du travail, ainsi que les mesures de soutien et d'accommodement au sein des entreprises. Il met en évidence les défis persistants et les efforts nécessaires pour renforcer la mise en œuvre de ces droits, afin d'assurer un accès équitable aux opportunités professionnelles et à un environnement de travail inclusif.",
        audioUrl: `${process.env.PUBLIC_URL}/audios/Dream FM ( production médiatique inclusive) Épisode 2.mp4`,
        downloadUrl: `${process.env.PUBLIC_URL}/audios/Dream FM ( production médiatique inclusive) Épisode 2.mp4`,
        imageUrl: `${process.env.PUBLIC_URL}/podcasts/backcard.jpg`   // Placeholder image URL
    },
];

const Podcast = () => {
    const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

    const toggleDescription = (id) => {
        setExpandedDescriptionId(expandedDescriptionId === id ? null : id);
    };
    return (
        <>
            <div className="audio-image">
                <img src={backpodcast} alt="Podcast Background" />
            </div>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <h1 className="podcasts-title">Derniers Épisodes de Podcast</h1>
                    </Col>
                </Row>
                <Row>
                    {podcastEpisodes.map((episode) => (
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
                                    <audio controls  className='audio-player-podcast-audio'>
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

export default Podcast;
    