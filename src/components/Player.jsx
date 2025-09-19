import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat, Heart, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon } from 'lucide-react';
import usePlayerStore from '../store/usePlayerStore';
import { formatTime } from '../utils/mockData';

const Player = () => {
  const audioRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const lastUpdateTime = useRef(0);
  
  const {
    isPlaying,
    currentTrack,
    currentTime,
    duration,
    volume,
    isMuted,
    isShuffled,
    repeatMode,
    togglePlay,
    setCurrentTime,
    setDuration,
    setVolume,
    toggleMute,
    toggleShuffle,
    setRepeatMode,
    nextTrack,
    previousTrack,
    toggleLike,
    isLiked,
    addToRecentlyPlayed
  } = usePlayerStore();

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!isDragging && audio.currentTime !== undefined && !isNaN(audio.currentTime)) {
        const now = Date.now();
        // Update only every 100ms to prevent excessive updates
        if (now - lastUpdateTime.current > 100) {
          const stableTime = Math.floor(audio.currentTime * 10) / 10; // Round to 1 decimal
          console.log('Time update:', { currentTime: stableTime, duration: audio.duration });
          setCurrentTime(stableTime);
          lastUpdateTime.current = now;
        }
      }
    };

    const handleLoadedMetadata = () => {
      console.log('Audio metadata loaded:', {
        duration: audio.duration,
        src: audio.src,
        readyState: audio.readyState
      });
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
      } else {
        nextTrack();
      }
    };

    const handleCanPlay = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [isDragging, repeatMode, setCurrentTime, setDuration, nextTrack]);

  // Play/pause control
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Auto-play when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    // Add to recently played
    addToRecentlyPlayed(currentTrack);

    // Reset progress when track changes
    setCurrentTime(0);
    setDuration(0);

    // Load and play the track
    audio.src = currentTrack.audioUrl;
    audio.load();
    
    // Wait for metadata to load before playing
    const handleCanPlay = () => {
      if (isPlaying) {
        audio.play().catch((error) => {
          console.error('Playback error:', error);
        });
      }
    };

    audio.addEventListener('canplay', handleCanPlay, { once: true });
    
    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [currentTrack, addToRecentlyPlayed, setCurrentTime, setDuration, isPlaying]);

  // Volume control
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Remove animation frame updates - use only audio events for stability

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const newTime = percent * duration;
    
    // Ensure newTime is within bounds
    const clampedTime = Math.max(0, Math.min(newTime, duration));
    
    audio.currentTime = clampedTime;
    setCurrentTime(clampedTime);
  };

  const handleProgressMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleProgressMouseUp = (e) => {
    setIsDragging(false);
  };

  const handleProgressMouseMove = (e) => {
    if (!isDragging) return;
    
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const moveX = e.clientX - rect.left;
    const percent = moveX / rect.width;
    const newTime = percent * duration;
    
    const clampedTime = Math.max(0, Math.min(newTime, duration));
    setCurrentTime(clampedTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const handleRepeatClick = () => {
    const modes = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setRepeatMode(nextMode);
  };

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 player-container z-50" style={{ willChange: 'auto' }}>
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        preload="metadata"
      />
      
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-2xl mx-auto" style={{ position: 'relative' }}>
        {/* Track Info */}
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <div className="relative group">
            <img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="w-16 h-16 rounded-lg object-cover shadow-xl hover:scale-105 transition-transform duration-300"
            />
            {isPlaying && (
              <div className="absolute inset-0 rounded-lg bg-spotify-green bg-opacity-20 flex items-center justify-center">
                <div className="w-2 h-2 bg-spotify-green rounded-full pulse-animation"></div>
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-white font-semibold truncate hover:text-spotify-green transition-colors duration-200">
              {currentTrack.title}
            </h4>
            <p className="text-spotify-text text-sm truncate hover:text-white transition-colors duration-200">
              {currentTrack.artist}
            </p>
          </div>
          <button 
            onClick={() => currentTrack && toggleLike(currentTrack.id)}
            className={`transition-all duration-200 hover:scale-110 ${
              currentTrack && isLiked(currentTrack.id) 
                ? 'text-spotify-green' 
                : 'text-spotify-text hover:text-spotify-green'
            }`}
          >
            <Heart size={20} fill={currentTrack && isLiked(currentTrack.id) ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center space-y-2 flex-1">
          {/* Control Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleShuffle}
              className={`text-spotify-text hover:text-white transition-colors ${
                isShuffled ? 'text-spotify-green' : ''
              }`}
            >
              <Shuffle size={20} />
            </button>
            
            <button
              onClick={previousTrack}
              className="text-spotify-text hover:text-white transition-colors"
            >
              <SkipBack size={24} />
            </button>
            
            <button
              onClick={togglePlay}
              className="play-button"
            >
              {isPlaying ? <Pause size={24} className="text-black" /> : <Play size={24} className="text-black ml-1" />}
            </button>
            
            <button
              onClick={nextTrack}
              className="text-spotify-text hover:text-white transition-colors"
            >
              <SkipForward size={24} />
            </button>
            
            <button
              onClick={handleRepeatClick}
              className={`text-spotify-text hover:text-white transition-colors ${
                repeatMode !== 'off' ? 'text-spotify-green' : ''
              }`}
            >
              <Repeat size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full max-w-md">
            <span className="text-spotify-text text-xs w-12 text-right font-mono time-display">
              {formatTime(Math.floor(currentTime))}
            </span>
            <div
              className="flex-1 bg-spotify-light rounded-full h-1 cursor-pointer group relative"
              onClick={handleProgressClick}
              onMouseDown={handleProgressMouseDown}
              onMouseUp={handleProgressMouseUp}
              onMouseMove={handleProgressMouseMove}
              onMouseLeave={() => setIsDragging(false)}
            >
              {/* Progress bar with better visibility */}
              <div
                className="progress-bar h-full rounded-full relative"
                style={{ 
                  width: `${duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0}%`,
                  transition: isDragging ? 'none' : 'width 0.1s ease-out'
                }}
              >
                {/* Progress indicator dot */}
                <div 
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"
                  style={{ 
                    transform: 'translateY(-50%) translateX(50%)',
                    boxShadow: '0 0 6px rgba(0, 0, 0, 0.3)'
                  }}
                />
              </div>
            </div>
            <span className="text-spotify-text text-xs w-12 font-mono time-display">
              {formatTime(Math.floor(duration))}
            </span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2 flex-1 justify-end min-w-0">
          <button
            onClick={toggleMute}
            className="text-spotify-text hover:text-white transition-colors flex-shrink-0"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-spotify-light rounded-lg appearance-none cursor-pointer slider flex-shrink-0"
            style={{ 
              background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${(isMuted ? 0 : volume) * 100}%, #404040 ${(isMuted ? 0 : volume) * 100}%, #404040 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
