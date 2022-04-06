const express=require("express")
const addUserRouter= express.Router();

const {saveUser}= require("../controllers/addUser");


addUserRouter.post("/SignUp", saveUser)



module.exports={addUserRouter}