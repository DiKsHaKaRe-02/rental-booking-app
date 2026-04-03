const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:
             "https://unsplash.com/photos/a-green-bird-perched-on-a-blooming-cherry-blossom-branch-OkO9BDH-IEc",
        set:(v)=>
        v === "" 
             ? "https://unsplash.com/photos/a-green-bird-perched-on-a-blooming-cherry-blossom-branch-OkO9BDH-IEc"
             :v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;
