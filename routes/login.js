const express = require('express')
const routs = express.Router()
const db = require('../dbconfig')


routs.get("/getlogin", (req, res)=>{

    let sqlquery = "select * from login"
    db.query(sqlquery, (err, results, fileds)=>{

        res.json(results)
    })

})


routs.get("/getloginuser", (req, res)=>{

    let username = req.query.username 
    let password = req.query.password

    let sqlquery = `SELECT * FROM login where username = '${username}' and password = '${password}';`
    db.query(sqlquery, (err, results, fileds)=>{

        res.json(results)
    })

})


module.exports = routs