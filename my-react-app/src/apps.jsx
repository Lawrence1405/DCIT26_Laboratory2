// src/App.jsx
import React from 'react';
import './apps.css';  // Import the global CSS file
import Gallery from './gallery';  // Import Gallery component

function App() {
  return (
    <div className="App">
      <Gallery />  {/* Render the Gallery component */}
    </div>
  );
}

export default App;
