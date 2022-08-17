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

app.get("/user/developer/coinlist", urlencodedParser, (req, res)=>{
    console.log("api to /user/developer/coinlist");
    let devid = 1;
    let sqlInsert = 'select * from coinlist where dev_id=' + devid;
    let query = con.query(sqlInsert, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        // res.send(result);
    })
})

app.post("/user/developer/listnewcoin", urlencodedParser, (req, res)=>{
    console.log("api to /user/developer/listnewcoin");
    let sd = new Date();
    let ed = new Date();
    ed.setDate(sd.getDate() + 10);
    sd = sd.toISOString().split('T')[0]
    ed = ed.toISOString().split('T')[0]
    console.log(sd, " asfdad "+ ed);
    let newcoindata = {
        dev_id: 1,
        coin_name: "sample coin_name",
        about: "sample about",
        start_date: sd,
        end_date: ed,
        start_price: 15,
        end_price: 25,
        platform:"BTC",
        category:"Blockchain",
        total_tokens: 15,
        min_tokens: 15,
        white_paper: "sample whitepaper"
    };
    console.log(newcoindata);
    let sqlInsert = `insert into coinlist(dev_id, coin_name, about, start_date, end_date, start_price, end_price, platform, category, total_tokens, min_tokens, white_paper) values('${newcoindata.dev_id}', '${newcoindata.coin_name}', '${newcoindata.about}', '${newcoindata.start_date}', '${newcoindata.end_date}', ${newcoindata.start_price}, ${newcoindata.end_price}, '${newcoindata.platform}','${newcoindata.category}', ${newcoindata.total_tokens}, ${newcoindata.min_tokens},'${newcoindata.white_paper}')`;
    console.log(sqlInsert);
    let query = con.query(sqlInsert, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send({"statusCode":200, "errMsg": "no error"});
    })
})

app.get("/bid/:investorid", urlencodedParser, (req, res)=>{
    console.log("api to /bid/:investorid");
    let investorid = 1;
    let sqlInsert = `select * from bid where user_id=${investorid}`;
    let query = con.query(sqlInsert, (err, result) => {
        if(err) {
            throw err;
        }
        console.log(result);
        if(result.length == 0){
            res.send({"statusCode":200, "ifExists": false, "errMsg": "no error"});
        }
        else{
            res.send({"statusCode":200, "ifExists": true, "errMsg": "Error User already placed bid"});
        }
        // res.send(result);
    })
})
app.listen(3001, () => {
    console.log("server running at 3001");
})