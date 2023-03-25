


const express = require("express");
const ContactRouter = express.Router();
const contact_controller = require("../Controllers/contact.controller")



ContactRouter.post("/add", contact_controller.AddContact);
ContactRouter.get("/get",contact_controller.GetContact)

module.exports = ContactRouter;
