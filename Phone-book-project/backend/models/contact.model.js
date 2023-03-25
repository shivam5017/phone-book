const mongoose=require("mongoose")

require("dotenv").config()


const contactSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   phone:{
    type:Number,
    required:true,
   }
     

})


const ContactModel=mongoose.model('contact',contactSchema)

module.exports={ContactModel}