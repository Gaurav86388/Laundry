import { Router } from "express";

const router = Router()



router.get('/', async(req, res)=>{
    return res.status(404).send("Hello")
});
router.post('/', async(req, res)=>{
    return res.status(404).send("Hello")
});


export default router