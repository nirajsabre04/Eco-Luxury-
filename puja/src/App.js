// src/App.js
import React from 'react';
import NavigationBar from '../src/Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <section id="home">
        <h1>Home</h1>
      </section>
  
    </div>
  );
}

export default App;
