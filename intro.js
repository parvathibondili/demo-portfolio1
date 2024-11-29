const bodyParser = require('body-parser')
const express = require('express')
const app = express()
// var bodyparser = require('bodyParser')
const port = 4000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/users', (req,res)=>{
    res,send([
        {id: 1,"name": "Parvathi", Qualification: "M.Sc"},
        {id: 2,"name": "Buddi", Qualification: "MCA"},
        {id: 3,"name": "Ammu", Qualification: "ssc"}
    ])
})
app.get('/users/:id', (req,res)=>{
    console.log(req.params.id);
    res,send([
        {id: 1,"name": "Parvathi", Qualification: "M.Sc"},
        {id: 2,"name": "Buddi", Qualification: "MCA"},
        {id: 3,"name": "Ammu", Qualification: "ssc"}
    ])
})
app.post('/users', (req,res)=>{
    console.log(req.body)
    res.send({id:3423, message:"user has been created successfully", data:req.body})
})
app.post("/users/login", (req,res)=> {
    let data = req.body
    if(data.username==='admin'&& data.password ==='RunCode.io')
        res.send({message:"Your login is successful"})
    else
    res.send({message:"Invalid username/password"})
})
app.post("/users", (req,res)=>{
    console.log(req.body)
    res.send({id:3423, message:"Your login is successful"})
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})