const express = require('express');
const path = require('path'); // Import the path module
const stripe = require('stripe')('sk_test_51NjyTTLWuSm1CyQDFfJMmRoXUPyWFbBUeSSkcNERcgDjQgNsUlhhPnz7kw4nzhj9VxlRwGSWFouyBVOF6BK7HBub00gdQGjrct');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3001; // You can change this to any port you prefer

app.use(express.static(path.join(__dirname, 'client/build')));
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,POST', // Allow only GET and POST requests
}));

app.get('/retrieve-checkout-session', async (req, res) => {
  const sessionId = req.query.sessionId;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.json(session);
  } catch (error) {
    console.error('Error retrieving session:', error);
    res.status(500).json({ error: 'An error occurred while retrieving session data.' });
  }
});

app.post('/create-checkout-session', async (req, res) => {
  const productId = req.body.productId; // Assuming the product ID is sent in the request body
  // Fetch product details from your database using the productId
  // Calculate the total price and other session details

  // Create the Stripe Checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Product Name', // Replace with actual product name
            images: ['product_image_url'], // Replace with actual product image URL
          },
          unit_amount: 1000, // Replace with actual price in cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success', // Replace with actual success URL
    cancel_url: 'http://localhost:3000/cancel', // Replace with actual cancel URL
  });

  res.json({ id: session.id }); // Return the session ID to the client
});

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
