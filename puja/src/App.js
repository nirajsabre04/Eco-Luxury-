// src/App.js
import React from 'react';
import NavigationBar from '../src/Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../src/Pages/Home';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;
