import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Bell, User } from 'lucide-react';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-spotify-gray bg-opacity-80 backdrop-blur-md px-4 lg:px-6 py-4 flex items-center justify-between">
      {/* Mobile Menu & Navigation Arrows */}
      <div className="flex items-center space-x-4">
        <MobileMenu />
        <button className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200">
          <ChevronLeft size={20} className="text-white" />
        </button>
        <button className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200">
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-4 lg:mx-8">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-text" size={20} />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-black px-12 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-spotify-green"
            />
          </div>
        </form>
      </div>

      {/* User Menu */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <button className="text-spotify-text hover:text-white transition-colors">
          <Bell size={24} />
        </button>
        <div className="flex items-center space-x-2 bg-black bg-opacity-70 rounded-full px-3 py-2 hover:bg-opacity-100 transition-all duration-200 cursor-pointer">
          <div className="w-6 h-6 bg-spotify-light rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <span className="text-white text-sm font-medium">User</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
