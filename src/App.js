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
import SingleDroit from './Components/For_You/SingleDroit';

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
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <AccessibilityIcon />
          <NavBar />
          <Routes>
            <Route path="/accessibility" element={<AccessibilityFeatures />} />
            <Route path='/savoir-lab/wikiphedia' element={<Wikid />} />
            <Route path="/savoir-lab/wikiphedia/:storyId" element={<SingleWikidi />} />
            <Route path='/savoir-lab/savoir-lab' element={<SavoirLab />} />
            <Route path='/services-et-droits/droits' element={<Droits />} />
            <Route path="/savoir-lab/droits/:id" element={<SingleDroit />} />
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
      )}
    </div>
  );
}

export default App;
