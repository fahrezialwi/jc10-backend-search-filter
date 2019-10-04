var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const db = require('./database')
const port = 1912

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the Titanic API</h1>`)
})

app.get('/passengers', (req, res) => {
    let sql = `select * from train`
    if (req.query){
        sql = `${sql} where`

        if(req.query.name){
            sql = `${sql} Name like '%${req.query.name}%' and`
        }
        if(req.query.age_min){
            sql = `${sql} Age >= ${req.query.age_min} and`
        }
        if(req.query.age_max){
            sql = `${sql} Age <= ${req.query.age_max} and`
        }
        if(req.query.gender){
            if (req.query.gender == 'all'){
                sql = `${sql}`
            } else {
                sql = `${sql} Sex = '${req.query.gender}' and`
            }
        }
        if(req.query.class){
            if (req.query.class == 'all'){
                sql = `${sql}`
            } else {
                sql = `${sql} Pclass = ${req.query.class} and`
            }
        }
        if(req.query.survived){
            if (req.query.survived == 'all'){
                sql = `${sql}`
            } else {
                sql = `${sql} Survived = ${req.query.survived} and`
            }
        }
        sql = sql.slice(0, -4)
    }

    db.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

app.get('/classes', (req, res) => {
    let sql = `select Pclass from train group by Pclass order by Pclass`
    db.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

app.listen(port, () => console.log('Server up in port ' + port))