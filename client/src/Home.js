import React from 'react';
import Catalog from './Catalog'; // Import the Catalog component

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="main-content text-center">
        <div className="filler-text">
          <h2>Welcome to My Express App!</h2>
          <p>This is some filler text to showcase content between the NavBar and Footer.</p>
          <Catalog />
        </div>
      </div>
    </div>
  );
}

export default Home;
