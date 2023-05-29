const dbConnect=require('./mongodb')
const express = require('express')
const app = require('express')

app.get('/',async(req,res)=>{
    let result= await dbConnect();
    result=result.find().toArray;
    res.send(result);
})

app.post('/',async(req,res)=>{
    let result=await dbConnect();
    result= await result.insertOne(req.body);
    res.send('Data inserted successfully')
})
app.put('/:name',async(req,res)=>{
    let result= await dbConnect();
    result=await result.updateOne({name:req.params.name},{$set:req.body})
    res.send('Data Updated Successfully')

})
app.delete('/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.deleteOne(req.params.name)
    res.send('Data deleted successfully')
})
app.listen(3000)