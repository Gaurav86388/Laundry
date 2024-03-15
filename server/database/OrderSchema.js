import mongoose from "mongoose";



const orderSchema = mongoose.Schema({
    orderId: {type: String, required: true},
    orderDateAndTime: {type: String, required: true},

    storeLocation: {type: String, required: true, default: "7th Street, JP Nagar"},
    city: {type: String, required: true, default: "Mumbai"}, 
    
    storePhone: {type: Number, required: true, default: "+919876543210"},
    totalItem:{type: Number, required: true},
    
   price:{type: String, required: true},
   status:{type: String, required: true, default: "Order Registered"},
   //userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    
})

const order = mongoose.model("Order", orderSchema)

export {order}