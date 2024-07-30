import React, { useState,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import { NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import ScrollHandler from './ScrollHandler';
import Header from "./Header";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { useTheme } from '../Context/ThemeContext';
import useCategoriesAndSubCategories from "./usefetch";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isVisible = ScrollHandler();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { toggleTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const { loading, error, categories } = useCategoriesAndSubCategories();

  const handleSearchToggle = () => setSearchOpen(!searchOpen);

  const handleSearchInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    try {
      if (query.trim() !== '') {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username_like=${query}`);
        const users = response.data;
        const userSuggestions = users.map(user => user.email);
        setSuggestions(userSuggestions);
        setSearchOpen(true);
      } else {
        setSuggestions([]);
        setSearchOpen(true);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search submitted:", searchQuery);
    setSearchOpen(false);
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
    setSearchOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value based on when you want the color change to happen
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <Navbar 
        expanded={expand}
        fixed="top"
        expand="md"
        id="navbar"
        className={`${isScrolled ? 'scrolled' : 'visible'}`}
        aria-label="Navigation principale"
      >
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex m-0 p-1">
            <img src={logo} className="img-fluid logo" alt="Logo HandiHub" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
            aria-label="Basculer la navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                  aria-label="Accueil"
                >
                  Accueil
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Services et Droits" id="for-you-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/for-you/useful-links"
                  onClick={() => updateExpanded(false)}
                  aria-label="Liens utiles"
                >
                  Liens utiles
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/for-you/useful-documents"
                  onClick={() => updateExpanded(false)}
                  aria-label="Documents utiles"
                >
                  Documents pour vous
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/for-you/annuaire-ong"
                  onClick={() => updateExpanded(false)}
                  aria-label="Opportunités"
                >
                  Annuaire ONGs
                </NavDropdown.Item> 
                <NavDropdown.Item
                  as={Link}
                  to="/for-you/opportunities"
                  onClick={() => updateExpanded(false)}
                  aria-label="Opportunités"
                >
                  Opportunités
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/blog"
                  onClick={() => updateExpanded(false)}
                  aria-label="Blog"
                >
                  Blog
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="WikiPhidia" id="wikiphidia-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/wikiphidia/artistes"
                  onClick={() => updateExpanded(false)}
                  aria-label="artistes"
                >
                  Artistes
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/wikiphidia/para-lympiques"
                  onClick={() => updateExpanded(false)}
                  aria-label="para-lympiques"
                >
                  Para-lympiques
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/wikiphidia/entrepreneurs"
                  onClick={() => updateExpanded(false)}
                  aria-label="entrepreneurs"
                >
                  Entrepreneurs
                </NavDropdown.Item>
                </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/savoir-lab"
                  onClick={() => updateExpanded(false)}
                  aria-label="Savoir Lab"
                >
                  Savoir Lab
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Actualités et Événements" id="news-events-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/news-events/news"
                  onClick={() => updateExpanded(false)}
                  aria-label="Actualités"
                >
                  Actualités
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/news-events/events"
                  onClick={() => updateExpanded(false)}
                  aria-label="Événements"
                >
                  Événements
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/press-corner"
                  onClick={() => updateExpanded(false)}
                  aria-label="Coin de presse"
                >
                  Coin de presse
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Media Tech" id="media-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/resources/media/audio"
                    onClick={() => updateExpanded(false)}
                    aria-label="Audio"
                  >
                    Audio
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/resources/media/video"
                    onClick={() => updateExpanded(false)}
                    aria-label="Vidéo"
                  >
                    Vidéo
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/resources/media/podcasts"
                    onClick={() => updateExpanded(false)}
                    aria-label="Podcast"
                  >
                    Podcast
                  </NavDropdown.Item>
                </NavDropdown>
              <Nav.Item>
                <Nav.Link onClick={handleSearchToggle} aria-label="Rechercher">
                <AiOutlineSearch />
                </Nav.Link>
              </Nav.Item>
            </Nav>
      {searchOpen && (
        <div className="search-dropdown">
          <Container>
            <Form onSubmit={handleSearchSubmit} className="position-relative">
              <FormControl
                type="search"
                placeholder="Rechercher..."
                className="me-2"
                aria-label="Rechercher"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <Button variant="outline-success" type="search">
              Rechercher
              </Button>
            </Form>
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </div>
      )}
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}

export default NavBar;
