# 🎬 MovieHub

> Discover Your Next Favorite Film

MovieHub is a modern, full-featured movie browsing application built with Next.js 15, featuring a beautiful UI, advanced search capabilities, and seamless authentication.

## ✨ Features

- 🎥 **Browse Movies** - Explore thousands of movies with beautiful card layouts
- 🔍 **Smart Search** - Find movies by title with instant results
- 🎭 **Genre Filtering** - Browse movies by your favorite genres
- 📊 **Multiple Sort Options** - Sort by popularity, rating, release date, and more
- 🌓 **Dark Mode** - Seamless light/dark theme switching with system preference detection
- 🔐 **Authentication** - User login with guest mode support
- 📱 **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- 🎨 **Modern UI** - Stunning masonry grid layout with smooth animations
- ⚡ **Server Components** - Blazing fast performance with Next.js App Router
- 🖼️ **Image Fallbacks** - Custom SVG placeholders for missing posters/backdrops

## 🚀 Tech Stack

### **Frontend**
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Heroicons](https://heroicons.com/)** - Beautiful SVG icons

### **State Management & Data Fetching**
- **React Server Components** - Server-side rendering and data fetching
- **Server Actions** - Server-side mutations
- **Next.js Cookies** - Session management
- **React Cache** - Request deduplication

### **Authentication**
- **[DummyJSON API](https://dummyjson.com/)** - Demo authentication service
- **HTTP-only Cookies** - Secure session storage

### **API Integration**
- **[TMDB API](https://www.themoviedb.org/documentation/api)** - Movie database
- **Server-Side Fetching** - Secure API calls with authentication

### **Validation**
- **[Joi](https://joi.dev/)** - Schema validation for forms

## 📋 Prerequisites

- **Node.js** 18.17 or higher
- **npm** or **yarn** or **pnpm**
- **TMDB API Account** - [Register here](https://www.themoviedb.org/signup)

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/moviehub.git
cd moviehub
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Create environment file

Create a `.env` file in the root directory:

```env
# TMDB API Configuration
API_AUTH_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc0MGY1NzVmZmMyNDQzZDRjZTIzY2I4NTk1M2ZkMCIsIm5iZiI6MTc0NTgzMzY3MC4yNjIsInN1YiI6IjY4MGY0ZWM2NDYwMzU3MWVhZDBmOGI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vOkM9zakig0Tx0krPqELgaIZBvfFX99Ykj8hq55MF7c
API_BASE_URL=https://api.themoviedb.org/3
MOVIE_IMAGE_URL=https://image.tmdb.org/t/p
```

> ⚠️ **Important**: Replace `API_AUTH_TOKEN` with your own TMDB API token from [TMDB Settings](https://www.themoviedb.org/settings/api)

### 4. Run development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Authentication

The app uses [DummyJSON](https://dummyjson.com/docs/auth) for demo authentication.

**Demo Credentials:**

| Username | Password |
|----------|----------|
| `emilys` | `emilyspass` |
| `michaelw` | `michaelwpass` |
| `sophiab` | `sophiabpass` |

**Guest Mode:**
- Click "Continue as Guest" to browse without logging in

### Browsing Movies

1. **Explore All Movies** - Visit `/movies` to see the full catalog
2. **Search** - Use the search bar to find specific movies
3. **Filter by Genre** - Click on genre badges or use the dropdown menu
4. **Sort** - Choose from various sorting options (popularity, rating, date, etc.)
5. **View Details** - Click on any movie card to see full information

### Features Overview

- **Masonry Grid Layout** - Staggered card design for visual appeal
- **Responsive Navigation** - Hamburger menu on mobile devices
- **Theme Toggle** - Switch between light and dark modes
- **Persistent Sessions** - Stay logged in across page refreshes
- **Back Navigation** - Return to your previous filters/page when viewing movie details

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
```

## 🙏 Acknowledgments

- **[TMDB](https://www.themoviedb.org/)** - Movie data and images
- **[DummyJSON](https://dummyjson.com/)** - Demo authentication API
- **[Vercel](https://vercel.com/)** - Hosting and deployment
- **[Heroicons](https://heroicons.com/)** - Beautiful icons

## 📧 Contact

Denys Podobrii- [@denys-podobrii](https://www.linkedin.com/in/denys-podobrii/)

Project Link: [https://github.com/denys-badass/okten-nextjs-exam](https://github.com/denys-badass/okten-nextjs-exam)

---

**Built with ❤️ using Next.js 15 and React Server Components**
