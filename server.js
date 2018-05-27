//grab dependencies
const express = require('express'),
  app = express();
    port = process.env.PORT || 8080
//config application

//set the routes
//brings in all routes from routes.js file.
app.use(require('./app/routes'));


//start server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
