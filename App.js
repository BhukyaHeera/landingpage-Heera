
import React from 'react';
import Banner from './components/Banner';
import Brands from './components/Brands';
import Products from './components/Products';
import HealthConcerns from './components/HealthConcerns';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Our Shop</h1>
        <nav className="nav">
          <a href="#"><strong>Home</strong></a>
          <a href="#"><strong>Shop by brand</strong></a>
          <a href="#"><strong>Shop by category</strong></a>
          <a href="#"><strong>meet us</strong></a>
          <a href="#"><strong>Contact us</strong></a>
        </nav> 
        <br></br>
        <br></br>
        
        <h6>Worldwide Shipping - Duties and Taxes Prepaid</h6>
      </header>

      <Banner />

      <Brands />

      <Products />

      <HealthConcerns />

      <footer>
        <p>Care Plan now starting at Rs. 165 for 3 months</p>
        <p>Company Information: Secure Website, PCI Compliance, Returns, Privacy Policy, etc.</p>
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;