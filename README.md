<div align="center">

# 🚀 Messenger Platform 🚀

### *Cross-platform messaging application with web and mobile interfaces for real-time communication*

[![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=for-the-badge&logo=react)](https://react.dev/)
[![React Native](https://img.shields.io/badge/React_Native-0.79-61DAFB.svg?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4.svg?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.1-06B6D4.svg?style=for-the-badge&logo=tailwindcss)](https://nativewind.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.8-764ABC.svg?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8.svg?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)

![React Router](https://img.shields.io/badge/-React_Router_7.8-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Framer Motion](https://img.shields.io/badge/-Framer_Motion_12.23-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lucide React](https://img.shields.io/badge/-Lucide_React_0.54-000000?style=for-the-badge&logo=lucide&logoColor=white)
![Expo](https://img.shields.io/badge/-Expo_53.0-000020?style=for-the-badge&logo=expo&logoColor=white)
![Socket.io](https://img.shields.io/badge/-Socket.io_4.8-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![DaisyUI](https://img.shields.io/badge/-DaisyUI_5.0-5A0FC8?style=for-the-badge&logo=daisyui&logoColor=white)

---

</div>

## 🚀 Features

**Real-time Communication**
- Instant messaging with real-time delivery status
- Group chats with multiple participants
- Voice and video call capabilities
- Message reactions and replies

**Media Sharing & Content**
- Image, video, and document sharing
- Voice messages and audio clips
- Rich media previews
- Animated stickers and GIFs

**User Management & Authentication**
- Secure authentication across platforms
- Profile customization with avatars
- Contact management and synchronization
- Privacy settings and blocked contacts

**Advanced UI/UX Features**
- Responsive design across web and mobile
- Dark/light theme support
- Smooth animations using Framer Motion
- Customizable chat backgrounds
- Progressive Web App (PWA) capabilities

**Security & Privacy**
- End-to-end encryption for messages
- Message expiration settings
- Two-factor authentication
- Secure local storage

**Additional Features**
- Message search and filtering
- Read receipts and typing indicators
- Push notifications
- Online/offline status indicators
- Chat backup and restore

## 📁 Project Structure

This repository contains both the mobile app (built with React Native and Expo) and the web app (built with React and Vite) for a unified messaging platform.

```
messenger-platform/
├── MessengerApp/                   # Mobile application (React Native + Expo)
│   ├── app/                        # Expo Router file-based navigation
│   │   ├── (tabs)/                 # Bottom tab navigation screens
│   │   └── auth/                   # Authentication screens
│   ├── components/                 # Reusable UI components
│   ├── hooks/                      # Custom React hooks
│   ├── constants/                  # Application constants
│   ├── types/                      # TypeScript type definitions
│   ├── assets/                     # Images, fonts, and other assets
│   └── global.css                  # Global styles using NativeWind
│
├── MessengerWebApp/               # Web application (React + Vite)
│   ├── src/                        # Source code
│   │   ├── components/             # Reusable UI components
│   │   │   └── ui/                 # Core UI components
│   │   ├── pages/                  # Application pages/routes
│   │   ├── store/                  # Redux state management
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── lib/                    # Utility functions
│   │   └── types/                  # TypeScript type definitions
│   └── public/                     # Static assets
│
└── README.md                      # Project documentation
```
### Mobile App (MessengerApp)

**Key Technologies:**
- React Native 0.79.5 for cross-platform mobile development
- Expo 53.0 for simplified development and deployment
- Expo Router for file-based navigation
- NativeWind for Tailwind CSS in React Native
- React Native Reanimated for advanced animations

**Features:**
- Tab-based navigation with bottom navigation bar
- Native gesture handling for smooth interactions
- Device-specific optimizations for iOS and Android
- Push notification integration
- Camera and media library access

### Web App (MessengerWebApp)

**Key Technologies:**
- React 19.0 for frontend UI
- Vite 6.0 for fast development and optimized builds
- Redux Toolkit for state management
- Socket.io for real-time communication
- Tailwind CSS 4.1 for styling
- Framer Motion for animations
- PWA support for offline capabilities

**Features:**
- Responsive layout for desktop and mobile web
- Redux state persistence
- Route-based code splitting
- Service Worker for offline functionality
- Browser notifications

### Shared Architecture

**Data Flow:**
- Real-time messaging using Socket.io
- Redux/Context for state management
- Typed interfaces shared between platforms
- Consistent styling approach with Tailwind CSS

## 📱 Getting Started

### Mobile App Setup

```bash
# Navigate to the mobile app directory
cd MessengerApp

# Install dependencies
npm install

# Start the development server
npm start

# Run on specific platforms
npm run ios     # iOS simulator
npm run android # Android emulator
```

### Web App Setup

```bash
# Navigate to the web app directory
cd MessengerWebApp

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
