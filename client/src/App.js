import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Header';
import ProductPage from './ProductPage';
import LinkPage from './LinkPage';
import HomePage from './Home'; // Import the Home component
import Footer from './Footer';
import CatalogPage from './Catalog';
import CancelPage from './Cancel';
import SuccessPage from './Success';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={< HomePage />} /> {/* Route for the homepage */}
        <Route path="/catalog" element={< CatalogPage />} /> {/* Route for the homepage */}
        <Route path="/product/:id" element={< ProductPage /> } /> {/* Dynamic route for product pages */}
        <Route path="/success" element={< SuccessPage /> } /> {}
        <Route path="/cancel" element={< CancelPage /> } /> {}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
