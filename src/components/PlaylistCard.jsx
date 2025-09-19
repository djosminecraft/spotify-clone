import React from 'react';
import { Play } from 'lucide-react';

const PlaylistCard = ({ playlist, onPlay }) => {
  const handlePlay = (e) => {
    e.stopPropagation();
    if (onPlay) {
      onPlay(playlist);
    }
  };

  return (
    <div className="music-card group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={playlist.cover}
          alt={playlist.name}
          className="w-full aspect-square object-cover shadow-2xl group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            // Fallback image if cover fails to load
            e.target.src = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center&auto=format&q=80';
          }}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="play-button opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300"
          >
            <Play size={24} className="text-black ml-1" />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-white font-bold text-xl truncate group-hover:text-spotify-green transition-colors duration-300 mb-2">
          {playlist.name}
        </h3>
        <p className="text-spotify-text text-sm line-clamp-2 mb-4">
          {playlist.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-spotify-text text-sm font-medium">
            {playlist.tracks?.length || 0} songs
          </span>
          {playlist.followers && (
            <span className="text-spotify-text text-sm">
              {playlist.followers.toLocaleString()} followers
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
