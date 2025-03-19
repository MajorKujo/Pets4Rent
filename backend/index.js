// import all installed files
var express=require("express")
var cors=require("cors")

//import connection file
require("./connection.js")

//import model files
var userModel = require('./models/userModel');
var petModel = require('./models/petModel');

//initialize
var app=express()
var PORT=3000
//Middleware
app.use(express.json())
app.use(cors())
//API

//assign port

//signup page

app.post('/reg', async(req,res) => {
    try {
        await userModel(req.body).save()
        res.json({ message: "User created successfully" })
    } catch (error) {
        res.json({error})
    }
})

//login page

// app.post('/login',async(req,res)=>{
//     try {
//         var user=await userModel.findOne({uUsername:req.body.uUsername})
//         if(!user){
//             res.json({message:'Invalid username'})
//         }
//         if(user.Password===req.body.Password){
//             return res.json({message:'Login successful',user})
//         }
//         else{
//             return res.json({message:'Incorrect password'})
//         }
//         }
//      catch (error) {
//         console.log(error)
//         return res.json({message:"Login failed"})
//     }
// })
//to get details for profile
app.get('/profile/:id',async(req,res)=>{
    try {
        var user=await userModel.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.json({message:"error",error})
    }
})
//to get all users details
app.get('/profile',async(req,res)=>{
    try {
        var user=await userModel.find()
        res.json(user)
    } catch (error) {
        res.json({message:"error",error})
    }
})

//add pet profile:admin

app.post('/add',async(req,res)=>{
    try {
        var pet = req.body
        await petModel(pet).save()
        res.json({message:"Pet added successfully",pet})
    } catch (error) {
        console.log(error)
    }
})


//delete pet profile:admin

app.delete('/del/:id',async(req,res)=>{
    try {
        await petModel.findByIdAndDelete(req.params.id)
        res.send("Data deleted");
    } catch (error) {
        console.log(error)
    }
})

//to get all pet details

app.get('/petprofile',async(req,res)=>{
    try {
        var pets=await petModel.find()
        res.json(pets)
    } catch (error) {
        res.json({message:"error",error})
    }
})

app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})