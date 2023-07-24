const express = require("express");

const { AirplaneController } = require("../../controller");
const { AirplaneMiddleware } = require("../../middlewares");

const AirplaneAction = new AirplaneController();

const router = express.Router();

router.post(
    "/airplane",
    AirplaneMiddleware.validateRequest,
    AirplaneAction.createAirplane
);
router.get("/airplane", AirplaneAction.getAirplane);

module.exports = router;
