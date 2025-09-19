import React, { useState } from 'react';
import { Menu, X, Home, Search, Library, Music } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Search', active: false },
    { icon: Library, label: 'Your Library', active: false },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-white p-2"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="w-64 bg-spotify-dark h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-spotify-light">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
                    <Music className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-white font-bold text-xl">Spotify</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-spotify-text hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="px-6 py-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`sidebar-item py-3 ${
                    item.active ? 'text-white' : ''
                  }`}
                >
                  <item.icon size={24} />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Playlists */}
            <div className="px-6 flex-1 overflow-y-auto">
              <h3 className="text-spotify-text text-sm font-bold mb-4">PLAYLISTS</h3>
              <div className="space-y-1">
                {[
                  'Recently Played',
                  'Liked Songs',
                  'My Playlist #1',
                  'My Playlist #2',
                  'Discover Weekly',
                  'Release Radar',
                  'Made For You',
                ].map((playlist, index) => (
                  <div
                    key={index}
                    className="text-spotify-text hover:text-white cursor-pointer py-1 transition-colors duration-200"
                  >
                    {playlist}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
