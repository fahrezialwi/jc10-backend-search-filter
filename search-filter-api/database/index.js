var mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    password: '12345678',
    database: 'titanic',
    host: 'localhost'
})

module.exports = db