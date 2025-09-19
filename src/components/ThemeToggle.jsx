import React, { useState } from 'react';
import { Sun, Moon, Palette, Check } from 'lucide-react';
import useThemeStore from '../store/useThemeStore';

const ThemeToggle = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { theme, accentColor, toggleTheme, setAccentColor } = useThemeStore();

  const accentColors = [
    { name: 'green', color: '#1DB954', label: 'Spotify Green' },
    { name: 'blue', color: '#1E40AF', label: 'Ocean Blue' },
    { name: 'purple', color: '#7C3AED', label: 'Royal Purple' },
    { name: 'pink', color: '#EC4899', label: 'Hot Pink' },
  ];

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 bg-spotify-light rounded-full flex items-center justify-center hover:bg-spotify-gray transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="w-10 h-10 bg-spotify-light rounded-full flex items-center justify-center hover:bg-spotify-gray transition-colors"
        >
          <Palette size={20} />
        </button>
      </div>

      {/* Color Picker Dropdown */}
      {showColorPicker && (
        <div className="absolute top-12 right-0 bg-spotify-dark border border-spotify-light rounded-lg p-4 shadow-xl z-50 min-w-48">
          <h3 className="text-white font-medium mb-3">Accent Color</h3>
          <div className="grid grid-cols-2 gap-2">
            {accentColors.map((color) => (
              <button
                key={color.name}
                onClick={() => {
                  setAccentColor(color.name);
                  setShowColorPicker(false);
                }}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-spotify-light transition-colors"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color.color }}
                />
                <span className="text-white text-sm">{color.label}</span>
                {accentColor === color.name && (
                  <Check size={16} className="text-spotify-green ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close color picker */}
      {showColorPicker && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowColorPicker(false)}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
