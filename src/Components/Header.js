import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { IoIosContrast } from "react-icons/io";
import ScrollHandler from "./ScrollHandler";
import { useTheme } from '../Context/ThemeContext';

function Header() {
  const isVisible = ScrollHandler();
  const { toggleTheme, theme } = useTheme(); // Access toggleTheme and theme from context
  const [isScrolled, setIsScrolled] = useState(false);
  const handleZoomAlert = () => {
    alert('Vous pouvez augmenter ou diminuer le zoom de la page en utilisant les raccourcis Ctrl + et Ctrl -');
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    <header id='header' className={`header ${isScrolled ? 'scrolled' : 'visible'} ${theme}`}>
      <div className="header-links">
        <a href="#content" onClick={() => window.scrollBy(0, 50)}>Aller au contenu [1]</a>
        <a href="#navbar" onClick={() => handleScrollTo('navbar')} style={{ cursor: 'pointer' }}>Aller au menu [2]</a>
        <a href="#footer" onClick={() => {
          window.scrollTo(0, document.body.scrollHeight);
          handleScrollTo('footer');
        }} style={{ cursor: 'pointer' }}>Aller au pied de page [3]</a>
      </div>
      <div className="header-controls">
        <span onClick={handleZoomAlert} style={{ cursor: 'pointer' }}>A+/A-</span>
        <span onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        </span>
        <Link to="/accessibility">Accessibilité [4]</Link>
      </div>
      <div className="header-icons">
        <Link to="/instagram"><AiOutlineInstagram /></Link>
        <Link to="/facebook"><AiOutlineFacebook /></Link>
        <Link to="/youtube"><AiOutlineYoutube /></Link>
        <div className="dropdown">
          <select>
            <option value="en">Français</option>
            <option value="fr">عربي</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
