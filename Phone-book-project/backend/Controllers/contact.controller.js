
require("dotenv").config();



const { ContactModel } = require("../models/contact.model");



// ** Contact adding
async function AddContact(req, res) {
    const payload  = req.body;
    console.log(payload)
    try {
        const contact = new ContactModel(payload);

        await contact.save();

        res.status(201).json({ status: 200, message: "Contact saved success"})
    } catch (error) {
        // console.log('error: ', error);
        res.send({message:"Something went wrong",error})
    }
}


async function GetContact(req,res){
   
    try{
         let contacts=await ContactModel.find();
         res.status(201).send({ status: 200, message: "Fetched Success",contacts})
    }catch(error){
        res.status(400).send({message:error.message})
    }
}





module.exports = {
    AddContact,
    GetContact
}