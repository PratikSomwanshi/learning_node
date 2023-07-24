const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

class createAirplane {
    async createAirplane(req, res) {
        try {
            const airplane = await AirplaneService.createAirplane(req.body);

            SuccessResponse.message = "Successfully created new airplane";
            SuccessResponse.data = airplane;

            return res.status(StatusCodes.CREATED).json(SuccessResponse);
        } catch (error) {
            // throw new Error(error)
            ErrorResponse.message =
                "Something went wrong while creating airplane";
            ErrorResponse.error = error;

            return res.status(error.statusCode).json(ErrorResponse);
        }
    }

    async getAirplane(req, res) {
        try {
            const airplane = await AirplaneService.getAirplane();

            SuccessResponse.message = "Successfully fetched new airplane";
            SuccessResponse.data = airplane;

            return res.status(StatusCodes.CREATED).json(SuccessResponse);
        } catch (error) {
            // throw new Error(error)
            ErrorResponse.message =
                "Something went wrong while fetching airplane";
            ErrorResponse.error = error;
            console.log(error.message);
            return res.status(StatusCodes.CREATED).json(ErrorResponse);
        }
    }
}

module.exports = createAirplane;
