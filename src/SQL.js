const mysql      = require('mysql');

function queryName(name){
 const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        port     : '3306',
        database : 'cryptoman'
      });
      
connection.connect();

connection.query('SELECT * FROM coin_name WHERE Fullname= '+name+' ', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
   
connection.end();

}
 

module.exports = queryName;