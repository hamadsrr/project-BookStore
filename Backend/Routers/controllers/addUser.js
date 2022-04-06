const {User}= require("../../models/userSchema")
const bcrypt= require("bcrypt")



/* -------------------------------- add user -------------------------------- */

function saveUser(req,res){
    const newUser= new User({
        email:req.body.email,
        name: req.body.name,
        password:bcrypt.hashSync(req.body.password,10),
        isAdmin: req.body.isAdmin,
    })
    try{    
         newUser.save();
        res.status(201).send(newUser)

    }
    catch(err){
        console.log(err);
    }
}


module.exports={saveUser}