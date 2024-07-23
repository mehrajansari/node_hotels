const express = require('express')
const app = express()
const db=require('./db')
const User = require('./models/User'); 
const bodyParser=require('body-parser')

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/chicken',(req,res)=>{
    res.send("hello chicken ccvvv")
})
app.get('/list',(req,res)=>{
    const item={
        name:"Mehraj",
        Age:"26",
        Address:"Bareilly"
    }
    res.send(item)
})

app.post('/user',async(req,res)=>{
    
    try {
        const data=req.body;
        const newUser=new User(data)
        const response=await newUser.save()
        console.log('data saved!!');
        res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'})
        
    }
})

app.get('/user',async(req,res)=>{
    try {
        const data=await User.find()
        res.status(200).json(data) 

    } catch (error) {
       console.log(error);
        res.status(500).json({error:'data not found'}) 
    }
    

})

const menuRoute=require('./routes/menuRoute')
app.use('/menu',menuRoute)


app.listen(3000)