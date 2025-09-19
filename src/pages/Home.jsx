import React from 'react';
import { mockTracks, mockPlaylists, getRandomTracks } from '../utils/mockData';
import TrackList from '../components/TrackList';
import TrackCard from '../components/TrackCard';
import PlaylistCard from '../components/PlaylistCard';
import usePlayerStore from '../store/usePlayerStore';

const Home = () => {
  const { playTrack, recentlyPlayed, likedTracks } = usePlayerStore();
  const featuredTracks = getRandomTracks(6);
  const featuredPlaylists = mockPlaylists.slice(0, 6);
  
  // Get liked tracks
  const likedTracksList = mockTracks.filter(track => likedTracks.includes(track.id));

  const handlePlayPlaylist = (playlist) => {
    if (playlist.tracks && playlist.tracks.length > 0) {
      playTrack(playlist.tracks[0], playlist.tracks);
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-spotify-green via-spotify-dark to-spotify-dark p-6 min-h-screen">
      {/* Welcome Section */}
      <div className="mb-12 fade-in">
        <h1 className="text-white text-5xl font-bold mb-4 gradient-text">
          Good afternoon
        </h1>
        <p className="text-spotify-text text-xl">
          Discover new music and enjoy your favorite tracks
        </p>
      </div>

      {/* Featured Tracks */}
      <div className="mb-12 slide-in">
        <h2 className="text-white text-3xl font-bold mb-6">
          Featured Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTracks.map((track, index) => (
            <div key={`featured-${track.id}`} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <TrackCard track={track} />
            </div>
          ))}
        </div>
      </div>

      {/* Recently Played */}
      {recentlyPlayed.length > 0 && (
        <div className="mb-12 slide-in">
          <h2 className="text-white text-3xl font-bold mb-6">
            Recently Played
          </h2>
          <div className="bg-spotify-light bg-opacity-30 rounded-lg p-4 mb-6">
            <TrackList tracks={recentlyPlayed.slice(0, 6)} showIndex={true} />
          </div>
        </div>
      )}

      {/* Made For You */}
      <div className="mb-8">
        <h2 className="text-white text-2xl font-bold mb-4">
          Made For You
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredPlaylists.map((playlist) => (
            <PlaylistCard
              key={`made-for-you-${playlist.id}`}
              playlist={playlist}
              onPlay={handlePlayPlaylist}
            />
          ))}
        </div>
      </div>

      {/* All Tracks */}
      <div className="mb-8">
        <h2 className="text-white text-2xl font-bold mb-4">
          All Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockTracks.map((track, index) => (
            <div key={`all-tracks-${track.id}`} className="fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <TrackCard track={track} />
            </div>
          ))}
        </div>
      </div>

      {/* Liked Songs */}
      {likedTracksList.length > 0 && (
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-4">
            Your Liked Songs
          </h2>
          <div className="bg-spotify-light bg-opacity-30 rounded-lg p-4">
            <TrackList tracks={likedTracksList.slice(0, 5)} showIndex={true} />
          </div>
        </div>
      )}

      {/* Quick Access */}
      <div className="mb-8">
        <h2 className="text-white text-2xl font-bold mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform">
            <h3 className="text-white font-bold text-lg mb-2">Liked Songs</h3>
            <p className="text-white text-opacity-80 text-sm">Your favorite tracks</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform">
            <h3 className="text-white font-bold text-lg mb-2">Discover Weekly</h3>
            <p className="text-white text-opacity-80 text-sm">Your weekly mixtape</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform">
            <h3 className="text-white font-bold text-lg mb-2">Release Radar</h3>
            <p className="text-white text-opacity-80 text-sm">New releases for you</p>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform">
            <h3 className="text-white font-bold text-lg mb-2">Daily Mix</h3>
            <p className="text-white text-opacity-80 text-sm">Your daily soundtrack</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
