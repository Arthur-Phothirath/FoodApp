const express = require('express')
const router = express.Router()
const signup = require("../controllers/users/NewUsersController")

router.post("/signup", async (req, res, next) =>{
    const {name,password,email} = req.body;

    const signUpUser = new signup({
        name : name,
        password : password,
        email : email,
    })
    try {
        const responseUser = await signUpUsers.save();
        res.rawResponse = responseUser;
    } catch (error) {
        res.rawResponse = error;
    }
    next();
})

module.exports = router;