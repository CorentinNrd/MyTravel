const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const UserModel = require('../Model/ModelUser')

app.use(bodyParser.urlencoded({ extended: true }))

router.post("/", async (req, res, next) => {

    let email = req.body.user.email;
    let password = req.body.user.password;

    if (email && password) {
        let user = await UserModel.findOne({
            $or: [
                { email: email },
            ]
        })
            .catch((error) => {
                console.log(error);
            });
        if (user == null) {
            let data = req.body.user
            data.password = await bcrypt.hash(password, 10);
            UserModel.create(data)
        } else {
            let string = { error: "Il y'a déjà un compte associé à cette adresse!" };
            res.send(string)
        }
    } else {
        let stringError = { error_info: "Vous devez obligatoirement rentrer un mail et un mot de passe!" }
        res.send(stringError)
    }

})

module.exports = router;