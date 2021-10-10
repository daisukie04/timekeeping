const mysql = require('mysql')

const pool = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '1234',
database: 'timekeeping',
})



module.exports = pool