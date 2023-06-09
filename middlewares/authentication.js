let jwt=require("jsonwebtoken")
let authentication=(req,res,next)=>{
    let token=req.header('auth')
    try
    {
        if(token)
        {
        let valid=jwt.verify(token,"code")
        console.log("auth", jwt.verify(token,"code").role)
        next()

        }
        else{
            res.status(403).json({"status":"failed","massage":"unAuthenticated"})
        }
    } catch(er)
    {
        return res.status(403).json({"status":"failed","massage":"unAuthenticated "+er.message})
    }
    

}
module.exports=authentication