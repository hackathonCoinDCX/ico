const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express()
app.use(cors())
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json())
// Connect Database
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"ico"
});
con.connect((err) => {
    if(err) throw err;
    console.log("Mysql connections");
});
app.post("/coinlist", urlencodedParser, (req, res)=>{
    // console.log("if cwalled");
    let sqlInsert = 'select * from coinlist';
    let query = con.query(sqlInsert, (err, result) => {
        if(err) throw err;
        console.log("jsdnasji");
        res.send(JSON.stringify({"status":200, "error":null, response:result}))
    })
    // console.log(req);
})
app.get("/coinlist", urlencodedParser, (req, res)=>{
    let sqlInsert = 'select * from coinlist';
    let query = con.query(sqlInsert, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
        // res.send(JSON.stringify({"status":200, "error":null, response:result}))
    })
    // console.log(req);
})
// app.post("/signup", urlencodedParser, (req, res)=>{
//     const data=req.body;
//     let sqlInsert = 'INSERT INTO signup SET ?';
//     con.query(sqlInsert,data,(err,result)=>{
//         if(err) throw err;
//         res.send(JSON.stringify({"status":200, "error":null, response:result}))
//     })
// })
app.post('/signup', function(req, res) { //register
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let mobile = req.body.mobile;
    let developer = req.body.developer;
    let sqlInsert = 'INSERT INTO signup(name, email, password, mobile, developer) VALUES ("'+name+'", "'+email+'", "'+password+'", "'+mobile+'", "'+developer+'")';
    let query = con.query(sqlInsert, (err, result) => {
        if(err) throw err;
        res.send(JSON.stringify({"status":200, "error":null, response:result}))
        res.redirect('/login');
    })
});
app.get("/user/:Id",urlencodedParser,(req,res)=>{
    let sqlInsert='select * from signup where Id='+req.params.Id;
    con.query(sqlInsert,(err,result)=>{
        if(err){
            throw err;
        }
        //console.log(result);
        res.send(JSON.stringify({"status":200, "error":null, response:result}));
    })
})
app.get("/coin/:Id", urlencodedParser, (req, res)=>{
    console.log(req.params.Id);
    let sqlInsert = 'select * from coinlist where Id='+req.params.Id;
    let query = con.query(sqlInsert, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
        // res.send(JSON.stringify({"status":200, "error":null, response:result}))
    })
    // console.log(req);
})
// app.post("/submit-name", urlencodedParser, (req, res)=>{
//     console.log(req.body.yourname, "asdadsadsas");
//     let data = { yourname : req.body.yourname };
//     let sqlInsert = 'INSERT INTO test SET ?';
//     let query = con.query(sqlInsert, data, (err, result) => {
//         if(err) throw err;
//         res.send(JSON.stringify({"status":200, "error":null, response:result}))
//     })
//     // console.log(req);
// })
// app.get("/", (req, res)=>{
//     console.log("asdads");
//     res.json({"sda":"asdad"});
// })
app.get("/coinlist/:id", urlencodedParser, (req, res)=>{
    let sqlInsert = 'select * from coinlist where id = ' + req.params.id;
    let query = con.query(sqlInsert, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})
app.listen(3001, () => {
    console.log("server running at 3001");
})