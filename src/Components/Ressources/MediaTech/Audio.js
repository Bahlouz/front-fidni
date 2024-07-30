import React, { useRef, useState, useEffect } from 'react';
import './audio.css';
import { audioFiles } from './audiofiles';

const Audio = ({ audioSrc, name, description }) => {
  const audioRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const sliderDotRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(0.75);
  const [sliderDotPosition, setSliderDotPosition] = useState(75);

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
      setVolume(audio.volume);
      setSliderDotPosition(audio.volume * 100);
    };

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleLoadedData = () => {
      setIsLoading(false);
    };

    const handleError = (error) => {
      console.error('Audio playback error:', error);
      setIsLoading(false);
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    const sliderContainer = volumeSliderRef.current;
    const sliderDot = sliderDotRef.current;

    const onMouseMove = (e) => {
      const rect = sliderContainer.getBoundingClientRect();
      let newLeft = e.clientX - rect.left;
      newLeft = Math.max(0, Math.min(newLeft, rect.width));

      sliderDot.style.left = `${newLeft}px`;

      const newVolume = newLeft / rect.width;
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(false);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (e) => {
      e.preventDefault();
      onMouseMove(e);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    sliderDot.addEventListener('mousedown', onMouseDown);

    return () => {
      sliderDot.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

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

  const handleVolumeClick = (e) => {
    const volumeSlider = volumeSliderRef.current;
    const rect = volumeSlider.getBoundingClientRect();
    let newLeft = e.clientX - rect.left;

    newLeft = Math.max(0, Math.min(newLeft, rect.width));

    sliderDotRef.current.style.left = `${newLeft}px`;

    const newVolume = newLeft / rect.width;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio.muted) {
      audio.muted = false;
      setVolume(previousVolume);
      setSliderDotPosition(previousVolume * 100);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      audio.muted = true;
      setVolume(0);
      setSliderDotPosition(0);
      setIsMuted(true);
    }
  };

  const changeVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return 'icono-volumeMute';
    } else if (volume < 0.5) {
      return 'icono-volumeLow';
    } else {
      return 'icono-volumeMedium';
    }
  };

  const formatTime = (num) => {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
  };

  return (
    <div className="audio-container">
      <div className="audio-info">
        <div className="audio-title">{audioFiles.name}</div>
        <div className="audio-description">{description}</div>
      </div>
      <div className="audio-player">
        <audio ref={audioRef} src={audioSrc} aria-label={name}></audio>
        {isLoading && <div className="loading-indicator"></div>}
        <div className="timeline-container">
          <div
            className="timeline"
            onClick={handleTimelineClick}
            role="slider"
            aria-valuemin="0"
            aria-valuemax={duration}
            aria-valuenow={currentTime}
            aria-valuetext={formatTime(currentTime)}
            tabIndex="0"
          >
            <div className="progress-background">
              <div className="progress" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
            </div>
          </div>
        </div>
        <div className="controls">
          <div
            className="play-container"
            onClick={togglePlayPause}
            role="button"
            tabIndex="0"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="toggle-play pause" viewBox="0 0 24 24">
                <rect x="5" y="3" width="4" height="18" fill="white"></rect>
                <rect x="15" y="3" width="4" height="18" fill="white"></rect>
              </svg>
            ) : (
              <svg className="toggle-play play" viewBox="0 0 24 24">
                <polygon points="21.57 12 5.98 3 5.98 21 21.57 12"></polygon>
              </svg>
            )}
          </div>
          <div
            className="stop-container"
            onClick={stopPlayback}
            role="button"
            tabIndex="0"
            aria-label="Stop"
          >
            <svg className="stop" viewBox="0 0 24 24">
              <rect x="6" y="6" width="12" height="12" fill="white"></rect>
            </svg>
          </div>
          <div className="time" aria-label="Playback Time">
            <div className="current">{formatTime(currentTime)}</div>
            <div className="divider">/</div>
            <div className="length">{formatTime(duration)}</div>
          </div>
          <div className="name">{name}</div>
          <div className="volume-container">
            <div
              className="volume-button"
              onClick={toggleMute}
              role="button"
              tabIndex="0"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              <div className={`volume ${changeVolumeIcon()}`}></div>
            </div>
            <div
              className="volume-slider-container"
              ref={volumeSliderRef}
              onClick={handleVolumeClick}
              role="slider"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={Math.round(volume * 100)}
              aria-valuetext={`${Math.round(volume * 100)}%`}
              tabIndex="0"
            >
              <div className="volume-slider">
                <div className="slider-dot" style={{ left: `${sliderDotPosition}%` }} ref={sliderDotRef}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
