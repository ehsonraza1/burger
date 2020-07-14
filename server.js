var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

//Todo

// make a function does alot:
// make api call to /all to get an updated list of burgers
// empty out the two columns that have burgers
// populate those two columns with the updated list and devoured-ness

// mape over all the burgers, if devoured write here else there
// function that can take a single burger object and spit out some html that displays it in a panel or card or <li>
// also need to make a button on the undevoured column that lets you devour it
// that button needs to be able to track in the id of the burger
// the id will let you make an api request to that burger's id, and devour it

// once you've devoured OR created a new burger, just call this populate function to refresh you page content
