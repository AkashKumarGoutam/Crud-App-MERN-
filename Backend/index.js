// import all dependencies
const express =require('express')
const cors = require("cors")
const connectMongoose = require ('./Db_Connection/db')
const UserRouter = require('./routes/UsersRoute.js')

///store express func in app
const app=express()
/////////////////////////
// use cors for set origin frontemd to backend
app.use(cors())
/////////////////////////////
//////get json response from frontend
app.use(express.json())
////////////////////////////

////////connect database
connectMongoose()
///////////////////////

///// set Routes
app.use(UserRouter)

////////////set port
app.listen(3001 , ()=>{console.log('server is Listening')})
////////////////////////////////////





