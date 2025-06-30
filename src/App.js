import React from 'react';
import './App.css';
import Header from './Component/Header';
import Product from './Component/Product';
import Line from './Component/Line';
import Event from './Component/Event';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Line />
      <Event />
      <Footer />
    </div>
  );
}

export default App;
