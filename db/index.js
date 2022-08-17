var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mimi_db',
  password: 'Lxy767125!'
});

con.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected~!');
  }
});

