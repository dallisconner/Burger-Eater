var mysql = require("mysql");

var connection;

if (process.env.JAWSBD_URL) {
  connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
