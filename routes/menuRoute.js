const express=require('express');
const Menu=require('./../models/Menu')

const router=express.Router()

router.post('/',async(req,res)=>{
    try {
        const data=req.body;
        const newMenu=new Menu(data)
        const response=await newMenu.save()
         console.log('data saved');
         res.status(200).json(response)
         

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal error'})
        
    }
    

})

router.get('/:taste',async(req,res)=>{

    try {
        const taste=req.params.taste;
        if (taste=='Sweet'|| taste=='Spicy'|| taste=='Sour' || taste=='Citrus') {
            const data=await Menu.find({taste:taste})
            console.log('data fetched');
            
           res.status(200).json(data)
        }
    } catch (error) {
        res.status(404).json({error:'Invalid taste'})
    }
})

router.put('/:id',async(req,res)=>{
    try{
    const menuId=req.params.id
    const updatedMenu=req.body;
    const response=await Menu.findByIdAndUpdate(menuId,updatedMenu,{
        new:true,
        runValidators:true,
})
if (!response) {
    console.log('Data not found');
    
    res.status(404).json({error:'data not found'})
}
console.log('data updated');
res.status(200).json(response)

    }catch(error){
        res.status(500).json({error:'Invalid data'})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const menuId=req.params.id;
        const response=await Menu.findByIdAndDelete(menuId)
        if (!menuId) {
            console.log('data not found');
            res.status(404).json({error:'data not found'})
        }
        res.status(200).json({message:'data deleted successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'})
    }
    
})

module.exports=router;