const path = require('path');
const express = require('express');

const app = express();

// Our port the application will listen on.
const PORT = process.env.PORT || 8080;

// serve our static stuff like style.css
app.use('/public', [express.static('src/public')]);


// send all requests to index.html so browserHistory in React Router works
// protect all routes from this point onwards using our middleware

// WARNING: it is important that this route stays at the bottom to ensure
// the middleware doesn't run during the authentication process
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
