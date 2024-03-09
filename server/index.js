import express from 'express'
import mongoose from 'mongoose';

import bodyParser from 'body-parser';

import UserRouter from './Router/UserRouter.js';
import cors from 'cors';
const app = express()

const mongoDBURL ="mongodb://localhost/laundry"

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())

const PORT = "3000";

async function main(){

    try{
       await  mongoose.connect(mongoDBURL)
    }
    catch(e){
        console.log(e)
    }

    app.use("/", UserRouter)

    

    app.listen(PORT, ()=>{
        console.log(`App is listening on ${PORT}`)
    })

} 


main().catch(e=>console.log(e))



