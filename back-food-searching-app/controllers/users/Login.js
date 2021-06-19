const UserModel = require("../users/NewUser");

const login = async (req, res, next) =>{
    const {password,email} = req.body;
    const user =  await UserModel.findOne({email:email});
    console.log(user);
    res.rawResponse = false;
    if( user != null && user.password === password){
        res.rawResponse = user;
    }
    next();
}

module.exports = login;