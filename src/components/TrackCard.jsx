import React from 'react';
import { Play, Heart } from 'lucide-react';
import usePlayerStore from '../store/usePlayerStore';

const TrackCard = ({ track, onPlay }) => {
  const { playTrack, isLiked, toggleLike } = usePlayerStore();

  const handlePlay = (e) => {
    e.stopPropagation();
    if (onPlay) {
      onPlay(track);
    } else {
      playTrack(track);
    }
  };

  const handleLike = (e) => {
    e.stopPropagation();
    toggleLike(track.id);
  };

  return (
    <div className="bg-spotify-light bg-opacity-30 rounded-lg p-4 hover:bg-opacity-50 transition-colors duration-200 group cursor-pointer">
      <div className="flex items-center space-x-4">
        {/* Track Cover */}
        <div className="relative group/cover">
          <img
            src={track.cover}
            alt={track.title}
            className="w-16 h-16 rounded-lg object-cover shadow-lg"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/cover:bg-opacity-30 transition-opacity duration-200 flex items-center justify-center rounded-lg">
            <button
              onClick={handlePlay}
              className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200"
            >
              <Play size={16} className="text-black ml-0.5" />
            </button>
          </div>
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold truncate group-hover:text-spotify-green transition-colors duration-200">
            {track.title}
          </h3>
          <p className="text-spotify-text text-sm truncate">
            {track.artist}
          </p>
          <p className="text-spotify-text text-xs">
            {track.album} • {track.year}
          </p>
        </div>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`transition-colors duration-200 ${
            isLiked(track.id) 
              ? 'text-spotify-green' 
              : 'text-spotify-text hover:text-spotify-green'
          }`}
        >
          <Heart size={20} fill={isLiked(track.id) ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  );
};

export default TrackCard;
