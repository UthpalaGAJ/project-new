const express = require("express");
const mysql =require('mysql');
const cors = require('cors');

const app =express();  //initialize express
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({  //create my database connection
    host: "localhost",
    user: "Boom",
    password:"jana@04",
    database:"JEDB_Project"
}) 


app.post('/signup', (req,res)=>{
    const sql ="INSERT INTO  login ('name', 'email', 'username','password','role') VALUES ()?";
    const values =[
        req.body.name,
        req.body.email,
        req.body.username,
        req.body.password,
        req.body.role,
    ]
    db.query(sql, [values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})


app.listen(8081, ()=> {
    console.log("listening");
})