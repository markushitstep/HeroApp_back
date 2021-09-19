const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authR = require('./routes/auth')
const createR = require('./routes/create')
//const getAll = require('./controllers/create')
const app = express()


mongoose.connect('mongodb+srv://maxim:12345@cluster0.6bfj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    // user: process.env.MONGO_USER,
    // pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then( () => console.log(' Mongobd connected '))
    .catch( e => console.log(e) )


app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authR)
app.use('/api/create', createR)
//app.use('/api/get',getAll.getAll )


// app.get('/', (req, res) =>{
//     res.status(200).json({
//         yo: 'hi'
//     })
// })

module.exports = app