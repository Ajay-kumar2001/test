protected=  (req,res)=>{
    console.log(`cookie ${req.cookies.jsonwebtoken}`)
    res.json({"message":req.cookies.jsonwebtoken})
}
module.exports=protected