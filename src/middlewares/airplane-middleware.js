const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

function validateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        ErrorResponse.message = "something went wrong while creating airplane";
        ErrorResponse.error = new AppError(
            ["Model Number not found in upcomming request"],
            StatusCodes.BAD_REQUEST
        );

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (typeof req.body.capacity === "string") {
        ErrorResponse.message = "something went wrong while creating airplane";
        ErrorResponse.error = {
            explaination: "capacity should be of type Integer",
        };

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateRequest,
};
