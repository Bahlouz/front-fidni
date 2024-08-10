import React from "react";
import Home2 from "./Home2";
import home_pic from "../../Assets/home_pic.svg";
import { Container } from "react-bootstrap";
import QuiSommeNous from "../About/Description/QuiSommesNous";
import QuoteComponent from "../About/Quote";

function Home() {
  return (
    <section className="home-main-section">
      <Container fluid className="p-0">
        <div className="home-section" id="home">
          <div className="home_img">
            <img
              tabIndex="1"
              src={home_pic}
              alt="Image d'accueil"
              className="imgh"
              aria-label="Image d'accueil"
            />
          </div>
          <div className="overlay-home">
            <h1 tabIndex="2" id="home-title">
              Parlons Accessibilité
            </h1>
            <p tabIndex="3" className="home-intro">
            Fidni est un carrefour multipartite et accessible qui regroupe les personnes handicapées et les acteurs engagés pour la promotion de leurs droits et services en Tunisie, pour un changement des mentalités sur le handicap.
            </p>
          </div>
        </div>
      </Container>
      <QuiSommeNous />
      <Home2 />
      <QuoteComponent />
    </section>
  );
}

export default Home;
