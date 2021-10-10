const mysql = require("mysql")


const config = mysql.createConnection({

    host: 'sql6.freemysqlhosting.net',
user: 'sql6443468',
password: 'ntLBPUaa1P',
database: 'sql6443468',

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