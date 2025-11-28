import express from "express"

const app = express()
const Port = 3000

app.get("/",(req,res)=>{
    res.status(200).json({msg:"success from backend"});
})




app.listen(Port,(console.log("server is running")))