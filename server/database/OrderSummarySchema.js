import mongoose from "mongoose";

const orderSummarySchema = mongoose.Schema({
    //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    orderId: {type: String, required: true},
    storeDetails: {
      storeLocation: { type: String, required: true},
      storeAddress: { type: String, required: true},
      phone: { type: Number, },
    },
  
    orderDetails: {
      rows: [{
        product: { type: String, required: true }, 
        serviceNames: { type: [String], required: true }, 
        quantity: { type: Number, default: 1 }, 
        expense: {
          calculation: { type: String, required: true }, 
          result: { type: Number, required: true }, 
        },
      }],

      subTotal: { type: Number, required: true },
    pickupCharge: { type: Number, required: true },
    total: { type: Number, required: true },
    },
  
    userAddress: {
      title: { type: String, required: true },
      fulladdress: { type: String, required: true },
      city: { type: String, required: true },
    },
  
    
  });
  
  export const orderSummary = mongoose.model("OrderSummary", orderSummarySchema)
