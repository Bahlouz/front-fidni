import React, { useRef, useState, useEffect } from 'react';
import './audio.css';  // Create this CSS file for styling
import { audioFiles } from './audiofiles';

const Audio = () => {
  const [currentTrack, setCurrentTrack] = useState(audioFiles[0]); // Default to the first track
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', setAudioData);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', setAudioData);
    };
  }, [currentTrack]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const stopPlayback = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const handleTimelineClick = (e) => {
    const timeline = e.currentTarget;
    const newTime = (e.nativeEvent.offsetX / timeline.offsetWidth) * duration;
    audioRef.current.currentTime = newTime;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio.muted) {
      audio.muted = false;
      setVolume(0.75);
    } else {
      audio.muted = true;
      setVolume(0);
    }
    setIsMuted(audio.muted);
  };

  const formatTime = (num) => {
    let minutes = Math.floor(num / 60);
    let seconds = Math.floor(num % 60);
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="audio-player-container">
      {audioFiles.map((track, index) => (
        <div key={index} className="audio-player">
          <audio ref={audioRef} src={track.url} type={track.type} />
          <div className="audio-info">
            <h2 className="audio-title">{track.name}</h2>
            <p className="audio-description">{track.description}</p>
          </div>
          <div className="audio-controls">
            <button onClick={togglePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button onClick={stopPlayback} aria-label="Stop">Stop</button>
            <div className="progress-container" onClick={handleTimelineClick}>
              <div className="progress-bar" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
            </div>
            <div className="volume-controls">
              <button onClick={toggleMute} aria-label={isMuted ? 'Unmute' : 'Mute'}>
                {isMuted ? 'Unmute' : 'Mute'}
              </button>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={volume} 
                onChange={handleVolumeChange}
              />
            </div>
            <div className="time">
              <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Audio;
