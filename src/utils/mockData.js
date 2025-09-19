// Real tracks data for Spotify clone
export const mockTracks = [
  {
    id: '1',
    title: 'Untitled Track 14',
    artist: 'Unknown Artist',
    album: 'Demo Collection',
    duration: 180, // 3 minutes
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    audioUrl: '/audio/Untitled (14).mp3',
    genre: 'Electronic',
    year: 2024
  },
  {
    id: '2',
    title: 'Untitled Track 16',
    artist: 'Unknown Artist',
    album: 'Demo Collection',
    duration: 195, // 3:15 minutes
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    audioUrl: '/audio/Untitled (16).mp3',
    genre: 'Ambient',
    year: 2024
  },
  {
    id: '3',
    title: 'Untitled Track 18',
    artist: 'Unknown Artist',
    album: 'Demo Collection',
    duration: 210, // 3:30 minutes
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    audioUrl: '/audio/Untitled (18).mp3',
    genre: 'Chill',
    year: 2024
  },
  {
    id: '4',
    title: 'Untitled Track 20',
    artist: 'Unknown Artist',
    album: 'Demo Collection',
    duration: 165, // 2:45 minutes
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    audioUrl: '/audio/Untitled (20).mp3',
    genre: 'Lo-Fi',
    year: 2024
  },
  {
    id: '5',
    title: 'Untitled Track 22',
    artist: 'Unknown Artist',
    album: 'Demo Collection',
    duration: 225, // 3:45 minutes
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center',
    audioUrl: '/audio/Untitled (22).mp3',
    genre: 'Experimental',
    year: 2024
  }
];

export const mockPlaylists = [
  {
    id: '1',
    name: 'Today\'s Top Hits',
    description: 'The most played songs right now',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    tracks: mockTracks.slice(0, 4),
    owner: 'Spotify',
    followers: 15000000
  },
  {
    id: '2',
    name: 'RapCaviar',
    description: 'New music from Drake, Kendrick Lamar, Travis Scott and more',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    tracks: mockTracks.slice(2, 6),
    owner: 'Spotify',
    followers: 12000000
  },
  {
    id: '3',
    name: 'Rock Classics',
    description: 'Rock legends & epic songs that continue to inspire generations',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    tracks: mockTracks.slice(1, 5),
    owner: 'Spotify',
    followers: 8000000
  },
  {
    id: '4',
    name: 'Chill Vibes',
    description: 'Relax and unwind with these calming tunes',
    cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    tracks: mockTracks.slice(2, 6),
    owner: 'Spotify',
    followers: 5432100
  },
  {
    id: '5',
    name: 'Workout Mix',
    description: 'Get pumped with this high-energy playlist!',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    tracks: mockTracks.slice(0, 4),
    owner: 'Spotify',
    followers: 9876543
  },
  {
    id: '6',
    name: 'Road Trip',
    description: 'Perfect soundtrack for your next adventure',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center&auto=format&q=80',
    tracks: mockTracks.slice(1, 5),
    owner: 'Spotify',
    followers: 7654321
  }
];

export const mockArtists = [
  {
    id: '1',
    name: 'The Weeknd',
    followers: 50000000,
    genres: ['Pop', 'R&B'],
    image: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=The+Weeknd',
    topTracks: mockTracks.slice(0, 3)
  },
  {
    id: '2',
    name: 'Dua Lipa',
    followers: 45000000,
    genres: ['Pop', 'Dance'],
    image: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Dua+Lipa',
    topTracks: mockTracks.slice(1, 4)
  },
  {
    id: '3',
    name: 'Harry Styles',
    followers: 40000000,
    genres: ['Pop', 'Rock'],
    image: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Harry+Styles',
    topTracks: mockTracks.slice(2, 5)
  }
];

export const mockAlbums = [
  {
    id: '1',
    title: 'After Hours',
    artist: 'The Weeknd',
    year: 2020,
    cover: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=After+Hours',
    tracks: mockTracks.slice(0, 2),
    genre: 'Pop'
  },
  {
    id: '2',
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    year: 2020,
    cover: 'https://via.placeholder.com/300x300/1DB954/FFFFFF?text=Future+Nostalgia',
    tracks: mockTracks.slice(1, 3),
    genre: 'Pop'
  }
];

// Helper functions
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const searchTracks = (query, tracks = mockTracks) => {
  const lowercaseQuery = query.toLowerCase();
  return tracks.filter(track => 
    track.title.toLowerCase().includes(lowercaseQuery) ||
    track.artist.toLowerCase().includes(lowercaseQuery) ||
    track.album.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRandomTracks = (count = 6) => {
  const shuffled = [...mockTracks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
