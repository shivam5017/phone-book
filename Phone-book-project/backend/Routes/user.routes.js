const express = require("express");
const UserRouter = express.Router();
const user_controller = require("../Controllers/user.controller")

UserRouter.get("/:id", user_controller.UserDetail);

UserRouter.post("/register", user_controller.UserRegisteration);

UserRouter.post("/login", user_controller.UserLogin);

UserRouter.post("/logout", user_controller.UserLogout);


module.exports = UserRouter;