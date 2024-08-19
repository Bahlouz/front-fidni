import React, { useEffect, useState } from 'react';
import './App.css';
import './style.css';
import './darkstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer';
import PressCorner from './Components/Press_Corner/PressCorner';
import Docpdf from './Components/Ressources/Library/Docpdf';
import Docepub3 from './Components/Ressources/Library/Docepub3';
import Blog from './Components/Blog/Blog';
import Events from './Components/News_&_Events/Events/Events';
import News from './Components/News_&_Events/News/News'
import AudioPodcast from './Components/Ressources/MediaTech/AudioPodcast';
import UsefulLinks from './Components/For_You/UsefulLinks';
import UsefulAddresses from './Components/For_You/UsefulAddresses'; 
import Opportunities from './Components/For_You/Opportunities';
import AccessibilityFeatures from './Components/AccessibilityFeatures/AccessibilityFeatures';
import { ThemeProvider } from './Context/ThemeContext';
import Wikid from './Components/Wikid/Wikid';
import UsefulDocuments from './Components/For_You/UsefulDocuments';
import VideoPlayerList from './Components/Ressources/MediaTech/Video';
import Preloader from './Components/Preloader';
import { useTheme } from './Context/ThemeContext';
import SinglePost from './Components/Blog/SinglePost';
import SingleNews from './Components/News_&_Events/News/SingleNews';
import SingleWikidi from './Components/Wikid/SingleWikidi';
import SinglePressRelease from './Components/Press_Corner/SinglePress';
import SavoirLab from './Components/SavoirLab/SavoirLab';
import Annuaire from './Components/For_You/Annuaire';
import Services from './Components/For_You/Services';
import Droits from './Components/For_You/Droits';
import AccessibilityIcon from './Components/AccessibilitySettings/AccessibilitySettings';
import Convention from './Components/For_You/Convention';
import Accessibility from './Components/SavoirLab/Accessibility/Accessibility';
import Communication from './Components/SavoirLab/Communication/Communication';
import DocumentPl from './Components/SavoirLab/DocumentsPl/DocumentPl';
import ActeurScPl from './Components/Wikid/ActeurScPl';
import Artistes from './Components/Wikid/Artistes';
import Chercheurs from './Components/Wikid/Chercheurs';
import Sportifs from './Components/Wikid/Sportifs';
import Entrepreneurs from './Components/Wikid/Entrepreneurs';
import Cadre from './Components/For_You/Cadre';
import AccessMedia from './Components/SavoirLab/Accessibility/AccessMedia/AccessMedia';
import AppuiActeurs from './Components/SavoirLab/Accessibility/AppuiActeurs/AppuiActeurs';
import Guide from './Components/SavoirLab/Communication/Guide/Guide';
import Lexique from './Components/SavoirLab/Communication/Lexique/Lexique';
import Charte from './Components/SavoirLab/Communication/Charte/Charte';
import Recommandation from './Components/SavoirLab/Communication/Recommandation/Recommandation';
import Adoption from './Components/SavoirLab/Communication/Recommandation/Adoption/Adoption';
import Coalition from "./Components/SavoirLab/Communication/Charte/Coalition/Coalition";
import ContactUs from './Components/ContactUs';
import SingleEvents from './Components/News_&_Events/Events/SingleEvents';

function App() {
  const { toggleTheme, theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual data fetching logic)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after delay
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);



  return (
    <div className={`app ${theme}`}>

        <Router>
          <AccessibilityIcon />
          <NavBar />
          <Routes>
          <Route path="/accessibility" Component={AccessibilityFeatures} />
          <Route path='/savoir-lab/wikiphedia' Component={Wikid} />
          <Route path="/savoir-lab/wikiphedia/acteurs-sociaux-politiques" Component={ActeurScPl} />
          <Route path="/savoir-lab/wikiphedia/artistes" Component={Artistes} />
          <Route path="/savoir-lab/wikiphedia/chercheurs" Component={Chercheurs} />
          <Route path="/savoir-lab/wikiphedia/entrepreneurs" Component={Entrepreneurs} />
          <Route path="/savoir-lab/wikiphedia/sportifs" Component={Sportifs} />
          <Route path="/savoir-lab/wikiphedia/:storyTitle" Component={SingleWikidi} />
          <Route path='/savoir-lab/savoir-lab' Component={SavoirLab} />
          <Route path='/savoir-lab/accessibilite' Component={Accessibility} />
          <Route path='/savoir-lab/Accessibilité aux médias et à l’information' Component={AccessMedia} />
          <Route path='/savoir-lab/Appui des acteurs médiatiques au processus d accessibilité' Component={AppuiActeurs} />
          <Route path='/savoir-lab/communication-inclusive' Component={Communication} />
          <Route path='/savoir-lab/communication-inclusive/charte-nationale/coalition' Component={Coalition} />
          <Route path='/contactez-nous' Component={ContactUs} />
          <Route path='/savoir-lab/guide' Component={Guide} />
          <Route path='/savoir-lab/lexique' Component={Lexique} />
          <Route path='/savoir-lab/charte-nationale' Component={Charte} />
          <Route path='/savoir-lab/recommandations' Component={Recommandation} />
          <Route path='/savoir-lab/recommandations/adoption' Component={Adoption} />
          <Route path='/savoir-lab/documents-de-plaidoyer' Component={DocumentPl} />
          <Route path='/services-et-droits/droits' Component={Droits} />
          <Route path='/services-et-droits/services' Component={Services} />
          <Route path="/services-et-droits/convention" Component={Convention} />
          <Route path="/services-et-droits/cadre" Component={Cadre} />
          <Route path='/for-you/annuaire-ong' Component={Annuaire} />
          <Route path="/" Component={Home} />
          <Route path="/resources/media/video" Component={VideoPlayerList} />
          <Route path="/resources/media/audio-podcast" Component={AudioPodcast} />
          <Route path="/press-corner" Component={PressCorner} />
          <Route path="/press-corner/:pressId" Component={SinglePressRelease} />
          <Route path="/blog" Component={Blog} />
          <Route path="/blog/:postId" element={<SinglePost />} />
          <Route path="/post/:postId" Component={SinglePost} />
          <Route path="/resources/library/pdf" Component={Docpdf} />
          <Route path="/resources/library/epub3" Component={Docepub3} />
          <Route path="/news-events/news" Component={News} />
          <Route path="/news/:newsId" Component={SingleNews} />
          <Route path="/news-events/events" Component={Events} />
          <Route path="/events/:eventTitle" element={<SingleEvents />} />
          <Route path="/for-you/useful-links" Component={UsefulLinks} />
          <Route path="/for-you/useful-addresses" Component={UsefulAddresses} />
          <Route path="/for-you/useful-documents" Component={UsefulDocuments} />
          <Route path="/services-et-droits/opportunites" Component={Opportunities} />
          </Routes>
          <Footer />
        </Router>

    </div>
  );
}

export default App;
