const express = require('express');
const path=require('path');
const Subscriber =require('./models/subscribers');
const app = express()


//to use static files we need to give permission of the public folder
app.use(express.static('public'));

//routes
//API to render html file
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
});

//API to get all data of subscribers
app.get("/subscribers", async (req,res)=>{
    try{
        let subscribers=await Subscriber.find();
        res.status(200).send(subscribers);
        
    }catch(error){
        res.status(500);
    }
});

//API to get all subscribers by name and subscribedChannel 
app.get("/subscribers/names", async (req,res)=>{
    try{
        let subscribers=await Subscriber.find({},{name:1, subscribedChannel:1,_id:0})
        res.status(200).send(subscribers);     
    }catch(error){
        res.status(404).send({message:"No Subscriber found related to this name"});
    }
});

//API to get subscribers by id 
app.get("/subscribers/:id", async (req,res)=>{
    try{
        let subscribers=await Subscriber.findById(req.params.id);
        res.status(200).send(subscribers);     
    }catch(error){
        res.status(404).send({message:"No Subscriber found related to this id."});
    }
});

// HANDLES ALL THE UNWANTED REQUESTS.
app.use((req, res) => {
    res.status(404).json({ message: "Error - Route not found" }); // Send a JSON response with a status of 404 (Not Found)
  });
  
  

module.exports=app;























module.exports = app;
