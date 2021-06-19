const UserModel = require("../users/NewUser");

const newUserController = async (req, res, next) => {
    console.log(req.body)
    const {name,password,email} = req.body;
    const users = new UserModel({
        name : name,
        password : password,
        email : email,
    });
    try {
        const responseUser = await users.save();
        res.rawResponse = true;
    } catch (error) {
        res.rawResponse = false;
    }
    next();
}

module.exports = newUserController;