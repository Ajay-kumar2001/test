let users = require("../models/users");
let bcrypt = require("bcrypt");
let jsonwebtoken = require("jsonwebtoken");
let login = async (req, res) => {
  try {
    let { email, password } = req.body;
    // checking whether all field values are entered or not
    if (email && password ) {
      // checking whether the  user is present in dataBase or not
      let validUser = await users.findOne({ email });
      // comparing the current  user  login password with  previously registered password
      let valid = await bcrypt.compare(password, validUser.password);
      if (valid) {
        console.log(validUser.role);
        // token genaration
        let token = jsonwebtoken.sign(
          { email: email, role: validUser.role },
          "code"
        );
        console.log(token);
        // sending jwt token to the clint
        res
          .status(200)
          .json({
            message: "Login succesful",
            athantication: { token: token  ,"role":validUser.role},
          });
        // res.cookie("jsonwebtoken",token,{expires:new Date(Date.now+600000)})
      } else {
        res.status(400).json({ message: "Login faild" });
      }
    } else {
      res.status(400).json({ message: "enter valid email and password" });
    }
  } catch (er) {
    res.status(500).json(er.message);
  }
};
module.exports = login;
