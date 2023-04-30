const express = require('express');
// import {express} from "express";
const cors= require('cors');
import connection from "./Db/db";
import router from "./Router/Router";

const app = express();
app.use(express.json());
app.use(cors());

app.use('/books',router);
app.get('/',(req,res)=>{
    res.send("welcome");
})

connection()
.then(()=>{
    try{
        app.listen(8080,()=>{
            console.log("server is running on http://localhost:8080");
        })
    }
    catch(err){
        console.error(err.message);
    }
    
})




