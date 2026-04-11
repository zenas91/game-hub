# Game Hub 🚀
This repository features a modern, responsive web application for discovering video games, built using React, TypeScript, and Chakra UI, featuring RAWG API integration. The application provides filtering by platform and genre, real-time search functionality, and a dark mode interface. View the project repository on GitHub.

[Project Demo - Game Hub](https://github.com/user-attachments/assets/54637b51-1ad4-4f7f-ae62-b8a9145f1716)

## 🚀 Key Features

*   **⚡ High-Performance Data Fetching** – Powered by **React Query** for intelligent caching, background updates, and optimized API synchronization.
*   **🧠 Global State Management** – Utilizes **Zustand** for a lightweight, scalable approach to managing global UI state (like search queries and filter selections).
*   **♾️ Infinite Scrolling** – A seamless browsing experience that dynamically fetches and appends data as the user scrolls.
*   **🔍 Real-time Search & Discovery** – Instantly find games via a responsive search bar integrated with the RAWG API.
*   **🌓 Adaptive Theme Switching** – Seamless Dark and Light mode support implemented with **Chakra UI** for optimal viewing.
*   **🎮 Smart Filtering & Sorting** – Refine the game library by **Genre**, **Platform**, or **Popularity** to find exactly what you're looking for.
*   **🎭 Professional UX/UI** – Includes **Skeleton Screens** to eliminate layout shift and provide a smooth "perceived" loading speed.
*   **📱 Fully Responsive** – A mobile-first design that adapts flawlessly to any screen size.

## 🛠️ Technical Highlights

### 🔋 State Management Strategy
I opted for a dual-layered approach to state management to ensure maximum performance and maintainability:
*   **Server State (React Query):** Used to handle all asynchronous data fetching from the RAWG API. This allowed for automatic caching, background revalidation, and a built-in "infinite scroll" logic that significantly reduced boilerplate code.
*   **Client State (Zustand):** Used to manage global UI states like search queries and filter selections. I chose **Zustand** over Redux for its smaller footprint, lack of boilerplate, and its ability to provide a clean, hook-based API that avoids "provider hell."

### 🏎️ Performance Optimization
*   **Data Caching:** By leveraging React Query’s caching mechanisms, the app minimizes redundant API calls. If a user returns to a previously viewed category, the data appears instantly.
*   **Generic Data Fetching:** I implemented a custom `useData` hook to abstract the fetching logic, making the codebase highly reusable and easy to extend for new features.

### 🎨 UI & UX with Chakra UI
The interface was built using **Chakra UI** to leverage its robust layout system. By using its built-in `ColorMode` functionality, I was able to implement a persistent Dark/Light mode toggle with minimal CSS, ensuring the app feels native to the user's system preferences.
