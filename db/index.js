var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mimi_db',
});

con.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected~!');
  }
});

