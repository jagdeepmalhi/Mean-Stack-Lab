// modules =================================================
const express = require ( 'express' );
const app = express ();
// set our port
const port = 3000 ;
app.get( '/' , (req , res ) => res.send ( 'Welcome to MEAN Stack!  Name : jagdeep Singh University Roll : 12323' )); // startup our app at http://localhost:3000
app.listen ( port , () => console.log ( 'Example app listening on port ${port}!' ));
