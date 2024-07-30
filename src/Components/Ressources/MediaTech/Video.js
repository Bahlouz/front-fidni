// VideoPlayer.jsx

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './video.css'; // Import the custom CSS
import videos from './videolist'; // Import the video list
import backvideo from"../../../Assets/backvideo.jpg";
const VideoPlayer = ({ url, title, description }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);  

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="video-section">
      <h2 className='video-title'>{title}</h2>
      <p className='video-description'>{description}</p>
      <div className="video-player-container">
        <ReactPlayer
          url={url}
          playing={false}
          controls
          width="100%"
          height="100%"
          muted={isMuted}
          volume={volume}
        />
        <div className="video-player-controls">
          <button onClick={handleMuteToggle}>{isMuted ? "Unmute" : "Mute"}</button>
          <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
};

const VideoPlayerList = () => {
  return (
    <div>
      <div className="audio-image">
                <img src={backvideo}></img>
      </div> 
      <h1 className='video-page-title'>Vidéos Informatives</h1>
      <p className='video-page-description'>Découvrez nos vidéos sélectionnées pour vous.</p>
      {videos.map((video, index) => (
        <VideoPlayer
          key={index}
          url={video.url}
          title={video.title}
          description={video.description}
        />
      ))}
    </div>
  );
};

export default VideoPlayerList;
