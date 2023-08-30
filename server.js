const express = require('express');
const path = require('path'); // Import the path module
const app = express();
const port = 3001; // You can change this to any port you prefer

app.use(express.static(path.join(__dirname, 'client/build')));
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to My Express App!');
});

// Example API route for getting product data
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 20.99 },
    { id: 2, name: 'Product 2', price: 15.49 },
    // Add more products here
  ];
  res.json(products);
});

// Example route with dynamic parameter
app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  // Fetch product data from a database using productId
  const product = { id: productId, name: 'Sample Product', price: 25.99 };
  res.json(product);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
