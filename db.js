const mysql = require('mysql')

const pool = mysql.createConnection({
host: 'sql6.freemysqlhosting.net',
user: 'sql6443468',
password: 'ntLBPUaa1P',
database: 'sql6443468',
})



module.exports = pool