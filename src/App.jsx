import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import LikedSongs from './pages/LikedSongs';
import RecentlyPlayed from './pages/RecentlyPlayed';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import './index.css';

const MainContent = () => {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'search':
        return <Search />;
      case 'library':
        return <Library />;
      case 'liked-songs':
        return <LikedSongs />;
      case 'recently-played':
        return <RecentlyPlayed />;
      case 'create-playlist':
        return <Library />; // Redirect to library for now
      case 'playlist-1':
      case 'playlist-2':
      case 'discover-weekly':
      case 'release-radar':
      case 'made-for-you':
        return <Library />; // Redirect to library for now
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {renderPage()}
    </div>
  );
};

function App() {
  return (
    <NavigationProvider>
      <div className="flex h-screen bg-spotify-dark text-white">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />
          
          {/* Page Content */}
          <MainContent />
        </div>
        
        {/* Player */}
        <Player />
      </div>
    </NavigationProvider>
  );
}

export default App;
