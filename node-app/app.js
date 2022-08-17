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
    user:"rails_user",
    password:"pass",
    database:"demo_project_development"
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

app.listen(3001, () => {
    console.log("server running at 3001");
})