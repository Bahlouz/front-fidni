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
            <Route path="/accessibility" element={<AccessibilityFeatures />} />
            <Route path='/savoir-lab/wikiphedia' element={<Wikid />} />
            <Route path="/savoir-lab/wikiphedia/acteurs-sociaux-politiques" element={<ActeurScPl />} />
            <Route path="/savoir-lab/wikiphedia/artistes" element={<Artistes />} />
            <Route path="/savoir-lab/wikiphedia/chercheurs" element={<Chercheurs />} />
            <Route path="/savoir-lab/wikiphedia/entrepreneurs" element={<Entrepreneurs />} />
            <Route path="/savoir-lab/wikiphedia/sportifs" element={<Sportifs />} />
            <Route path="/savoir-lab/wikiphedia/:storyId" element={<SingleWikidi />} />
            <Route path='/savoir-lab/savoir-lab' element={<SavoirLab />} />
            <Route path='/savoir-lab/accessibilite' element={<Accessibility />} />
            <Route path='/savoir-lab/Accessibilité aux médias et à l’information' element={<AccessMedia />} />
            <Route path='/savoir-lab/Appui des acteurs médiatiques au processus d accessibilité' element={<AppuiActeurs />} />
            <Route path='/savoir-lab//communication-inclusive' element={<Communication />} />
            <Route path='/savoir-lab/guide' element={<Guide />} />
            <Route path='/savoir-lab/lexique' element={<Lexique />} />
            <Route path='/savoir-lab/charte-nationale' element={<Charte />} />
            <Route path='/savoir-lab/recommandations' element={<Recommandation />} />
            <Route path='/savoir-lab/documents-de-plaidoyer' element={<DocumentPl />} />
            <Route path='/services-et-droits/droits' element={<Droits />} />
            <Route path="/services-et-droits/convention" element={<Convention />} />
            <Route path="/services-et-droits/cadre" element={<Cadre />} />
            <Route path='/for-you/annuaire-ong' element={<Annuaire />} />
            <Route path="/" element={<Home />} />
            <Route path="/resources/media/video" element={<VideoPlayerList />} />
            <Route path="/resources/media/audio-podcast" element={<AudioPodcast />} />
            <Route path="/press-corner" element={<PressCorner />} />
            <Route path="/press-corner/:pressId" element={<SinglePressRelease />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:postId" element={<SinglePost />} />
            <Route path="/resources/library/pdf" element={<Docpdf />} />
            <Route path="/resources/library/epub3" element={<Docepub3 />} />
            <Route path="/news-events/news" element={<News />} />
            <Route path="/news/:newsId" element={<SingleNews />} />
            <Route path="/news-events/events" element={<Events />} />
            <Route path="/for-you/useful-links" element={<UsefulLinks />} />
            <Route path="/for-you/useful-addresses" element={<UsefulAddresses />} />
            <Route path="/for-you/useful-documents" element={<UsefulDocuments />} />
            <Route path="/services-et-droits/opportunites" element={<Opportunities />} />
          </Routes>
          <Footer />
        </Router>

    </div>
  );
}

export default App;
