import express from 'express'
import mongoose from 'mongoose';
import orderRouter from "./Router/OrderRouter.js"
import bodyParser from 'body-parser';

import userRouter from './Router/UserRouter.js';
import cors from 'cors';
const app = express()

const mongoDBURL ="mongodb://localhost/laundryapp"

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

    app.use("/user", userRouter)
    app.use("/order", orderRouter)
    

    app.listen(PORT, ()=>{
        console.log(`App is listening on ${PORT}`)
    })

} 


main().catch(e=>console.log(e))



