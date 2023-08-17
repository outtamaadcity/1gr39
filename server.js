const express = require('express');
const fs = require('fs');
const fetch = require('node-fetch');
const app = express();

const PORT = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoint to add a post
app.post('/api/addPost', (req, res) => {
    const posts = JSON.parse(fs.readFileSync('posts.json'));
    posts.push(req.body.post);
    fs.writeFileSync('posts.json', JSON.stringify(posts));
    res.json({ success: true });
});

// API endpoint to get all posts
app.get('/api/getPosts', (req, res) => {
    const posts = JSON.parse(fs.readFileSync('posts.json'));
    res.json(posts);
});

// API endpoint to fetch lunch menu
app.get('/api/getLunchMenu', async (req, res) => {
    try {
        const response = await fetch('https://school.koreacharts.com/school/meals/B000011937/contents.html');
        const text = await response.text();
        res.send(text);
    } catch (error) {
        res.status(500).send('Failed to fetch lunch menu');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
