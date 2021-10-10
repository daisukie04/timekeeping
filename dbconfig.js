const mysql = require("mysql")


const config = mysql.createConnection({

    host: "localhost",
    user:   "root",
    password: "1234",
    database: "timekeeping"

})

config.connect((err) => {
    if(err)
    {
        console.log(err.message)
    }
    else{
        console.log("connect")
    }
})

module.exports = config