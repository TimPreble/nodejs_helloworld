const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    console.log("Default route");
    res.send('Welcome to the minimal Node.js API.......DEMO, detached # 2!');

});

app.get('/api/items', (req, res) => {
    res.json([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
    ]);
});

app.post('/api/items', (req, res) => {
    const newItem = req.body;
    res.status(201).json({ message: 'Item created', item: newItem });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// This is my contribution
