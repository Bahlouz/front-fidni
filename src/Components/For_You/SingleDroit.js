import React from 'react';
import { useParams } from 'react-router-dom';
import { Container ,Row,Col,Image} from 'react-bootstrap';
import './SingleDroit.css';

const SingleDroit = () => {
  const { id } = useParams();
  const cardData = {
    Convention_relative_aux_Droits_des_Personnes_Handicapées: {
      title: "Convention relative aux Droits des Personnes Handicapées (CDPH)",
      fullDescription: `
      La Convention relative aux droits des personnes handicapées (CDPH), adoptée le 13 décembre 2006 par l’Assemblée générale des Nations Unies à New York, a pour objet de « promouvoir, protéger et assurer la pleine et égale jouissance de tous les droits de l’homme et de toutes les libertés fondamentales par les personnes handicapées et de promouvoir le respect de leur dignité intrinsèque ».<br />

      La Convention est un engagement universel pour transformer les sociétés dans le sens de l’inclusion, de manière que les personnes handicapées y jouissent des mêmes opportunités, des mêmes possibilités de participation que les autres. Dans ce sens, elle vise la non-discrimination. Elle appelle à ce que les personnes handicapées ne soient plus considérées comme des objets de charité mais bien comme des sujets de droit.

      La CDPH fait le lien entre le handicap et les personnes détentrices de droits, et se focalise sur l’interaction des déficiences avec les obstacles de l’environnement qui entravent la participation pleine et entière dans la société.

      Parmi les changements les plus significatifs, il faut retenir que cette Convention :
      • Ne crée pas de nouveaux droits pour les personnes handicapées : elle exprime l’ensemble des droits humains en prenant en compte les besoins spécifiques et la situation des personnes handicapées, et énumère les étapes et actions nécessaires à leur réalisation pleine et entière ;
      
      • Est juridiquement contraignante pour les États parties : les Etats doivent régulièrement faire un rapport des mesures entreprises pour l’appliquer ;
      
      • Est un outil de développement et un instrument des droits humains ;
      
      • Avalise le changement de paradigme sur la question du handicap en appliquant le modèle social du handicap à la totalité du texte de la Convention ;
      
      • Est un instrument s’appliquant à tous les types d’incapacités et tous les secteurs ;
      
      • Représente « un grand pas en avant pour la promotion de l’accès aux services destinés aux personnes handicapées, dans tout contexte et tout environnement » ;
      
      • Stipule clairement le rôle des organisations représentatives des personnes handicapées comme élément moteur dans la promotion des droits des personnes handicapées, exigeant par conséquent leur participation systématique.
    `
    },
    Cadre_réglementaire_concernant_le_handicap_en_Tunisie: {
      title: 'Cadre réglementaire concernant le handicap en Tunisie',
      fullDescription: "Full information about the regulatory framework concerning disability in Tunisia..."
    }
  };

  const card = cardData[id];

  return (
    <>
    <div className="background-image-droits">
    <div className="overlay-text-droits-singlepage">
      <h1 className="p-5 droits-titre-singlepage">{card.title}</h1>
    </div>
  </div>
  
  <Container className="convention-container">
    <Row>
    <div>
  <h2>Définitions :</h2>
  <ul>
    <li>
      <b>Personnes handicapées</b>: personnes qui présentent des incapacités physiques,
      mentales, intellectuelles ou sensorielles durables dont l'interaction avec diverses
      barrières peut faire obstacle à leur pleine et effective participation à la société sur
      la base de l'égalité avec les autres.
    </li>
    <li>
      <b>Discrimination fondée sur le handicap</b>: toute distinction, exclusion ou
      restriction fondée sur le handicap qui a pour objet ou pour effet de compromettre
      ou réduire à néant la reconnaissance, la jouissance ou l'exercice, sur la base de
      l'égalité avec les autres, de tous les droits de l'homme et de toutes les libertés
      fondamentales dans les domaines politique, économique, social, culturel, civil ou
      autres. La discrimination fondée sur le handicap comprend toutes les formes de
      discrimination, y compris le refus d'aménagement raisonnable.
    </li>
    <li>
      <b>Aménagement raisonnable</b>: les modifications et ajustements nécessaires et
      appropriés n'imposant pas de charge disproportionnée ou indue apportés, en
      fonction des besoins dans une situation donnée, pour assurer aux personnes
      handicapées la jouissance ou l'exercice, sur la base de l'égalité avec les autres,
      de tous les droits de l'homme et de toutes les libertés fondamentales.
    </li>
  </ul>
  <p>Source: Convention relative aux Droits des Personnes Handicapées</p>
</div>

    </Row>
      <Row>
        <Col>
          <h2 className="convention-title">Convention relative aux Droits des Personnes Handicapées (CDPH)</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="convention-text">
            La Convention relative aux droits des personnes handicapées (CDPH), adoptée le 13 décembre 2006 par l'Assemblée générale des Nations Unies à New York, a pour objet de « promouvoir, protéger et assurer la pleine et égale jouissance de tous les droits de l’homme et de toutes les libertés fondamentales par les personnes handicapées et de promouvoir le respect de leur dignité intrinsèque ».
          </p>
          <p className="convention-text">
            La Convention est un engagement universel pour transformer les sociétés dans le sens de l’inclusion, afin de garantir que les personnes handicapées jouissent des mêmes opportunités, des mêmes possibilités de participation que les autres. Dans ce sens, elle prône la non-discrimination. Elle appelle à ce que les personnes handicapées ne soient plus considérées comme des objets de charité mais bien comme des sujets de droit.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="convention-subtitle">
            La CDPH fait le lien entre le handicap et les personnes détentrices de droits, et se focalise sur l’interaction des déficiences avec les obstacles de l’environnement qui entravent la participation pleine et entière dans la société.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="convention-text">Parmi les changements les plus significatifs, il faut retenir que cette Convention :</p>
          <ul className="convention-list">
            <li>Ne crée pas de nouveaux droits pour les personnes handicapées : elle exprime l’ensemble des droits humains en prenant en compte les besoins spécifiques et la situation des personnes handicapées, et énumère les étapes et actions nécessaires à leur réalisation pleine et entière ;</li>
            <li>Est juridiquement contraignante pour les États parties : les États doivent régulièrement faire un rapport des mesures entreprises pour l’appliquer ;</li>
            <li>Est un outil de développement et un instrument des droits humains :
              <ul>
                <li>Avisée le changement de paradigme sur la question du handicap en appliquant le modèle social du handicap à la totalité du texte de la Convention ;</li>
                <li>Est un instrument s’appliquant à tous les types d’incapacités et tous les secteurs ;</li>
                <li>Représente « un grand pas en avant pour la promotion de l’accès aux services destinés aux personnes handicapées, dans tous les contextes et à tout moment ».</li>
              </ul>
            </li>
            <li>Stipule clairement le rôle des organisations représentatives des personnes handicapées comme élément moteur dans la promotion des droits des personnes handicapées, exigeant par conséquent leur participation systématique.</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="convention-subtitle">Lien utile :</h3>
          <p className="convention-text">
            <a href="https://example.com" className="convention-link">Accéder à la Convention relative aux droits des personnes handicapées (CDPH) en français</a>
          </p>
          <Image src="/path-to-your-image.png" fluid className="convention-image" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="convention-subtitle">Consulter :</h4>
          <ul className="convention-list">
            <li>Droits</li>
            <li>Cadre réglementaire concernant le handicap en Tunisie</li>
          </ul>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default SingleDroit;
