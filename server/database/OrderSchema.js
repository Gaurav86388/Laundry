import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    orderId: {type: String, required: true},
    orderDateAndTime: {type: String, required: true},

    storeLocation: {type: String, required: true},
    city: {type: String, required: true}, 
    
    storePhone: {type: Number, required: true},
    totalItem:{type: Number, required: true},
    
   price:{type: String, required: true},
   status:{type: String, required: true}
    
})

const order = mongoose.model("Order", orderSchema)

export {order}