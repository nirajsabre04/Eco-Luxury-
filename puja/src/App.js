import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from '../src/Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../src/Pages/Home';
import Cart from './Pages/Cart'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;