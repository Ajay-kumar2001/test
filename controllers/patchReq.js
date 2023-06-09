const porducts=require("../models/porducts")
let patchReq= async(req,res)=>{
    try{
    console.log("id",req.params.id)
    // updating the paticular  data with the help of id
    let updated=await porducts.findById(req.params.id)
    // checking  whether that paticulat   document is present or not
    if(!updated){
        res.status(404).json({"message":"user not found"})
    }
    else{
        updated.product_name=req.body.product_name
        updated.product_price=req.body.product_price
        updated.product_rating=req.body.product_rating
        updated.product_disp=req.body.product_disp

        await user.save()

    res.status(200).send("updeted")

    }
    }catch(er){
    res.status(500).json(er)
}
}
module.exports=patchReq