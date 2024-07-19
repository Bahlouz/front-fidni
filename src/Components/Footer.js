import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineSpotify,
  AiOutlineFacebook,
} from "react-icons/ai";
import logo from "../Assets/logo.svg";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleClickDescription = () => {
    // Scroll to the section with id="description" with an extra offset of 170px
    const descriptionSection = document.getElementById("description");
    if (descriptionSection) {
      const offset = descriptionSection.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
      <footer className="footer" id="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <img className="footer-lg" src={logo} />
              </a>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Commencer</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#description">À propos de nous</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="/accessibility">Accessibilité</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Media tech</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/resources/media/audio">Audio</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="/resources/media/video">Vidéo</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/resources/media/podcast">Podcast</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Bibliothéque</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="/resources/library/pdf">EPUB3</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/resources/library/epub3">PDF</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Liens rapides</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/for-you/useful-links"
                  >
                    Liens Utiles
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/for-you/useful-addresses"
                  >
                    Adresses utiles
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/for-you/useful-documents">Documents utiles</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/blog">Blog</a>
                </li>
                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <a href="/wikid">Wikidi</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/news-events/news">Actualités</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">Discutons</h2>
              <p className="footer-call-to-action-description">
                Avez-vous une question de support ?
              </p>
              <a
                className="footer-call-to-action-button button"
                href="#"
                target="_self"
              >
                Contactez-nous
              </a>
            </div>
          </div>
          <div class="footer-social-links"> 
  <svg class="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
    <path class="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
  </svg>
  <a class="footer-social-link spotify" href="#" target="_blank">
    <span class="hidden-link-text">Spotify</span>
    <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <AiOutlineSpotify />
    </svg>
  </a>
  <a class="footer-social-link youtube" href="#" target="_blank">
    <span class="hidden-link-text">YouTube</span>
    <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <AiOutlineYoutube />
    </svg>
  </a>
  <a class="footer-social-link instagram" href="#" target="_blank">
    <span class="hidden-link-text">Instagram</span>
    <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <AiOutlineInstagram />
    </svg>
  </a>
  <a class="footer-social-link facebook" href="#" target="_blank">
    <span class="hidden-link-text">Facebook</span>
    <svg class="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <AiOutlineFacebook />
    </svg>
  </a>
</div>
</div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              &copy; {year} Fidni. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
