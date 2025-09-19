import React from 'react';
import { Home, Search, Library, Plus, Heart, Music, Download, Clock } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

const Sidebar = () => {
  const { currentPage, navigateTo } = useNavigation();
  
  const menuItems = [
    { icon: Home, label: 'Home', page: 'home', active: currentPage === 'home' },
    { icon: Search, label: 'Search', page: 'search', active: currentPage === 'search' },
    { icon: Library, label: 'Your Library', page: 'library', active: currentPage === 'library' },
  ];

  const playlistItems = [
    { icon: Plus, label: 'Create Playlist', page: 'create-playlist', active: false },
    { icon: Heart, label: 'Liked Songs', page: 'liked-songs', active: false },
  ];

  const playlists = [
    { name: 'Recently Played', icon: Clock, page: 'recently-played' },
    { name: 'Liked Songs', icon: Heart, page: 'liked-songs' },
    { name: 'My Playlist #1', icon: Music, page: 'playlist-1' },
    { name: 'My Playlist #2', icon: Music, page: 'playlist-2' },
    { name: 'Discover Weekly', icon: Download, page: 'discover-weekly' },
    { name: 'Release Radar', icon: Music, page: 'release-radar' },
    { name: 'Made For You', icon: Heart, page: 'made-for-you' },
  ];

  return (
    <div className="w-64 bg-spotify-dark h-full flex flex-col hidden lg:flex glass-effect">
      {/* Logo */}
      <div className="p-6 fade-in">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center shadow-xl floating-animation">
            <Music className="w-6 h-6 text-black" />
          </div>
          <span className="text-white font-bold text-2xl gradient-text">Spotify</span>
        </div>
      </div>

      {/* Main Menu */}
      <div className="px-6 mb-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigateTo(item.page)}
            className={`sidebar-item py-2 ${
              item.active ? 'text-white bg-spotify-light' : ''
            }`}
          >
            <item.icon size={24} />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Playlist Actions */}
      <div className="px-6 mb-6">
        {playlistItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigateTo(item.page)}
            className="sidebar-item py-2 cursor-pointer"
          >
            <item.icon size={24} />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Playlists */}
      <div className="px-6 flex-1 overflow-y-auto">
        <div className="space-y-1">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              onClick={() => navigateTo(playlist.page)}
              className="flex items-center space-x-3 text-spotify-text hover:text-white cursor-pointer py-2 px-2 rounded-md hover:bg-spotify-light transition-all duration-200 group"
            >
              <playlist.icon size={16} className="text-spotify-text group-hover:text-white" />
              <span className="truncate">{playlist.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Section */}
      <div className="p-6 border-t border-spotify-light">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-spotify-light rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">U</span>
          </div>
          <div>
            <p className="text-white text-sm font-medium">User</p>
            <p className="text-spotify-text text-xs">Free Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
