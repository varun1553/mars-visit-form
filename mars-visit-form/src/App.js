import React from 'react';
import MarsVisitForm from './components/MarsVisitForm'; // Import the MarsVisitForm component
import './App.css'; // Optional: For custom styling if you want to include global styles


const App = () => {
  return (
    <div className="App" style={{ backgroundColor: "#f9f9f9",height:"800px" }}>
      <MarsVisitForm /> {/* Render the MarsVisitForm component */}
    </div>
  );
};

export default App;