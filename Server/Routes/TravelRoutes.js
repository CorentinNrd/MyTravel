const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const TravelModel = require('../Model/ModelTravel')

app.use(bodyParser.urlencoded({ extended: true }))

router.post("/", async (req, res, next) => {

    let destination = req.body.travel.destination;
    let price = req.body.travel.price;
    let informations = req.body.travel.informations

    if (destination && price && informations) {
            let data = req.body.travel
            TravelModel.create(data)
    } else {
        let stringError = { error_info: "Vous devez obligatoirement rentrer les informations nécessaire!" }
        res.send(stringError)
    }

})

router.post("/search", async (req, res, next) => {
    let destination = req.body.travel.destination;
    let price = req.body.travel.price;

    if (destination) {
        let travel = await TravelModel.find({
            $or: [
                { destination: destination },
            ]
        })
            .catch((error) => {
                console.log(error);
            });
        res.send(travel)
    } else if (price) {
        let travel = await TravelModel.find({
            $or: [
                { price: price + "€" },
            ]
        })
            .catch((error) => {
                console.log(error);
            });
        res.send(travel)
    }
})

router.get("/get", async (req, res, next) => {
    let travel = await TravelModel.find()
        .catch((error) => {
            console.log(error);
        });
    res.send(travel)
})

module.exports = router;