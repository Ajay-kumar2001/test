const mongoose=require("mongoose")
let dBConnection=()=>{
mongoose.connect(process.env.DB_URL).then(()=>console.log("db connected")).catch(("db not connected"))
}
module.exports=dBConnection