import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    // Check if all required fields are present
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill out the entire form for reservation", 400));
    }

    try {
        // Pass data as an object to `Reservation.create`
        await Reservation.create({ firstName, lastName, email, phone, date, time });

        // Proper syntax for `.json()`
        res.status(200).json({
            success: true,
            message: "Reservation Successful",
        });
    } catch (error) {
        // Handle validation errors specifically
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }

        // Pass any other errors to the next error handler
        return next(error);
    }
};
