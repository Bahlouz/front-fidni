import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal } from 'react-bootstrap';
import { ReactReader } from 'react-reader';
import './Docepub3.css';

const epubDocuments = [
    {
        title: 'Protocole GBV Handicap TAMSS UNFPA',
        url: '/path/to/book1.epub'
    },
    {
        title: 'Le handicap et les personnes handicapées dans les médias Tunisiens',
        url: '/path/to/book2.epub'
    },
    {
        title: 'L’accès des personnes handicapées à leurs droits culturels en tunisie',
        url: '/path/to/book3.epub'
    }
];

const Docepub3 = () => {
    const [selectedBook, setSelectedBook] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleSelectBook = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedBook(null);
        setShowModal(false);
    };

    return (
        <Container className="mt-4 epub-container">
            <Row>
                <Col>
                    <h1 className="epub-title">Documents EPUB3</h1>
                    <ListGroup>
                        {epubDocuments.map((book, index) => (
                            <ListGroup.Item key={index} action onClick={() => handleSelectBook(book)}>
                                {book.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>

            <Modal style={{ marginTop: '110px' }} show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedBook?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {selectedBook && (
                        <div className="epub-preview" >
                            <ReactReader url={selectedBook.url} />
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" href={selectedBook?.url} download>
                        Download
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Docepub3;
