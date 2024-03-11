import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Email: {type: String, unique: true, required: true},

    Phone: {type: Number, unique: true, required: true},
    State: {type: String, required: true}, 

    District: {type: String, required: true},
    Address: {type:String, required: true},
    
    Pincode: {type: Number, required: true},
    Password:{type: String, required: true},
    
    
    
})

const users = mongoose.model("User", userSchema)

export {users}