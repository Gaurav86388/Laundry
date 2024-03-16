import { Router } from "express";
import { users } from "../database/UserSchema.js";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const salt_rounds = 10
const secret = "sdfhsdfihsdfahsdfahsdifasdyqtoetqwncnczxmncvlafu"

const userRouter = Router()


function validateUserkey(Userkey){

    if(!isNaN(Userkey)){
        return "number"
    }
    else{
        return "string"
    }

}
userRouter.post("/login", async(req, res)=>{

    const {Userkey, Password} = req.body
    console.log(Userkey, Password)

    let typeofUserkey = validateUserkey(Userkey)
  

    const userFound  = typeofUserkey==="number"?  await users.findOne({Phone: Userkey})  :await users.findOne({Email: Userkey})
    if(!userFound){
        res.status(404).json({message:"Not Found"})
    }
   else{


            const username = userFound.Name
            const storedHashedPassword = userFound.Password

            bcrypt.compare(Password, storedHashedPassword, (err, result)=>{

                if(err) return res.status(404).json({message:"Incorrect Password"})
                
                if(result){
                    const payload = {
                        exp: Math.floor(Date.now()/1000) + 3600,
                        data: userFound._id
                    }

                    const accesstoken = jwt.sign(payload, secret)
                        
                    return res.status(200).json({message: "validated", token: accesstoken, name: username})
                }
                else{
                    res.status(401).json({ message: "Invalid password" });
                }

            })
    }
   
    

})



userRouter.post("/register", async(req, res)=>{

    const registrationData = req.body
    const {Email, Phone, Password} = req.body
    console.log(registrationData)
    let existingEmail, existingPhone

    try{
        existingEmail = await users.findOne({Email: Email})
        existingPhone = await users.findOne({Phone: Phone})
    }
    catch(e){s
        console.log(e)
    }

    if(existingEmail || existingPhone) return res.status(400).json({message: 'User already exists.'})

    bcrypt.hash(Password, salt_rounds, async(err, hash)=>{

        if(err){
            console.log(err)
        }
        else{
    
            let records

            try{
                records = await users.create({...registrationData, Password: hash})
                
                }
            
            catch(e){
                return res.status(500).json({message: "Server Error.", error: e.message})
            }
        
            if(records){
                return res.status(200).json({message: "Success register", records})
            }
        }
    
       })



})




export default userRouter