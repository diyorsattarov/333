import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h2>Payment Successful</h2>
      <p>Check your email for the receipt</p>
      <Link to="/catalog">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default SuccessPage;
