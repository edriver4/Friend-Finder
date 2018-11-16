// The dependencies for express
const express = require('express');

// configuration for express server
const app = express();

const PORT = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router configuration
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// listener - starts server
app.listen(PORT, () => {
    console.log(`App listening on: http://localhost:${PORT}`);
});