import React, { useState } from 'react';
import { Music, Heart, Clock, Download, Plus, Search } from 'lucide-react';
import { mockTracks, mockPlaylists } from '../utils/mockData';
import TrackList from '../components/TrackList';
import PlaylistCard from '../components/PlaylistCard';
import usePlayerStore from '../store/usePlayerStore';

const Library = () => {
  const [activeTab, setActiveTab] = useState('playlists');
  const [searchQuery, setSearchQuery] = useState('');
  const { playTrack, likedTracks, recentlyPlayed } = usePlayerStore();

  const tabs = [
    { id: 'playlists', label: 'Playlists', icon: Music },
    { id: 'tracks', label: 'Tracks', icon: Music },
    { id: 'liked', label: 'Liked Songs', icon: Heart },
    { id: 'recent', label: 'Recently Played', icon: Clock },
  ];

  const handlePlayPlaylist = (playlist) => {
    if (playlist.tracks && playlist.tracks.length > 0) {
      playTrack(playlist.tracks[0], playlist.tracks);
    }
  };

  const handlePlayTrack = (track) => {
    playTrack(track, mockTracks);
  };

  const filteredPlaylists = mockPlaylists.filter(playlist =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTracks = mockTracks.filter(track =>
    track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get liked tracks
  const likedTracksList = mockTracks.filter(track => likedTracks.includes(track.id));

  return (
    <div className="flex-1 bg-spotify-dark p-6 min-h-screen">
      {/* Header */}
      <div className="mb-8 fade-in">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-4xl font-bold gradient-text">
            Your Library
          </h1>
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 bg-spotify-light rounded-full flex items-center justify-center hover:bg-spotify-gray transition-colors">
              <Search size={20} className="text-white" />
            </button>
            <button className="w-10 h-10 bg-spotify-light rounded-full flex items-center justify-center hover:bg-spotify-gray transition-colors">
              <Plus size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-text" size={20} />
          <input
            type="text"
            placeholder="Search in Your Library"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-spotify-light text-white px-12 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-spotify-green"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex space-x-6 border-b border-spotify-light">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 pb-4 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-spotify-green text-white'
                  : 'border-transparent text-spotify-text hover:text-white'
              }`}
            >
              <tab.icon size={20} />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'playlists' && (
          <div className="slide-in">
            <h2 className="text-white text-2xl font-bold mb-6">
              Your Playlists ({filteredPlaylists.length})
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {filteredPlaylists.map((playlist, index) => (
                <div key={playlist.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <PlaylistCard
                    playlist={playlist}
                    onPlay={handlePlayPlaylist}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tracks' && (
          <div className="slide-in">
            <h2 className="text-white text-2xl font-bold mb-6">
              Your Tracks ({filteredTracks.length})
            </h2>
            <div className="bg-spotify-light bg-opacity-30 rounded-lg p-4">
              <TrackList tracks={filteredTracks} showIndex={true} />
            </div>
          </div>
        )}

        {activeTab === 'liked' && (
          <div className="slide-in">
            <h2 className="text-white text-2xl font-bold mb-6">
              Liked Songs ({likedTracksList.length})
            </h2>
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
        )}

        {activeTab === 'recent' && (
          <div className="slide-in">
            <h2 className="text-white text-2xl font-bold mb-6">
              Recently Played ({recentlyPlayed.length})
            </h2>
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
        )}
      </div>
    </div>
  );
};

export default Library;
