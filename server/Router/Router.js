import { Router } from "express";
import mongoose from "mongoose";
const router = Router()



router.get('/', async(req, res)=>{
    return res.status(404).send("Hello")
});

router.post("/login", async(req, res)=>{

    const {username, password} = req.body
    console.log(username, password)
    
    const userFound  = await user.findOne({username: username, password: password})
    if(userFound){
        res.status(200).json({message: "success"})
    }
   else{
    res.status(404).json({message:"failure"})
   }
    

})

router.post("/register", async(req, res)=>{

    const registrationData = req.body
    console.log(registrationData)
    let records

    try{
        records = await user.findOne({email: registrationData.email})
    }
    catch(e){
        console.log(e)
    }

    if(records == registrationData.email) return res.status(400).json({status: 'user already exists'})

    try{
        records = await user.create(registrationData)
        
        }
    
    catch{
        res.status(500).json({message: "Server Error"})
    }

    if(records){
        return res.status(200).json({message: "Success", records})
    }


})


export default router