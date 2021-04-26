const mysql      = require('mysql');

function queryName(name){
    let name = "BITCOIN"
    try{ const connection = mysql.createConnection({
            host     : '127.0.0.1',
            user     : 'root',
            database : 'cryptoman'
          });
          
    connection.connect();
    
    connection.query('SELECT * FROM coin_name', function (error, results, fields) {
        if (error) throw error;
        console.log(results[0]);
      });
       
    connection.end();}
    catch(err){
        console.log(err);
    }
}
 

module.exports = queryName;