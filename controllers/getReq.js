const porducts = require("../models/porducts")
let getreq =async(req,res)=>{
    try{
            //getting the data  from the data Base 
        let allProducts= await porducts.find()
            //  checking  if data is present or not
        if (!allProducts.length){
            res.status(404).json({"message":"data not found"})
        }
        else{
               //sending the data as response in  the form of json format

        res.status(200).json(allProducts)
        }
    }catch(re){
        re.send(er)
    }

}
module.exports=getreq