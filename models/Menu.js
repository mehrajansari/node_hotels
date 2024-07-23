const mongoose=require('mongoose')
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:['Sweet','Spicy','Sour','Citrus'],
        required:true,
    }
})
const Menu=mongoose.model('Menu',menuSchema)
module.exports=Menu;