import React, { useState } from 'react';
import './video.css'; // Import the custom CSS
import videos from './videolist'; // Import the video list
import backvideo from"../../../Assets/backvideo.jpg";
import { Col,Row ,Button} from 'react-bootstrap';

const VideoPlayer = ({ url, title, description }) => {
  const renderVideo = () => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      // YouTube video embedding
      const embedUrl = url.includes('youtube.com') 
        ? url.replace('watch?v=', 'embed/') 
        : `https://www.youtube.com/embed/${url.split('/').pop()}`;
      return (
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title={title}
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else if (url.includes('fb.watch')) {
      // Facebook Watch video embedding
      const fbVideoUrl = `https://www.facebook.com/plugins/video.php?href=${url}`;
      return (
        <div style={{
    position: 'relative',
    width: '560px',  // Width of the container (standard video width)
    height: '315px', // Height of the container (standard video height)
    margin: '0 auto', // Center the container horizontally
    background: '#000', // Background color to fill gaps
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      transform: 'translate(-50%, -50%)', // Center the content
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#000'
    }}>
      <iframe
        src={fbVideoUrl}
        style={{
          width: '32%',
          height: '100%',
          maxWidth: '100%', // Ensure the video scales correctly
          border: 'none',
        }}
        allow="encrypted-media"
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  </div>
      );
    } else if (url.includes('facebook.com') && url.includes('/reel/')) {
      // Facebook Reel embedding
      return (
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=${url}`}
          width="560"
          height="315"
          style={{ border: 'none', overflow: 'hidden' }}
          allow="encrypted-media"
          allowFullScreen
          title={title}
        ></iframe>
      );
    } else if (url.includes('facebook.com')) {
      // Facebook video embedding
      return (
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=${url}`}
          width="560"
          height="315"
          style={{ border: 'none', overflow: 'hidden' }}
          allow="encrypted-media"
          allowFullScreen
          title={title}
        ></iframe>
      );
    } else if (url.includes('instagram.com') && url.includes('/reel/')) {
  // Instagram Reel embedding
  // Remove query parameters for proper embedding
  const cleanUrl = url.split('?')[0];

  return (
    <div style={{
      position: 'relative',
      width: '560px',  // Width of the container (standard video width)
      height: '315px', // Increased height to better fit Instagram's embed format
      margin: '0 auto', // Center the container horizontally
      background: '#000', // Background color to fill gaps
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        transform: 'translate(-50%, -50%)', // Center the content
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}>
        <iframe
          src={`${cleanUrl}embed/`}
          width="40%"
          height="100%"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    </div>
      );
    } else if (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg')) {
      // Local video file embedding
      return (
        <video width="560" height="315" controls style={{ border: 'none' }}>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <p>Unsupported video format or platform.</p>;
    }
  };

  return (
    <div className="video-container">
      <h3>{title}</h3>
      <div className="video-player">{renderVideo()}</div>
      <p>{description}</p>
    </div>
  );
};

const VideoPlayerList = () => {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
return (
  <div>
      <div className="audio-image">
        <img src={backvideo} alt="Background" />
      </div> 
      <div className="page-header">
        <h1 className='video-page-title'>Vidéos Informatives</h1>
        <p className='video-page-description'>Découvrez nos vidéos sélectionnées pour vous.</p>
      </div>
      <Row className="videos-list">
        {videos.map((video, index) => (
          <Col md={6} key={index} className="video-item">
            <div className="video-player">
              <VideoPlayer
                url={video.url}
                title={video.title}
              />
              <div className="description-container">
                <p className={`description-text ${expanded[index] ? 'expanded' : ''}`}>
                  {video.description}
                </p>
                {video.description.length > 100 && (
                  <Button
                    variant="link"
                    onClick={() => toggleDescription(index)}
                  >
                    {expanded[index] ? 'Afficher moins' : 'Afficher plus'}
                  </Button>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
);
};

export default VideoPlayerList;