var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Paoman12pao',
  database : 'cryptoman'
});
 
connection.connect();
 
connection.query('SHOW DATABASES', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();