const express =require("express")
const server=express()
server.listen(3001,()=>{
    console.log("server connected successfully")
})

server.get("/about",(req,res)=>{
    res.send("this is about page")
})
server.get("/main",(req,res)=>{
    res.send("this is main page")
})