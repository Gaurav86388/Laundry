import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},

    phone: {type: Number, required: true},
    state: {type: String, required: true}, 

    district: {type: String, required: true},
    address: {type:String, required: true},
    
    pincode: {type: Number, required: true},
    password:{type: String, required: true},
    
    confirmpassword:{type: String, required: true},
    
    
})

const user = mongoose.model("User", userSchema)

export {user}