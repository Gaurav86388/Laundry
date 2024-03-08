import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './Router/Router.js';
const app = express()

const mongoDBURL ="mongodb://localhost/laundry"

app.use(bodyParser.json())
app.use(express.json());

const PORT = "8080";

async function main(){

    try{
       await  mongoose.connect(mongoDBURL)
    }
    catch(e){
        console.log(e)
    }

    app.use("/", router)

    

    app.listen(PORT, ()=>{
        console.log(`App is listening on ${PORT}`)
    })

} 


main().catch(e=>console.log(e))



