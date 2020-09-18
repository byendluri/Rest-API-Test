var  mysql = require('mysql');

var con = mysql.createConnection({
    host: "school.cblimror85kr.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "admin123"
});
function dbConnection(conn) {
   conn = con 
   conn.connect(function(err) {
       if (err) throw err;
       console.log("Connected!");
    
       });
       return conn;

}

function dbConnClose(conn) {
   conn.end();
}

function dbCreateTable() {
   con1 = dbConnection(con);
   con1.query('CREATE DATABASE IF NOT EXISTS student;');
   con1.query('USE student;');
   con1.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL, firstname varchar(30), lastname varchar(30), class varchar(10), nationality varchar(30), PRIMARY KEY(id));', function(error, result, fields) {
      console.log(result);
   });
 //  con1.query('INSERT INTO users(id, firstname, lastname, class, nationality) VALUES(223445, "Mike", "Wong", "3A", "Singapore");', function(error, result, fields) {
   //   if (error) throw error;
     //   console.log("Record Inserted Successfull");
   //});
   dbConnClose(con1);         
}

//dbCreateTable(con);

module.exports = { dbConnection, dbConnClose }
