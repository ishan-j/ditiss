import React from 'react';
import './App.css'; // Assuming you have a basic CSS file

// 1. Data Source
const majorHouses = [
  { name: 'House Stark', motto: 'Winter Is Coming', region: 'The North' },
  { name: 'House Lannister', motto: 'Hear Me Roar!', region: 'The Westerlands' },
  { name: 'House Targaryen', motto: 'Fire and Blood', region: 'Crownlands (Historically Dragonstone)' },
  { name: 'House Baratheon', motto: 'Ours Is the Fury', region: 'The Stormlands' },
  { name: 'House Greyjoy', motto: 'We Do Not Sow', region: 'The Iron Islands' },
];

// 2. Component for a Single House (Reusable)
function HouseCard({ house }) {
  return (
    <div className="house-card">
      <h3>{house.name}</h3>
      <p>
        <strong>Motto:</strong> "{house.motto}"
      </p>
      <p>
        <strong>Region:</strong> {house.region}
      </p>
    </div>
  );
}

// 3. Main Application Component (The "Page")
function App() {
  return (
    <div className="game-of-thrones-page">
      <header>
        <h1>⚔️ Major Houses of Westeros 🛡️</h1>
        <p>A simple directory for the main players in the Game of Thrones.</p>
        
      </header>

      <section className="house-list">
        <h2>The Great Houses</h2>
        {/* Use the map function to iterate over the data and render a component for each item */}
        <div className="house-container">
          {majorHouses.map((house, index) => (
            // The 'key' is important for React to efficiently update lists
            <HouseCard key={index} house={house} />
          ))}
        </div>
      </section>

      <footer>
        <p>For the Throne.</p>
      </footer>
    </div>
  );
}

export default App;
