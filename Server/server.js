const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const apiPort = 8000
const path = require('path');
const session = require("express-session");
require('dotenv').config({path: '.env'})
require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(session({
    secret: "bbq chips",
    resave: true,
    saveUninitialized: false,
}))

const register = require('./Routes/RegisterRoutes')
const login = require('./Routes/LoginRoutes')

app.use("/register", register);
app.use("/login", login);

app.get('/',  (req, res) => {
    console.log('ici')
})

app.listen(apiPort, () => console.log(`Server running on port http://localhost:${apiPort}`))