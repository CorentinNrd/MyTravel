const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const TravelModel = require('../Model/ModelTravel')
const SaveModel = require('../Model/ModelSave')

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
    let destinationUpperCase = destination.charAt(0).toUpperCase() + destination.slice(1)

    if (destinationUpperCase) {
        let travel = await TravelModel.find({
            $or: [
                { destination: destinationUpperCase },
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

router.post("/getTravel", async (req, res, next) => {
    let id_travel = req.body.id_travel;
    const query = { _id: id_travel };
    let travel = await TravelModel.find(query)
        .catch((error) => {
            console.log(error);
        });
    res.send(travel)
})

router.post("/save", async (req, res, next) => {
    let id_travel = req.body.id_travel;
    let id_user = req.body.id_user;

    if (id_travel && id_user) {
        let travel = await SaveModel.findOne({
            $or: [
                { id_travel: id_travel },
            ]
        })
            .catch((error) => {
                console.log(error);
            });
        if (!travel) {
            let data = req.body
            SaveModel.create(data)
        } else {
            let string = { error: "Ce voyage est déjà enregistré"}
            res.send(string);
        }
    }
})

router.post("/getSave", async (req, res, next) => {
    let id_user = req.body.id_user;
    const query = { id_user: id_user };
    let travel = await SaveModel.find(query)
        .catch((error) => {
            console.log(error);
        });
    res.send(travel)
})

module.exports = router;