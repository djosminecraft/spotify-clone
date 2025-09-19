# 🎵 Spotify Clone - Modern Music Streaming Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.1.6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Zustand-4.4.0-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white" alt="Zustand" />
</div>

<div align="center">
  <h3>🎶 A fully functional Spotify clone with modern UI/UX and smooth audio playback</h3>
  <p><strong>Live Demo:</strong> <a href="https://yourusername.github.io/spotify-clone">https://yourusername.github.io/spotify-clone</a></p>
</div>

---

## ✨ Features

### 🎵 **Core Music Features**
- **Audio Playback**: Full HTML5 audio support with custom controls
- **Progress Tracking**: Real-time progress bar with smooth animations
- **Volume Control**: Custom volume slider with visual feedback
- **Playback Controls**: Play, Pause, Skip, Shuffle, Repeat modes
- **Track Management**: Like tracks, recently played, playlist support

### 🎨 **UI/UX Excellence**
- **Spotify-like Design**: Pixel-perfect recreation of Spotify's interface
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion powered transitions
- **Dark Theme**: Professional dark mode with green accents
- **Interactive Elements**: Hover effects, loading states, and micro-interactions

### 🚀 **Technical Features**
- **State Management**: Zustand for global state management
- **Audio API**: Advanced HTML5 audio with custom controls
- **PWA Support**: Installable as a Progressive Web App
- **Performance**: Optimized with Vite and modern React patterns
- **TypeScript Ready**: Easy to migrate to TypeScript

---

## 🖼️ Screenshots

<div align="center">
  <img src="https://via.placeholder.com/800x500/1DB954/FFFFFF?text=Home+Page" alt="Home Page" width="400" />
  <img src="https://via.placeholder.com/800x500/1DB954/FFFFFF?text=Player+Interface" alt="Player Interface" width="400" />
</div>

<div align="center">
  <img src="https://via.placeholder.com/800x500/1DB954/FFFFFF?text=Library+View" alt="Library View" width="400" />
  <img src="https://via.placeholder.com/800x500/1DB954/FFFFFF?text=Search+Page" alt="Search Page" width="400" />
</div>

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18.2.0 | Component-based UI |
| **Build Tool** | Vite 7.1.6 | Fast development & building |
| **Styling** | Tailwind CSS 3.4.0 | Utility-first CSS framework |
| **State** | Zustand 4.4.0 | Lightweight state management |
| **Icons** | Lucide React | Beautiful SVG icons |
| **Audio** | HTML5 Audio API | Music playback |
| **Animations** | Framer Motion | Smooth transitions |
| **PWA** | Web App Manifest | Installable app |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
spotify-clone/
├── public/
│   ├── audio/                 # Audio files
│   ├── manifest.json          # PWA manifest
│   └── icons/                 # App icons
├── src/
│   ├── components/            # Reusable components
│   │   ├── Player.jsx        # Main audio player
│   │   ├── Sidebar.jsx       # Navigation sidebar
│   │   ├── Header.jsx        # Top header
│   │   ├── TrackList.jsx     # Track listing
│   │   ├── TrackCard.jsx     # Individual track card
│   │   └── PlaylistCard.jsx  # Playlist card
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Home page
│   │   ├── Search.jsx        # Search page
│   │   ├── Library.jsx      # User library
│   │   ├── LikedSongs.jsx   # Liked songs
│   │   └── RecentlyPlayed.jsx # Recently played
│   ├── store/                # State management
│   │   └── usePlayerStore.js # Player state
│   ├── contexts/             # React contexts
│   │   └── NavigationContext.jsx # Navigation state
│   ├── utils/                # Utility functions
│   │   └── mockData.js       # Sample data
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎯 Key Features Explained

### 🎵 **Audio Player**
- **Smooth Playback**: Custom audio controls with HTML5 API
- **Progress Tracking**: Real-time progress bar with seeking
- **Volume Control**: Visual volume slider with mute functionality
- **Playback Modes**: Shuffle, repeat (all/one/off)
- **Track Navigation**: Previous/next track support

### 🎨 **UI Components**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading States**: Beautiful loading animations
- **Error Handling**: Graceful error states and fallbacks

### 📱 **PWA Features**
- **Installable**: Add to home screen on mobile devices
- **Offline Ready**: Service worker for offline functionality
- **App-like Experience**: Full-screen mode and native feel

---

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Spotify Clone
VITE_APP_DESCRIPTION=A modern music streaming platform
```

---

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Select "/ (root)" folder
   - Click "Save"

3. **Your site will be available at:**
   ```
   https://yourusername.github.io/spotify-clone
   ```

### Vercel (Alternative)

1. **Connect your GitHub repository to Vercel**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy automatically on every push**

### Netlify (Alternative)

1. **Connect your GitHub repository to Netlify**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

---

## 🎨 Customization

### Adding New Tracks

1. **Add audio files to `public/audio/`**
2. **Update `src/utils/mockData.js`**:

```javascript
export const mockTracks = [
  {
    id: 'new-track',
    title: 'Your Track Name',
    artist: 'Your Artist',
    album: 'Your Album',
    duration: 180, // seconds
    cover: 'https://your-image-url.com',
    audioUrl: '/audio/your-track.mp3',
    genre: 'Your Genre',
    year: 2024
  }
];
```

### Styling Customization

Edit `tailwind.config.js` to customize colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-dark': '#121212',
        'spotify-light': '#181818',
        'spotify-gray': '#282828',
        'spotify-text': '#B3B3B3'
      }
    }
  }
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Spotify** - For the amazing design inspiration
- **React Team** - For the incredible framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite** - For the lightning-fast build tool
- **Zustand** - For the simple state management

---

## 📞 Contact

**Your Name** - [@yourusername](https://github.com/yourusername) - your.email@example.com

**Project Link:** [https://github.com/yourusername/spotify-clone](https://github.com/yourusername/spotify-clone)

---

<div align="center">
  <p>Made with ❤️ and lots of ☕</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>