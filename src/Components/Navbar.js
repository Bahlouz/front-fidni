import React, { useState } from "react";
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

  return (
    <>
      <Header />
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        id="navbar"
        className={`navbar ${isVisible ? "visible" : "hidden"} ${theme}`}
        aria-label="Navigation principale"
      >
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex m-0 p-1">
            <img src={logo} className="logo" alt="Logo Fidni" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(expand ? false : "expanded")}
            aria-label="Basculer la navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-1" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} aria-label="Accueil">
                  Accueil
                </Nav.Link>
              </Nav.Item>
              {loading ? (
                <Nav.Item>Loading...</Nav.Item>
              ) : error ? (
                <Nav.Item>Error: {error}</Nav.Item>
              ) : (
                categories.map((category) => (
                  <NavDropdown title={category.name} id={`${category.name.toLowerCase()}-dropdown`} key={category.id}>
                    {category.subcategories.map((subCategory) => (
                      <NavDropdown.Item
                        as={Link}
                        to={`/${category.name.toLowerCase()}/${subCategory.name.toLowerCase()}`}
                        onClick={() => updateExpanded(false)}
                        aria-label={subCategory.name}
                        key={subCategory.id}
                      >
                        {subCategory.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ))
              )}

              <Nav.Item>
                <Nav.Link as={Link} to="/blog" onClick={() => updateExpanded(false)} aria-label="Blog">
                  Blog
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/wikidi" onClick={() => updateExpanded(false)} aria-label="Wikid">
                  Wikidi
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
                <Nav.Link as={Link} to="/press-corner" onClick={() => updateExpanded(false)} aria-label="Coin de presse">
                  Coin de presse
                </Nav.Link>
              </Nav.Item>
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
