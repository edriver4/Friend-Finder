// The dependencies for express
const express = require('express');

// configuration for express server
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router configuration
 require("./app/routing/apiRoutes")(app);
 require("./app/routing/htmlRoutes")(app);

// listener - starts server
app.listen(PORT, () => {
    console.log(`App listening on: http://localhost:${PORT}`);
});