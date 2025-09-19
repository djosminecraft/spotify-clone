import React from 'react';
import { Play, Pause, Heart, MoreHorizontal, Clock, Music } from 'lucide-react';
import usePlayerStore from '../store/usePlayerStore';
import { formatTime } from '../utils/mockData';

const TrackList = ({ tracks, showAlbum = false, showIndex = true }) => {
  const { 
    currentTrack, 
    isPlaying, 
    playTrack, 
    currentPlaylist 
  } = usePlayerStore();

  const handlePlayTrack = (track) => {
    playTrack(track, tracks);
  };

  const isCurrentTrack = (track) => {
    return currentTrack && currentTrack.id === track.id;
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-3 text-spotify-text text-sm border-b border-spotify-light font-medium">
        {showIndex && <div className="col-span-1 text-center">#</div>}
        <div className="col-span-5 flex items-center space-x-2">
          <Music size={16} />
          <span>TITLE</span>
        </div>
        {showAlbum && <div className="col-span-4">ALBUM</div>}
        <div className="col-span-2 flex justify-end items-center space-x-1">
          <Clock size={16} />
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Tracks */}
      <div className="divide-y divide-spotify-light">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`track-item group ${
              isCurrentTrack(track) ? 'bg-spotify-light bg-opacity-50' : ''
            }`}
            onClick={() => handlePlayTrack(track)}
          >
            <div className="grid grid-cols-12 gap-4 w-full items-center">
              {/* Index/Play Button */}
              <div className="col-span-1 flex justify-center">
                {isCurrentTrack(track) && isPlaying ? (
                  <div className="w-4 h-4 flex items-center justify-center">
                    <div className="w-1 h-4 bg-spotify-green animate-pulse"></div>
                  </div>
                ) : (
                  <span className="text-spotify-text group-hover:hidden">
                    {showIndex ? index + 1 : ''}
                  </span>
                )}
                <button 
                  className="hidden group-hover:block text-white hover:scale-110 transition-transform"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayTrack(track);
                  }}
                >
                  {isCurrentTrack(track) && isPlaying ? (
                    <Pause size={16} />
                  ) : (
                    <Play size={16} />
                  )}
                </button>
              </div>

              {/* Track Info */}
              <div className="col-span-5 flex items-center space-x-3">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h4 className={`font-medium truncate ${
                    isCurrentTrack(track) ? 'text-spotify-green' : 'text-white'
                  }`}>
                    {track.title}
                  </h4>
                  <p className="text-spotify-text text-sm truncate">
                    {track.artist}
                  </p>
                </div>
              </div>

              {/* Album */}
              {showAlbum && (
                <div className="col-span-4 text-spotify-text text-sm truncate">
                  {track.album}
                </div>
              )}

              {/* Duration */}
              <div className="col-span-2 text-spotify-text text-sm text-right">
                {formatTime(track.duration)}
              </div>

              {/* Actions */}
              <div className="col-span-1 flex justify-end">
                <button className="text-spotify-text hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <Heart size={16} />
                </button>
                <button className="text-spotify-text hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200 ml-2">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
