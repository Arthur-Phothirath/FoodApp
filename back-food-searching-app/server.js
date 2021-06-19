require("dotenv").config();

const express = require('express');
const cors = require("cors");

const connectDB = require("./middlewares/connectDB");
const serialization = require("./middlewares/serialization");
const newUserController = require("./controllers/users/NewUsersController");
const login = require("./controllers/users/Login");
// const routesUrls = require("./routes/routes");

connectDB();

const app = express();
app.use(express.json());

app.use(cors());

app.post("/register", newUserController, serialization);

app.post("/login", login, serialization);


const PORT = process.env.PORT || 4000;

app.listen(PORT, function() {
    console.log(`Server launch on port: ${process.env.URL}:${PORT}`);
})