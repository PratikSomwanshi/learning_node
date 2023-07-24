const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repository");
const AppError = require("../utils/error/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        return await airplaneRepository.create(data);
    } catch (error) {
        // console.log(error);
        if ((error.name = "SequelizeValidationError")) {
            let seqError = [];

            error.errors.forEach((error) => seqError.push(error.message));
            console.log(seqError);

            throw new AppError(seqError, StatusCodes.BAD_REQUEST);
        }

        throw new AppError(
            "can not create a airplane object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirplane() {
    try {
        return await airplaneRepository.getAll();
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    createAirplane,
    getAirplane,
};
