import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'; // Import Container component
import './Catalog.css'; // Import your custom CSS


function Catalog() {
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
  ];

  const [columns, setColumns] = useState(3); // Default: 3 columns
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setColumns(3); // 3 columns for larger screens
      } else if (window.innerWidth >= 768) {
        setColumns(2); // 2 columns for medium screens
      } else {
        setColumns(1); // 1 column for smaller screens
      }
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);
    handleResize(); // Call it once on initial render

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h2-container"> {/* Apply the .h2-container class */}
      <h2>Catalog</h2>
      <Container fluid>
        <Row xs={1} md={2} lg={columns} className="g-4">
          {items.map(item => (
            <Col key={item.id}>
              <Card className="catalog-card">
                <div
                  className="image-container"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.imageUrl})` }}
                ></div>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link to={`/product/${item.id}`} className="stretched-link">
                    <Button className="catalog-button" variant="primary">
                      Go to Product
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Catalog;