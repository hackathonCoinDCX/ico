/* Flux 
    it is an architect for building the client -side web applications with React. 
    it is neither a framework/Library, nor a template.
    it is a kind of architecture that complements React as a View & follow the concept of 
    unidirectional Data Flow Model. 

    Flux is very useful for the dynamic projects. 

    Flux has 3 major roles 
    1: Dispatcher
        Dispatcher APIs has 5 methods
        1.1: register()
        1.2: unregister()
        1.3: waitFor()
        1.4: dispatch()
        1.5: isDispatching()
    2: Stores
    3: Views ( React components)

*/

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

app.post("/submit-name", urlencodedParser, (req, res)=>{
    console.log(req.body.yourname, "asdadsadsas");
    let data = { yourname : req.body.yourname };
    let sqlInsert = 'INSERT INTO test SET ?';
    let query = con.query(sqlInsert, data, (err, result) => {
        if(err) throw err;
        res.send(JSON.stringify({"status":200, "error":null, response:result}))
    })
    // console.log(req);
})

// app.get("/", (req, res)=>{
//     console.log("asdads");
//     res.json({"sda":"asdad"});
// })

con.connect((err) => {
    if(err) throw err;
    console.log("Mysql connections");
})

app.listen(3001, () => {
    console.log("server running at 3001");
})