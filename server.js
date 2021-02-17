require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('connect-flash')

const routes = require('./routes/routes.js')
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect(process.env.connection, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.emit('connected')
})
.catch((e)=>{console.log(e)})
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname))
app.set('view engine', 'ejs')
// app.use(session({
//     secret: 'secret',
//     cookie: {maxAge: 60000},
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(flash())
app.use(routes)

app.on('connected', ()=>{
    app.listen('4100', ()=>{
        console.log('http://localhost:4100')
    })
})