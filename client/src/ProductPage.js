import React from 'react';
import { useParams } from 'react-router-dom';

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

  const product = getProductDetails(id);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductPage;
