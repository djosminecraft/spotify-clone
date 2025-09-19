import { create } from 'zustand';

const usePlayerStore = create((set, get) => ({
  // Player state
  isPlaying: false,
  currentTrack: null,
  currentTime: 0,
  duration: 0,
  volume: 0.5,
  isMuted: false,
  isShuffled: false,
  repeatMode: 'off', // 'off', 'one', 'all'
  
  // Playlist state
  currentPlaylist: [],
  currentTrackIndex: 0,
  
  // Actions
  setCurrentTrack: (track) => set({ currentTrack: track }),
  
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  play: () => set({ isPlaying: true }),
  
  pause: () => set({ isPlaying: false }),
  
  setCurrentTime: (time) => set({ currentTime: time }),
  
  setDuration: (duration) => set({ duration: duration }),
  
  setVolume: (volume) => set({ volume: Math.max(0, Math.min(1, volume)) }),
  
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  
  toggleShuffle: () => set((state) => ({ isShuffled: !state.isShuffled })),
  
  setRepeatMode: (mode) => set({ repeatMode: mode }),
  
  setCurrentPlaylist: (playlist) => set({ 
    currentPlaylist: playlist,
    currentTrackIndex: 0 
  }),
  
  nextTrack: () => {
    const { currentPlaylist, currentTrackIndex, repeatMode } = get();
    if (currentPlaylist.length === 0) return;
    
    let nextIndex = currentTrackIndex + 1;
    
    if (nextIndex >= currentPlaylist.length) {
      if (repeatMode === 'all') {
        nextIndex = 0;
      } else {
        return; // End of playlist
      }
    }
    
    set({ 
      currentTrackIndex: nextIndex,
      currentTrack: currentPlaylist[nextIndex],
      currentTime: 0
    });
  },
  
  previousTrack: () => {
    const { currentTrackIndex } = get();
    if (currentTrackIndex > 0) {
      set((state) => ({
        currentTrackIndex: state.currentTrackIndex - 1,
        currentTrack: state.currentPlaylist[state.currentTrackIndex - 1],
        currentTime: 0
      }));
    }
  },
  
  playTrack: (track, playlist = null) => {
    console.log('Playing track:', { track, playlist, audioUrl: track?.audioUrl });
    if (playlist) {
      const trackIndex = playlist.findIndex(t => t.id === track.id);
      set({
        currentTrack: track,
        currentPlaylist: playlist,
        currentTrackIndex: trackIndex,
        isPlaying: true,
        currentTime: 0
      });
    } else {
      set({
        currentTrack: track,
        isPlaying: true,
        currentTime: 0
      });
    }
  },

  // Auto-play when track changes
  setCurrentTrack: (track) => {
    set((state) => ({
      currentTrack: track,
      isPlaying: true, // Auto-play when track changes
      currentTime: 0
    }));
  },

  // Liked tracks functionality
  likedTracks: [],
  recentlyPlayed: [],

  toggleLike: (trackId) => {
    set((state) => {
      const isLiked = state.likedTracks.includes(trackId);
      return {
        likedTracks: isLiked
          ? state.likedTracks.filter(id => id !== trackId)
          : [...state.likedTracks, trackId]
      };
    });
  },

  addToRecentlyPlayed: (track) => {
    set((state) => {
      const filtered = state.recentlyPlayed.filter(t => t.id !== track.id);
      return {
        recentlyPlayed: [track, ...filtered].slice(0, 20) // Keep last 20 tracks
      };
    });
  },

  isLiked: (trackId) => {
    return get().likedTracks.includes(trackId);
  }
}));

export default usePlayerStore;
