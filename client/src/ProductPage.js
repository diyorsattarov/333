import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'; // Import the Container component
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe from stripe-js

function ProductPage() {
  const { id } = useParams();
  
  const items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1', imageUrl: '/images/product1.jpg' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2', imageUrl: '/images/product1.jpg' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3', imageUrl: '/images/product1.jpg' },
    { id: 4, name: 'Item 4', description: 'Description for Item 4', imageUrl: '/images/product1.jpg' },
    { id: 5, name: 'Item 5', description: 'Description for Item 5', imageUrl: '/images/product1.jpg' },
    { id: 6, name: 'Item 6', description: 'Description for Item 6', imageUrl: '/images/product1.jpg' },
    { id: 7, name: 'Item 7', description: 'Description for Item 7', imageUrl: '/images/product1.jpg' },
    { id: 8, name: 'Item 8', description: 'Description for Item 8', imageUrl: '/images/product1.jpg' },
    { id: 9, name: 'Item 9', description: 'Description for Item 9', imageUrl: '/images/product1.jpg' },
    { id: 10, name: 'Item 10', description: 'Description for Item 10', imageUrl: '/images/product1.jpg' },
  ];

  // Dummy getProductDetails function that returns product based on ID
  const getProductDetails = (productId) => {
    return items.find(item => item.id === parseInt(productId));
  };

  const stripePromise = loadStripe('pk_test_51NjyTTLWuSm1CyQDuCaoJMXck6i1Za9cmTFa3h2kMMuvs6qomV07MwqI1hwMJBjjpIrR4NuQ5SXBa2etPQfqUg5i00of5KU9qC');

  const redirectToCheckout = async () => {
    const product = getProductDetails(id); // Get the product based on the ID
    const stripe = await stripePromise;

    try {
      const response = await fetch('http://localhost:3001/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id }),
      });

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  const product = getProductDetails(id);

  return (
    
    <Container fluid> {/* Wrap the content in a Container */}
    <div className="main-content text-center">
        <div className="filler-text">
          <h2>Welcome to My Express App!</h2>
          <p>This is some filler text to showcase content between the NavBar and Footer.</p>
        </div>
      </div>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.imageUrl} alt={`Image for ${product.name}`} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="d-flex align-items-center justify-content-center">
            <Card.Body>
              <Card.Title className="text-center">Purchase Options</Card.Title>
              <div className="purchase-options">
                <Button
                  className="purchase-button"
                  variant="primary"
                  onClick={redirectToCheckout}
                >
                  Buy Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
