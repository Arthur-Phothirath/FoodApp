const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        maxLenght: 150
    },
    password : {
        type: String,
        required: true,
        maxLenght: 150
    },
    email : {
        type: String,
        maxLenght: 150,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },

})

module.exports = mongoose.model("users", UserSchema)