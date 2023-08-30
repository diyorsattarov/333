import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;