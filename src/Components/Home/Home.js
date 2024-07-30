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
              Fidni est un carrefour qui regroupe tous ceux qui s’intéressent à
              la ​thématique de l’handicap en Tunisie. Il fait tomber les
              barrières à ​l’information.
              <br />
              Grace à des textes clairs, des descriptions et des vidéos
              attrayantes, nous ​permettons aux personnes en situation d’handicap
              (PSH) de se tenir ​informées des lois, des programmes et de tout ce
              qui se trouve entre les ​deux.
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
