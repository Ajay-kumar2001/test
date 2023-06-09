let mongoose=require("mongoose")
const sehema=new mongoose.Schema({
    product_name:{type:String,require:true},
    product_price:{type:String,require:true},
    product_rating:{type:String ,require:true},
    product_disp:{type:String ,require:true},
})
module.exports=mongoose.model("products",sehema)



