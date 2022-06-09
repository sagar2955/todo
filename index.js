const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
require("dotenv").config();

const app = express()
const userRoute = require('./app/api/routes/users')
const todoRoute = require('./app/api/routes/todo')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
app.set('secretKey','hdjsakfhdjsk')
const userValidation = (req, res,next) => {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), 
    (err,decoded) =>{
        if(err){
            res.json({
                message: err
            })
        }
        next()
    })
}
app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/user',userRoute)

app.use('/todo',userValidation, todoRoute)


app.get('/home', (req,res) => {
    res.json({
        "APP": "JWT Based API Application",
        "message": "Successfully Running the Application"
    })
})

const mongoURI = "mongodb+srv://sagargunjal2955:sagar@cluster0.7a5skea.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURI)
.then(() => {
    console.log("Successfully Connected to the Databas")
})
.catch((err) => {
    console.log(err)
})

app.listen(process.env.PORT || 5000,() => {
    console.log("Successfully Running on the PORT: 5000")
})