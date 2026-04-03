const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

app.get("/testListing",async(req,res)=>{
    let samplelist = new Listing({
        title:"My New Villa",
        description:"By the beach",
        prize:1200,
        location:"Calanguta,Goa",
        country:"India",
    }
);
    await samplelist.save();
    console.log("sample was saved");
    res.send("successfully testing");

})

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});
