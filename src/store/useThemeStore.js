import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set, get) => ({
      // Theme state
      theme: 'dark', // 'dark', 'light'
      accentColor: 'green', // 'green', 'blue', 'purple', 'pink'
      
      // Actions
      setTheme: (theme) => set({ theme }),
      
      setAccentColor: (color) => set({ accentColor: color }),
      
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'dark' ? 'light' : 'dark' 
      })),
      
      // Theme configurations
      getThemeConfig: () => {
        const { theme, accentColor } = get();
        
        const themes = {
          dark: {
            background: '#121212',
            surface: '#181818',
            surfaceLight: '#282828',
            text: '#ffffff',
            textSecondary: '#B3B3B3',
            border: '#404040'
          },
          light: {
            background: '#ffffff',
            surface: '#f5f5f5',
            surfaceLight: '#fafafa',
            text: '#000000',
            textSecondary: '#666666',
            border: '#e0e0e0'
          }
        };
        
        const accentColors = {
          green: {
            primary: '#1DB954',
            hover: '#1ed760',
            light: '#1ed760'
          },
          blue: {
            primary: '#1E40AF',
            hover: '#2563EB',
            light: '#3B82F6'
          },
          purple: {
            primary: '#7C3AED',
            hover: '#8B5CF6',
            light: '#A78BFA'
          },
          pink: {
            primary: '#EC4899',
            hover: '#F472B6',
            light: '#F9A8D4'
          }
        };
        
        return {
          ...themes[theme],
          ...accentColors[accentColor]
        };
      }
    }),
    {
      name: 'spotify-theme-storage',
    }
  )
);

export default useThemeStore;
