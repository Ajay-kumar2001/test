const express=require("express")
require("dotenv").config()
const cors=require("cors")
const bodyParser=require("body-parser")
const cookie=require("cookie")
const cookieParser=require("cookie-parser")
let dBconnection=require("./config/dBConnection")
let routers=require("./routers/userRoutes")
let app=express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use("",routers)
dBconnection()
console.log(process.env.PORT_NO,process.env.DB_URL)
app.listen(process.env.PORT_NO,process.env.IP,()=>console.log("server is connected"))










