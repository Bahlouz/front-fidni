import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { wikiditems } from './wikiditems'; // Import wikiditems data
import "./Wikid.css";

const Wikidi = () => {
    const location = useLocation();
    const currentPath = location.pathname.split('/').pop(); // Extract current page from URL
    const latestStory = wikiditems[0];

    // Updated links based on your provided categories
    const wikidlinks = [
        { title: 'Les acteurs sociaux et politiques', link: '/savoir-lab/wikiphedia/acteurs-sociaux-politiques', page: 'acteurs-sociaux-politiques' },
        { title: 'Les artistes', link: '/savoir-lab/wikiphedia/artistes', page: 'artistes' },
        { title: 'Les chercheurs', link: '/savoir-lab/wikiphedia/chercheurs', page: 'chercheurs' },
        { title: 'Les entrepreneurs', link: '/savoir-lab/wikiphedia/entrepreneurs', page: 'entrepreneurs' },
        { title: 'Les sportifs', link: '/savoir-lab/wikiphedia/sportifs', page: 'sportifs' }
    ];

    return (
        <>
            <div className="background-image-wikiphedia">
                <div className="overlay-text-wikiphedia">
                    <h1 className="wikiphedia-titre">Wikiphedia</h1>
                    <p className="p-5 wikiphedia-description">
                        Découvrez des profils détaillés d'artistes, d'athlètes paralympiques, et d'entrepreneurs de scientifiques et d'autres profils de personnes en situation de handicap, Explorez leurs réalisations, parcours et contributions dans divers domaines pour vous inspirer et vous informer.
                    </p>
                </div>

                <div className="button-container">
                    {wikidlinks.map((item, index) => (
                        <Button
                            key={index}
                            className={`wikid-button ${currentPath === item.page ? 'active' : ''}`}
                            href={item.link} // Navigate to the new page
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>
            </div>

           
        </>
    );
};

export default Wikidi;
