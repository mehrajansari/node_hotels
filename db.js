const mongoose=require('mongoose')

const mongoURL='mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL).then(()=>{
  console.log('connected to mongodb');
  
}).catch((err)=>{
console.log('connection error',err);

});
const db=mongoose.connection;

module.exports=db;

