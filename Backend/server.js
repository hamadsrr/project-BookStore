const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")

const {addUserRouter}=require("./Routers/Route/addUserRouter")
const {addBookRouter}=require("./Routers/Route/addBookRouter")
const {logInRouter}=require("./Routers/Route/loginRouter")

mongoose.connect("mongodb+srv://hamad:1234@cluster0.9zuvp.mongodb.net/bookStore", (err,res)=>{
    console.log("connect to dataBase");
})
app.use(express.json());
app.use(cors());


app.use("/users", addUserRouter)

app.use("/", addBookRouter)

app.use('/login',logInRouter)









const PORT = process.env.PORT || 5000;  

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});