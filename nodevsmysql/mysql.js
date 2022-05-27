/*
  Nodejs with mysql: install package mysql
*/
var mysql = require('mysql'),
  dbname = 'nodejsdb';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: dbname
});

var createDB = function() {
  con.connect(function(err) {
    if (err) throw err;
    con.query("CREATE DATABASE IF NOT EXISTS " + dbname, function (err, result) {
      if (err) throw err;
      createTable();
    });
  });
};

var createTable = function() {
  var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
    insertDB();
  });
};

var insertDB = function() {
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
};

var getDB = function() {
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
}

//createDB();
getDB();