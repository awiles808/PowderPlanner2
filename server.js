//grab dependencies
const express = require('express'),
  app = express();
    port = process.env.PORT || 8080
//config application

//set the routes
app.get('/', (req, res) => {
  res.send('Hello, I is the app!')
});

//start server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
