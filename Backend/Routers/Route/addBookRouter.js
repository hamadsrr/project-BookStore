const express=require("express")
const addBookRouter= express.Router();

const {saveBook,getAllbooks}= require("../controllers/addBook")


addBookRouter.post("/addBook", saveBook)
addBookRouter.get("/showBook",getAllbooks)



module.exports={addBookRouter}
