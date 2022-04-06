require("dotenv").config();
const {User} = require("../../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getDataForLogIn = (req, res) => {
  User.findOne({ email: req.body.email }, async (err, result) => {
    if (result === null) {
      return res
        .status(400)
        .send("Email and Password you entered is Wrong !!!.");
    }
    try {
      const passwordcheck = await bcrypt.compare(req.body.password, result.password)
      if (passwordcheck) {
        const payload = {
          name: result.name,
          isAdmin: result.isAdmin,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY);
        res.json({ message: "user logged in", token: token });
      } 
      else {
        res.status(400).send( "Email and Password you entered is Wrong !!!.");
      }
    } catch (err) {
      console.log(err); 
    }
  });
};

function getUserDataFromToken(req,res){
  const token = req.user
  res.json({token:token})
}

module.exports = {getDataForLogIn,getUserDataFromToken};

