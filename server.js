// modules =================================================
const express = require ( 'express' );
const path = require('path');
const app = express ();
// set our port
const port = 3000 ;

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

//app.get( '/' , (req , res ) => res.send ( 'Welcome to MEAN Stack!  Name : jagdeep Singh University Roll : 12323' )); // startup our app at http://localhost:3000


app.listen ( port , () => console.log ( 'Example app listening on port ${port}!' ));
