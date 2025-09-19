import React from 'react';
import { Heart } from 'lucide-react';
import { mockTracks } from '../utils/mockData';
import TrackList from '../components/TrackList';
import usePlayerStore from '../store/usePlayerStore';

const LikedSongs = () => {
  const { likedTracks, playTrack } = usePlayerStore();
  
  // Get liked tracks
  const likedTracksList = mockTracks.filter(track => likedTracks.includes(track.id));

  const handlePlayTrack = (track) => {
    playTrack(track, likedTracksList);
  };

  return (
    <div className="flex-1 bg-spotify-dark p-6 min-h-screen">
      {/* Header */}
      <div className="mb-8 fade-in">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Heart size={32} className="text-white" />
          </div>
          <div>
            <h1 className="text-white text-4xl font-bold gradient-text">
              Liked Songs
            </h1>
            <p className="text-spotify-text text-lg">
              {likedTracksList.length} liked songs
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {likedTracksList.length > 0 ? (
          <div className="bg-spotify-light bg-opacity-30 rounded-lg p-4">
            <TrackList tracks={likedTracksList} showIndex={true} />
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart size={64} className="text-spotify-text mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">No liked songs yet</h3>
            <p className="text-spotify-text">Start liking songs to see them here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedSongs;
