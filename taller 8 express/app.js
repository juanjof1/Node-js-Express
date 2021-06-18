const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
res.send('Hello world of Express');
});

app.get('/about', (req, res) => {
    res.send('This is small Express');
    });

    app.get('/add', (req, res) => {
        res.send('my email juanjof1@gmail.com');
    });
        
    app.listen(port, () => {
    console.log('Server listeninig on http://localhost:${port}');
})