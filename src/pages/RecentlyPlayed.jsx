import React from 'react';
import { Clock } from 'lucide-react';
import TrackList from '../components/TrackList';
import usePlayerStore from '../store/usePlayerStore';

const RecentlyPlayed = () => {
  const { recentlyPlayed, playTrack } = usePlayerStore();

  const handlePlayTrack = (track) => {
    playTrack(track, recentlyPlayed);
  };

  return (
    <div className="flex-1 bg-spotify-dark p-6 min-h-screen">
      {/* Header */}
      <div className="mb-8 fade-in">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Clock size={32} className="text-white" />
          </div>
          <div>
            <h1 className="text-white text-4xl font-bold gradient-text">
              Recently Played
            </h1>
            <p className="text-spotify-text text-lg">
              {recentlyPlayed.length} recently played tracks
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {recentlyPlayed.length > 0 ? (
          <div className="bg-spotify-light bg-opacity-30 rounded-lg p-4">
            <TrackList tracks={recentlyPlayed} showIndex={true} />
          </div>
        ) : (
          <div className="text-center py-12">
            <Clock size={64} className="text-spotify-text mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">No recent activity</h3>
            <p className="text-spotify-text">Start playing music to see your history here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
