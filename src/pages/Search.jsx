import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, Music, Users, Disc } from 'lucide-react';
import { mockTracks, mockArtists, mockAlbums, searchTracks } from '../utils/mockData';
import TrackList from '../components/TrackList';
import PlaylistCard from '../components/PlaylistCard';
import usePlayerStore from '../store/usePlayerStore';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({
    tracks: [],
    artists: [],
    albums: [],
    playlists: []
  });
  const [activeTab, setActiveTab] = useState('all');
  const { playTrack } = usePlayerStore();

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = {
        tracks: searchTracks(searchQuery, mockTracks),
        artists: mockArtists.filter(artist => 
          artist.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        albums: mockAlbums.filter(album => 
          album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          album.artist.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        playlists: []
      };
      setSearchResults(results);
    } else {
      setSearchResults({
        tracks: [],
        artists: [],
        albums: [],
        playlists: []
      });
    }
  }, [searchQuery]);

  const handlePlayTrack = (track) => {
    playTrack(track, searchResults.tracks);
  };

  const tabs = [
    { id: 'all', label: 'All', icon: SearchIcon },
    { id: 'tracks', label: 'Songs', icon: Music },
    { id: 'artists', label: 'Artists', icon: Users },
    { id: 'albums', label: 'Albums', icon: Disc },
  ];

  return (
    <div className="flex-1 bg-spotify-dark p-6">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-white text-3xl font-bold mb-4">Search</h1>
        <div className="relative max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-text" size={20} />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white text-black px-12 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-spotify-green"
          />
        </div>
      </div>

      {/* Search Results */}
      {searchQuery ? (
        <div>
          {/* Tabs */}
          <div className="flex space-x-6 mb-6 border-b border-spotify-light">
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

          {/* Results */}
          <div className="space-y-6">
            {/* All Results */}
            {activeTab === 'all' && (
              <div className="space-y-6">
                {searchResults.tracks.length > 0 && (
                  <div>
                    <h2 className="text-white text-xl font-bold mb-4">Songs</h2>
                    <div className="bg-spotify-light bg-opacity-30 rounded-lg p-4">
                      <TrackList tracks={searchResults.tracks.slice(0, 5)} showIndex={true} />
                    </div>
                  </div>
                )}

                {searchResults.artists.length > 0 && (
                  <div>
                    <h2 className="text-white text-xl font-bold mb-4">Artists</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {searchResults.artists.map((artist) => (
                        <div key={artist.id} className="text-center group cursor-pointer">
                          <div className="w-full aspect-square rounded-full bg-spotify-light mb-3 overflow-hidden group-hover:scale-105 transition-transform">
                            <img
                              src={artist.image}
                              alt={artist.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-white font-medium truncate">{artist.name}</h3>
                          <p className="text-spotify-text text-sm">Artist</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {searchResults.albums.length > 0 && (
                  <div>
                    <h2 className="text-white text-xl font-bold mb-4">Albums</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {searchResults.albums.map((album) => (
                        <div key={album.id} className="text-center group cursor-pointer">
                          <div className="w-full aspect-square rounded-md bg-spotify-light mb-3 overflow-hidden group-hover:scale-105 transition-transform">
                            <img
                              src={album.cover}
                              alt={album.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="text-white font-medium truncate">{album.title}</h3>
                          <p className="text-spotify-text text-sm">{album.artist}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tracks Only */}
            {activeTab === 'tracks' && searchResults.tracks.length > 0 && (
              <div>
                <h2 className="text-white text-xl font-bold mb-4">
                  Songs ({searchResults.tracks.length})
                </h2>
                <div className="bg-spotify-light bg-opacity-30 rounded-lg p-4">
                  <TrackList tracks={searchResults.tracks} showIndex={true} />
                </div>
              </div>
            )}

            {/* Artists Only */}
            {activeTab === 'artists' && searchResults.artists.length > 0 && (
              <div>
                <h2 className="text-white text-xl font-bold mb-4">
                  Artists ({searchResults.artists.length})
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {searchResults.artists.map((artist) => (
                    <div key={artist.id} className="text-center group cursor-pointer">
                      <div className="w-full aspect-square rounded-full bg-spotify-light mb-3 overflow-hidden group-hover:scale-105 transition-transform">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-white font-medium truncate">{artist.name}</h3>
                      <p className="text-spotify-text text-sm">Artist</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Albums Only */}
            {activeTab === 'albums' && searchResults.albums.length > 0 && (
              <div>
                <h2 className="text-white text-xl font-bold mb-4">
                  Albums ({searchResults.albums.length})
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {searchResults.albums.map((album) => (
                    <div key={album.id} className="text-center group cursor-pointer">
                      <div className="w-full aspect-square rounded-md bg-spotify-light mb-3 overflow-hidden group-hover:scale-105 transition-transform">
                        <img
                          src={album.cover}
                          alt={album.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-white font-medium truncate">{album.title}</h3>
                      <p className="text-spotify-text text-sm">{album.artist}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {Object.values(searchResults).every(arr => arr.length === 0) && (
              <div className="text-center py-12">
                <SearchIcon size={64} className="text-spotify-text mx-auto mb-4" />
                <h3 className="text-white text-xl font-bold mb-2">No results found</h3>
                <p className="text-spotify-text">
                  Try searching for something else
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Browse Categories */
        <div>
          <h2 className="text-white text-2xl font-bold mb-6">Browse all</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              { name: 'Made For You', color: 'from-purple-500 to-pink-500' },
              { name: 'Recently Played', color: 'from-blue-500 to-cyan-500' },
              { name: 'Liked Songs', color: 'from-green-500 to-teal-500' },
              { name: 'Albums', color: 'from-orange-500 to-red-500' },
              { name: 'Artists', color: 'from-indigo-500 to-purple-500' },
              { name: 'Podcasts', color: 'from-yellow-500 to-orange-500' },
              { name: 'Charts', color: 'from-pink-500 to-rose-500' },
              { name: 'New Releases', color: 'from-teal-500 to-green-500' },
            ].map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform`}
              >
                <h3 className="text-white font-bold text-lg">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
