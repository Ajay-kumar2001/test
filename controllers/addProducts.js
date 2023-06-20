let porducts=require("../models/porducts")
let addProducts=async(req,res)=>{
    try{
          //storing the data into the database
         if( req.body ){
        const newproduct= await new porducts ({...req.body})
        await newproduct.save()
        res.status(201).json({"message":" data posted"})
         }
         else{
            res.status(400).json({"message":"enter the valid product details"})
         }
    }catch(er){
        res.status(500).send(er)
    }
}
 module.exports=addProducts  

