const path = require('path');
const express = require('express');

const app = express();

// Our port the application will listen on.
const PORT = process.env.PORT || 8080;

// serve our static stuff like style.css
app.use('/public', [express.static('src/public')]);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
