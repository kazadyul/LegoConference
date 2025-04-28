# LEGO Conference Web App

This React-based web application serves as the official website for the **LEGO Conference**, bringing together 
enthusiasts, creators, and fans for a unique experience. The site showcases conference details, 
an interactive gallery of featured sets, registration functionality, and contact information — 
all of which are designed to make life easy and interesting!

## Key Features 

- **Modular React Architecture**: The app is built with React function components, hooks like `useState` and `useEffect` for state and event management.

- **Interactive Navbar & Header**: A Bootstrap-powered navigation bar with a rotating LEGO logo.

- **About Section with Video**: Embedded conference preview video that automatically pauses when scrolled out of view, using the Intersection Observer API.

- **Dynamic Gallery**: Fetches a curated list of LEGO sets from the Rebrickable API and displays them in a responsive card layout. Offline detection (`navigator.onLine`) prevents failed network requests.

- **Smooth Navigation State**: The registration form modal integrates with the browser history (pushState & popstate) so users can open/close it with back/forward buttons naturally.

- **Form Validation & UX**: A registration modal with inline validation for name, email, and role selection. The “Submit” button is disabled until all fields are valid and a role is chosen.

- **Offline Support**: Global online/offline listeners show status messages and disable features (gallery fetch, map display) when offline.

- **Embedded Map**: Displays a location map (when online) to help attendees find the conference venue.

- **Responsive Design**: Fully responsive layout with CSS media queries for video, gallery, and overall page structure.

## Project Structure

```
src/
├─ components/      # Reusable React components
│  ├─ About.jsx
│  ├─ App.jsx       # Main app entry
│  ├─ Contact.jsx
│  ├─ Gallery.jsx
│  ├─ Header.jsx
│  ├─ Map.jsx
│  ├─ Navbar.jsx
│  ├─ RegForm.jsx
│  ├─ Registration.jsx
│  └─ Schedule.jsx    
└─ public/          # Static files (logo, video, icons)
```

## Usage

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   npm run preview   # or serve -s dist
   ```

## Technologies

- React
- Vite
- Bootstrap
- Browser History API (`pushState`, `popstate`)
- Rebrickable LEGO API
- CSS with selective vendor prefixes, animations and transformations

---

Welcome to the LEGO Conference Web App! Feel free to explore, register, and enjoy!

