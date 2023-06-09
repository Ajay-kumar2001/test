let porducts=require("../models/porducts")
let putReq=async(req,res)=>{
    try{
    console.log( req.params)
    console.log(req.body)
        // updating the paticular  data with the help of id
   const updated= await porducts.findByIdAndUpdate(req.params.id,{...req.body},{new:true,runValidators:true})
    res.status(200).json(updated)
    }catch(er){
        res.status(500).send(er)
    }
}
module.exports=putReq