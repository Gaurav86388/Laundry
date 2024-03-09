import { Router } from "express";
import { user } from "../database/UserSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const salt_rounds = 10
const secret = "sdfhsdfihsdfahsdfahsdifasdyqtoetqwncnczxmncvlafu"

const router = Router()
router.get('/', async(req, res)=>{
    return res.status(200).send("Hello")
});

function validateUserkey(userkey){

    if(!isNaN(userkey)){
        return "number"
    }
    else{
        return "string"
    }

}
router.post("/login", async(req, res)=>{

    const {userkey, password} = req.body
    console.log(userkey, password)

    let typeofUserkey = validateUserkey(userkey)
    console.log(typeofUserkey)

    const userFound  = typeofUserkey==="number"?  await user.findOne({phone: userkey})  :await user.findOne({email: userkey})
    if(!userFound){
        res.status(404).json({message:"failure"})
    }
   else{

            const storedHashedPassword = userFound.password

            bcrypt.compare(password, storedHashedPassword, (err, result)=>{

                if(err){
                    console.log(err)
                }
                else{
                        const payload = {
                            exp: Math.floor(Date.now()/1000) + 3600,
                            data: userFound._id
                        }

                        const accesstoken = jwt.sign(payload, secret)
                        return res.status(200).json({status: "validated", token: accesstoken})
                }

            })
    }
   
    

})

router.post("/register", async(req, res)=>{

    const registrationData = req.body
    const {password} = req.body
    console.log(registrationData)
    let existingUser

    try{
        existingUser = await user.findOne({email: registrationData.email})
    }
    catch(e){
        console.log(e)
    }

    if(existingUser) return res.status(400).json({status: 'user already exists'})

    bcrypt.hash(password, salt_rounds, async(err, hash)=>{

        if(err){
            console.log(err)
        }
        else{
    
            let records

            try{
                records = await user.create({...registrationData, password: hash})
                
                }
            
            catch(e){
                return res.status(500).json({message: "Server Error", e})
            }
        
            if(records){
                return res.status(200).json({message: "Success", records})
            }
        }
    
       })
    

    

    


})


export default router