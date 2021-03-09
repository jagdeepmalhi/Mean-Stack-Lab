const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Importing static files to express app
app.use('/css', express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use('/js', express.static(path.join(__dirname, "/node_modules/jquery/dist/js")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});
app.get('/contactus', (req, res) => res.send('Welcome to Contact Us Page'))
app.get('/about', (req, res) => res.send('Welcome to About Page'))

app.get('/product', (req, res) => res.send('Welcome to Products Page'))
app.get('/product/:id', (req, res) => {
    res.send('Welcome to Product Detailed Page');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
