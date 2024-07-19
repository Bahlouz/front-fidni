import React from "react";
import Home2 from "./Home2";
import home_pic from "../../Assets/home_pic.svg";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <section aria-labelledby="home-title">
      <div className="home-section" id="home">
        <div className="home_img">
          <img tabindex="1" src={home_pic} alt="Image d'accueil" className="imgh" />
        </div>
        <div className="overlay-home">
          <h1 tabIndex="2" id="home-title">Parlant accessibilité</h1>
          <p tabindex="3">
            Fidni fait tomber les barrières de l'information. Grâce à des textes clairs, des descriptions
            et des vidéos attrayantes, nous permettons aux personnes
            handicapées de se tenir informées des lois sur l'accessibilité, des programmes
            et tout ce qui se trouve entre les deux.
          </p>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
