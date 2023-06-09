let products=require("../models/porducts")
let jsonwebtoken=require("jsonwebtoken")
let deletReq=async(req,res)=>{
    try{
        console.log(req.cookies.jsonwebtoken)
        // deleting the paticular document with the help of id
        await products.findByIdAndDelete(req.params.id)
        res.status(200).send("document deleted")
    }catch(er){
        res.status(500).send(er)
    }
}
module.exports=deletReq