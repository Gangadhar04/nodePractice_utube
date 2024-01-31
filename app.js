const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

dotEnv.config()

// mongoDb connection processs step by step
// const {MongoClient} = require('mongodb');

// MongoClient.connect(process.env.mongo_url)
// .then(()=>{
//     console.log("mongoDB connected Successfully!")
// }).catch((err)=>{
//     console.log("Error",err)
// })


const app = express();

app.use(bodyParser.json());
// app.use(express.json());
const PORT = process.env.PORT || 5000 

 // mongodb connection using mongoose

mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("MongoDB Connected Successfully!")
}).catch((error)=>{
    console.log(`${error}`)
})



//  middlewares Creating  in simple example below

// const firstHandler = ((req , res, next)=>{
//     if (10<20){
//        next() 
//     }
// })

// const secondHandler = ((req , res, next)=>{
//     if (true){
//        next() 
//     }
// })

// app.get('/apple',firstHandler, (req,res)=>{
//     res.send("have an apple a day get away from hospital")
// })

// app.get('/about',(req, secondHandler, res)=>{
//     res.send("This is about page")
// })

// app.get('/user/:121',(req,res)=>{
//     res.send("you are in the page no 121")
// })



app.use('/employees', employeeRoutes);




// creating server using express 

app.listen(PORT,()=>{
    console.log(`Server Started And Running at ${PORT}`)
});
