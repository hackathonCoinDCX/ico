const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const date = require('date-and-time');

const app = express()
app.use(cors())
app.use(sessions({
    secret: "secret-key",
    resave: false,  
    expires: new Date(Date.now()),
    saveUninitialized:true,
    cookie: { maxAge : 1000 * 60,
    }
}));

app.use(cookieParser());

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

///////////////////////// APIs /////////////////////////////////
var iid = "";

app.get('/checksession', (req, res) => {
    console.log("check session :/ "+req.session);
    console.log("seonaofn "+req.sessionID);
    iid = req.sessionID;
    console.log(iid);
    var qry = `select * from session where sessiontoken = '${iid}'`
    con.query(qry, (err, result) => {
        if(err) throw err;
        console.log("asdas : " + JSON.stringify(result));
        if(result.length == 0){
            // var qry = `delete from session;`
            // con.query(qry, (err, result1) => {
            //     if (err) throw err;
            //     else{
            //         console.log("session deleted");
            //         iid = "";
            //     }
            // });
            res.send({"statusCode":200, "isExpire": true});
        }
        else{
            res.send({"statusCode":200, "isExpire": false});
        }
    });
});

app.post('/deletesession', (req, res) => {
    // let { sid } = req.body;
    iid = req.sessionID;
    console.log("asdadsAsasdadsasddas "+ iid);
    var qry = `select sessiontoken from session where sessiontoken= '${iid}'`
    con.query(qry, (err, result) => {
        if(err) throw err;
        console.log("asdas : " + JSON.stringify(result));
        if(result.length == 0){
            res.send({"statusCode":200, "isExpire": true});
        }
        else{
            var qry = `delete from session where sessiontoken='${iid}'`
            con.query(qry, (err, result1) => {
                if (err) throw err;
                else{
                    console.log("session deleted");
                    iid = "";
                    res.sessionID = "";
                    res.send({"statusCode":200, "isExpire": true});
                }
            });
        }
    });
});

app.post('/login', (req, res, next) => {
    // let { email, password } = req.body;

    let email="aab";
    let password = "ass";

    email = email.toLowerCase();
    // if(!email.length){
    //     return res.json({'alert': 'enter your email'});
    // } else if(password.length < 8){
    //     return res.json({'alert': 'password should be 8 letters long'});
    // }
    
    var qry = `select email from users where email= '${email}'`
    con.query(qry, (err, result) => {
        if(err) throw err;
        // console.log(result.length);
        console.log("asdads : " + JSON.stringify(result));
        
        if(result.length==0){
            console.log(JSON.stringify(result), "empty");
            console.log("Incorrect Email");
            res.setHeader('Content-Type', 'application/json');
            return res.json({"alert":"Incorrect Email"});
        }
        else {
            console.log(JSON.stringify(result), "rows");
            qry = `select password from users where email='${email}' and password='${password}'`
            console.log(qry);
            con.query(qry, (err, result2, fields) => {
                if(err) throw err;
                console.log(JSON.stringify(result2));
                console.log(password);
                if(result2.length ==0){
                    console.log("Incorrect Password");
                    res.setHeader('Content-Type', 'application/json');
                    return res.json({"alert":"Incorrect Password"});
                }
                else{
                    emailAll = email;
                    console.log(emailAll);
                    console.log("Login Successful");
                    res.setHeader('Content-Type', 'application/json');

                    qry3 = `select * from users where email='${email}'`;
                    con.query(qry3, (err, result3) => {
                        if(err) throw err;
                        console.log(`Result3 : ${JSON.stringify(result3)}`);

                        if(result3.length==0){
                            req.session.msg = `Authentication failed: ${result.failMessage}`
                            console.log(req.session);
                        }
                        else{
                            console.log(`Final Result: ${JSON.stringify(result3)}`);
                            req.session.regenerate(() => {
                            req.session.user = result3;
                            req.session.msg = `Authenticated as ${JSON.stringify(result3)}`;
                            console.log(`Session:${req.session}`);
                            console.log(`Session:${JSON.stringify(req.session)}`);
                            console.log(`${JSON.stringify(req.sessionID)}`);
                            var now  =  new Date();
                            var value = date.format(now,'YYYY-MM-DD HH:mm:ss');
                            qry4 = `insert into session values(${req.session.user[0].id}, '${req.sessionID}', '${value}', '${date.format(req.session.cookie.expires,'YYYY-MM-DD HH:mm:ss')}')`
                            console.log(qry4);
                        
                            con.query(qry4, (err, result4)=>{
                                if (err) throw err;
                                else{
                                    iid = req.sessionID;
                                    console.log("successfully Added"+ result4);
                                }
                            })
                            res.json(req.session);
                            });
                        }
                    })
                }
            });
        }
    });
});

///////////////////////////////////////////////////////////////

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
    let sqlInsert = 'INSERT INTO users(name, email, password, mobile, developer) VALUES ("'+name+'", "'+email+'", "'+password+'", "'+mobile+'", "'+developer+'")';
    let query = con.query(sqlInsert, (err, result) => {
        if(err) throw err;
        res.send(JSON.stringify({"status":200, "error":null, response:result}))
        res.redirect('/login');
    })
});

app.get("/user/:Id",urlencodedParser,(req,res)=>{
    let sqlInsert='select * from users where id='+req.params.Id;
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
        res.send(result);
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