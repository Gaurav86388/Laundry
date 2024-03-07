const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const app = express()

const mongoDBURL ="mongodb+srv://pratikbulkunde03:pratik@cluster0.enkdn1t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(bodyParser.json())
app.use(express.json());

const PORT = "8080";

app.get('/', (req, res)=>{
    return res.status(404).send("Hello")
});
app.post('/', (req, res)=>{
    return res.status(404).send("Hello")
});


mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("Connected")
    app.listen(PORT, ()=>{
        console.log(`App is listening on ${PORT}`)
    })
}).catch((e)=>{
    console.log(e)
})