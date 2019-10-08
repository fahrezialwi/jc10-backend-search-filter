var mysql = require('mysql')

const db = mysql.createConnection({
    user: 'fahrezialwi',
    password: '12345678',
    database: 'titanic',
    host: 'db4free.net'
})

module.exports = db