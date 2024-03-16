import { Router } from "express";
import jwt from "jsonwebtoken"
import { users } from "../database/UserSchema.js";
import {order} from "../database/OrderSchema.js"
import {orderSummary} from "../database/OrderSummarySchema.js"

const secret = "sdfhsdfihsdfahsdfahsdifasdyqtoetqwncnczxmncvlafu"

const orderRouter = Router()

const date = new Date()
const monthsArray = [  "Jan",  "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec"]

const day = date.getDate().toString()
const month = monthsArray[date.getMonth()].toString()
const year = date.getFullYear().toString()
const hour = date.getHours().toString()
const minutes = date.getMinutes().toString()



const dateTimeformat = day + " " + month + " " + year + ", "  + hour + ":" +minutes



function authenticateToken(req, res, next){

    const authHeader = req.headers.authorization

    const token = authHeader ? authHeader.split(" ")[1] : res.json({status: "where is the token man!"})
 
    if(token === null) return res.sendStatus(401)

    jwt.verify(token, secret, async(err, decoded)=>{
        if(err) return console.log(err)

        const userdata = await users.findOne({_id: decoded.data})

        if(!userdata) return res.status(400).render("http://localhost:5173").json({status:"Unauthorised"})
        
        req.userId = userdata._id
        
        next()

    })


}



async function generateOrderID(){

    try{
        const orderArray = await orderSummary.find()
        const nextOrderId=  orderArray.length ? orderArray.length + 1 : 1;
        return `OR${nextOrderId.toString().padStart(5, '0')}`
    }
    catch(e){
        console.log(e)
    }


}

function findQuantity(rows){

    const qtArray = rows.map(item=> {

        return parseInt(item.expense.calculation.split("x")[0])
    })

let sum = 0
for(let i=0; i<qtArray.length; i++){
    sum = sum + qtArray[i]
}
return sum

}

orderRouter.post("/orderdetails", authenticateToken,async(req, res)=>{

const auth_userId = req.userId
 const nextOrderId = await generateOrderID()
 const storeLocation = req.body.storeDetails.storeLocation

 const city = req.body.userAddress.city
 const storePhone = req.body.storeDetails.phone

 const totalItem = findQuantity(req.body.orderDetails.rows)

 const price= req.body.orderDetails.total
 const status = "Ready to Pickup"

 const orderDateAndTime = dateTimeformat

let addOrderSummary, addOrder
 try{
    addOrderSummary = await orderSummary.create({orderId: nextOrderId, userId: auth_userId, ...req.body})
    addOrder = await order.create({orderId: nextOrderId, userId: auth_userId, storeLocation: storeLocation, city: city,
         storePhone:storePhone,totalItem: totalItem, price:price, status:status, orderDateAndTime: orderDateAndTime})
 }
 catch(e){
    console.log(e)
    return res.status(400).json("less details")
}
       if(addOrderSummary && addOrder){
        return res.status(200).json("success")
       }
       else{
        return res.status(500).json("Server Error")
       }

})


orderRouter.get("/orderdetails", authenticateToken, async(req, res)=>{

    const auth_userId = req.userId
    let addOrderSummary, addOrder;

    try{
        addOrderSummary = await orderSummary.find({userId : auth_userId})
        addOrder = await order.find({userId : auth_userId})
    }
    catch(e){
        console.log(e)
    }

    if(addOrderSummary && addOrder){
        return res.status(200).json({addOrderSummary: addOrderSummary, addOrder: addOrder})
    }
    else{
        return res.status(500).json({addOrderSummary: [], addOrder: []})
    }



})

orderRouter.put("/orderdetails", authenticateToken, async(req, res)=>{


const {orderId}= req.body

let findData
try{
    findData = await order.findOne({orderId: orderId})
}
catch(e){
    console.log(e)
}

let updatedData
if(findData){
    try{
        updatedData = await order.updateOne({orderId: orderId}, {$set:{status: "Cancelled"}})
    }
    catch(e){
        console.log(e)
    }
}

if(updatedData){

    return res.status(200).json({status: "cancelled"})
}
else{
    return res.status(200).json({status: "update failed"})
}


})


export default orderRouter