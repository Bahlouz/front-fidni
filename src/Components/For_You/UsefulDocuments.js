import React from 'react';
import './UsefulDocuments.css';

const documents = [
  {
    id: 1,
    title: "Guide d'accessibilité",
    previewUrl: "https://via.placeholder.com/150",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Règlement sur l'accessibilité",
    previewUrl: "https://via.placeholder.com/150",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Manuel de l'utilisateur",
    previewUrl: "https://via.placeholder.com/150",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Rapport annuel",
    previewUrl: "https://via.placeholder.com/150",
    downloadUrl: "#"
  },
];

const UsefulDocuments = () => {
  return (
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
    </div>
  );
};

export default UsefulDocuments;
