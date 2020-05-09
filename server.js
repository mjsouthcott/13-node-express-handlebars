// Import dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Create app
const app = express();

// Add Express middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./controllers/burgers_controller"));

// Set app to use Handlebars template engine
app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");

// Set port to 3000
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}.`))