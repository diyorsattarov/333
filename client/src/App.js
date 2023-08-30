import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Header';
import ProductPage from './ProductPage';
import LinkPage from './LinkPage';
import Home from './Home'; // Import the Home component
import Footer from './Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} /> {/* Route for the homepage */}
        <Route path="/product/:id" component={ProductPage} /> {/* Dynamic route for product pages */}
        <Route path="/linkpage" component={LinkPage} /> {}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
