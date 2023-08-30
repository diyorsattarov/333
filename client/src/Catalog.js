import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'; // Import Container component


function Catalog() {
  const items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1', imageUrl: '/images/product1.jpg' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2', imageUrl: '/images/product2.jpg' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3', imageUrl: '/images/product3.jpg' },
    { id: 4, name: 'Item 4', description: 'Description for Item 4', imageUrl: '/images/product1.jpg' },
    { id: 5, name: 'Item 5', description: 'Description for Item 5', imageUrl: '/images/product1.jpg' },
    { id: 6, name: 'Item 6', description: 'Description for Item 6', imageUrl: '/images/product1.jpg' },
    { id: 7, name: 'Item 7', description: 'Description for Item 7', imageUrl: '/images/product1.jpg' },
    { id: 8, name: 'Item 8', description: 'Description for Item 8', imageUrl: '/images/product1.jpg' },
    { id: 9, name: 'Item 9', description: 'Description for Item 9', imageUrl: '/images/product1.jpg' },
    { id: 10, name: 'Item 10', description: 'Description for Item 10', imageUrl: '/images/product1.jpg' },
  ];

  return (
    <div>
      <h2>Catalog</h2>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {items.map(item => (
            <Col key={item.id}>
              <Card style={{ width: '18rem', height: '100%' }} className="mb-4 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + item.imageUrl}
                  alt={`Image for ${item.name}`}
                  style={{ objectFit: 'contain', flex: '1' }}
                />
                <Card.Body style={{ flex: '1' }}>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link to={`/product/${item.id}`} className="stretched-link">
                    <Button variant="primary">Go to Product</Button>
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
