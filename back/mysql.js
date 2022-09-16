const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test12",
  database: "test",
});

db.connect();

db.query("SELECT * FROM info", function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

db.end();
