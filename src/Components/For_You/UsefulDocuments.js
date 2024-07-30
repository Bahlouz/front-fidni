import React from 'react';
import './UsefulDocuments.css';
import backnavhead from "../../Assets/back navhead.jpg"
import { Row,Col, Container } from 'react-bootstrap';

const documents = [
  {
    id: 1,
    title: "Protocole GBV Handicap TAMSS UNFPA",
    previewUrl: "https://mecdata.it/wp-content/uploads/2021/04/534px-PDF_file_icon.svg_.png",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Le handicap et les personnes handicapées dans les médias Tunisiens",
    previewUrl: "https://mecdata.it/wp-content/uploads/2021/04/534px-PDF_file_icon.svg_.png",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "L’accès des personnes handicapées à leurs droits culturels en tunisie",
    previewUrl: "https://mecdata.it/wp-content/uploads/2021/04/534px-PDF_file_icon.svg_.png",
    downloadUrl: "#"
  },
];

const UsefulDocuments = () => {
  return (
    <>
    <Row>
        <img className="backnavhead" src={backnavhead} aria-hidden="true" />
        </Row>
        <Container>
        <Row>
                <Col>
                <h1 className="documents-utiles-titre">Documents pour vous </h1>
                </Col>
            </Row>
        <Row>
                <Col>
                    <p className="documents-utiles-description">Explorez les options de travail, de formation, de financement et de bénévolat pour les personnes handicapées en Tunisie. Encouragez l'intégration et le développement en saisissant toutes les occasions d'avancer dans votre carrière et votre vie personnelle.
                    </p>
                </Col>
            </Row>
    <div className="useful-documents">
      {documents.map((doc) => (
        <div className="document" key={doc.id}>
          <div className="preview">
            <img src={doc.previewUrl} alt={`Preview of ${doc.title}`} />
          </div>
          <div className="info">
            <h2>{doc.title}</h2>
            <a href={doc.downloadUrl} download className="download-btn">Download</a>
          </div>
        </div>
      ))}
    </div>*
    </Container>
    </>
  );
};

export default UsefulDocuments;
