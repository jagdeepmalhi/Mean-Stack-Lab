const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('Hello User'));
app.get('/home', (req, res) => res.send('Welcome to Home Page'))
app.get('/contactus', (req, res) => res.send('Welcome to Contact Us Page'))
app.get('/about', (req, res) => res.send('Welcome to About Page'))

app.get('/product', (req, res) => res.send('Welcome to Products Page'))
app.get('/product/:id', (req, res) => {
    res.send('Welcome to Product Detailed Page');
    res.send(`Seeing Details of ${req.params.id}`);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
