const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'cryptoman'
});

function queryName(name){
connection.connect();

connection.query('SELECT * FROM coin_name WHERE Fullname= '+name+' ', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
   
connection.end();

}
 

module.exports = queryName;