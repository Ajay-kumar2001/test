let users=require("../models/users")
let bcrypt=require("bcrypt")
let register=async(req,res)=>{
    try{
        let data=req.body
        console.log(data)
   let {name,email,password,confirmpassword,role} =req.body
           // checking whether all field values are entered or not
   if (name&&email&&password&&confirmpassword&&(password===confirmpassword)&&role){ 
    
    if(await users.findOne({"email":email})){
        res.status(409).json({"status":"failed","message":" already  have an account plese login "})
    }
    else{
    // encoding the password
       let pwd=await bcrypt.hash(password,10)
       let conPwd=await bcrypt.hash(confirmpassword,10)
    userDetail={...data,"password":pwd,"confirmpassword":conPwd}
    // storing the user data in to database 
         let usredata=await new  users(userDetail)
         usredata.save()
       res.status(201).json({"status":"ok","message":"registration succesful"})
    }
   }
   else{
    res.status(400).json({"message":"please enter the valid credentials"})
   }
    }catch(er){
        res.status(500).send(er.message)
    }
}
module.exports=register