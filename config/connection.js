// Set up MySQL connection.
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "d6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "yzvpjslht070lll6",
  password: "t6kc2h52xhwdww5a",
  database: "i2bsc1vn9gi01js5",
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
