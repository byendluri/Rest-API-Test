var mysql = require('mysql');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var fs = require('fs');
var path = require('path');
const pool = require('./dbseed.js');
app.use(bodyparser.json({type:"application/json"}));
app.use(bodyparser.urlencoded({extended:true}));
const con = mysql.createConnection({
    host: "school.cblimror85kr.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "admin123"
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server Listening at http://%s:%s", host, port)
});

app.get('/fetchStudents', (request, response) => {
   con.connect(function(err) {

       con.query('USE student;');
       con.query('SELECT * FROM users;', (error, result, fields) => {
          if (error) response.send(error);
          if (result) response.send(result);
      });
     // con.end();
   });
});


app.get('/fetchStudents/:id', (request, response) => {
    var id = request.params.id;
    con.connect(function(err) {

       con.query('USE student;');
       con.query('SELECT * FROM users WHERE id = ?;', id, (error, result, fields) => {
          if (error) response.send(error);
          if (result) response.send(result);
      });
   });
});


app.get('/fetchStudents/class/:id', (request, response) => {
    var id = request.params.id;
    con.connect(function(err) {

       con.query('USE student;');
       con.query('SELECT * FROM users WHERE class = ?;', id, (error, result, fields) => {
          if (error) response.send(error);
          if (result) response.send(result);
      });
   });
});


app.post('/students', (req, res) => {
        console.log('Request received');

        con.connect(function(err) {

           console.log(JSON.stringify(req.body));
           console.log(req.body.id);
            con.query('USE student;');
            //var strquery = 'INSERT INTO users (id, firstname, lastname, class, nationality) VALUES ('+${req.body.id}, ${req.body.firstname}, ${req.body.lastname}, ${req.body.class}, ${req.body.nationality}')
            con.query('INSERT INTO users (id, firstname, lastname, class, nationality) VALUES (?,?,?,?,?)',[req.body.id, req.body.firstname, req.body.lastname, req.body.class, req.body.nationality] , function(err, result, fields) {
                if (err) res.send(err);
                if (result) {
                  res.status(200);

                  res.end(JSON.stringify({id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, class: req.body.class, nationality: req.body.nationality}));

                }
                if (fields) console.log(fields);
            });
        });
});

app.put('/updateStudent/:id', (req, res) => {
  console.log('Request Received');
  var id = req.params.id;
  con.connect(function(err) {
    con.query('USE student;');
    con.query('UPDATE users SET ? where id = ?', [req.body, id], (error, result) => {
       if (error) throw error;
       res.send('User Updated Successfully');

    });
});

});

app.delete('/deleteUser/:id', (req, res) => {
  console.log('request Received');
  var id = req.params.id;
  con.connect(function(err) {
    con.query('USE student;');
    con.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
       if (error) throw error;
       res.send('User deleted Successfully');

    });
});

});
