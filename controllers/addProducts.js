let porducts=require("../models/porducts")
let addProducts=async(req,res)=>{
    try{
          //storing the data into the database
        const newproduct= await new porducts ({...req.body})
        await newproduct.save()
        res.status(201).json({"message":" data posted"})

    }catch(er){
        res.status(500).send(er)
    }
}
 module.exports=addProducts  

