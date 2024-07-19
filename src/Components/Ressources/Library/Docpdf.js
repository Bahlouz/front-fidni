import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal } from 'react-bootstrap';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import './Docpdf.css';

const pdfDocuments = [
    {
        title: 'Document 1',
        url: '/path/to/document1.pdf'
    },
    {
        title: 'Document 2',
        url: '/path/to/document2.pdf'
    },
    {
        title: 'Document 3',
        url: '/path/to/document3.pdf'
    }
];

const Docpdf = () => {
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleSelectDocument = (document) => {
        setSelectedDocument(document);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1 className="pdf-title">PDF Documents</h1>
                    <ListGroup>
                        {pdfDocuments.map((doc, index) => (
                            <ListGroup.Item key={index} action onClick={() => handleSelectDocument(doc)}>
                                {doc.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>

            <Modal style={{ marginTop: '110px' }} show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedDocument?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedDocument && (
                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js`}>
                            <div className="pdf-preview">
                                <Viewer fileUrl={selectedDocument.url} defaultScale={SpecialZoomLevel.PageFit} />
                            </div>
                        </Worker>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" href={selectedDocument?.url} download>
                        Download
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Docpdf;
