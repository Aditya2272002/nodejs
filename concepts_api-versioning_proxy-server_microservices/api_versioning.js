// Version ^4.18.5

// 3rd Part :- Minor change
// 2nd Part :- Recommended Bug Fix, Security Fix
// 1st Part :-   Major Release, Breaking Update [Entire New Application/Feature that can break the previous code base]
// ^ :- Means Compatible with version 4, means ^ 4 should be fixed and make changes in 2nd and 3rd Part.

// TODO:- NEED OF API VERSIONING
/*
Basically API versioning is needed as some website get stored as cache
in some users local and if we directly chnage the Api core functionality
then that might show user some unexpected errors. So we maintain some
kind of version so that if new user comes get redirected to latest
version and old get to previous API and to inform the old user we can
notify them or change theri stored cache.
*/

const express = require('express');
const app = express();

app.get('/v1/resource', (req, res) => {
   // Handle v1 logic
   res.json({ message: 'Version 1' });
});

app.get('/v2/resource', (req, res) => {
   // Handle v2 logic
   res.json({ message: 'Version 2' });
});

// Accepting Version in headers :- When new user comes just attaching some version based on regitry date something
app.get('/resource', (req, res) => {
   const apiVersion = req.headers['accept-version'];

   switch (apiVersion) {
      case '1.0':
         // Handle v1 logic
         res.json({ message: 'Version 1' });
         break;
      case '2.0':
         // Handle v2 logic
         res.json({ message: 'Version 2' });
         break;
      default:
         res.status(400).json({ error: 'Invalid API version' });
   }
});

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});




