import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [3, "First Name must contain at least 3 characters"],
        maxlength: [20, "First Name cannot exceed 20 characters"]
    },

    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        minlength: [3, "Last Name must contain at least 3 characters"],
        maxlength: [20, "Last Name cannot exceed 20 characters"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: validator.isEmail,
            message: "Provide a valid Email"
        }
    },

    phone: {
        type: String,
        required: [true, "Phone number is required"],
        validate: {
            validator: (v) => /^[0-9]{10}$/.test(v),
            message: "Phone number must contain exactly 10 digits"
        }
    },

    time: {
        type: String,
        required: [true, "Time is required"]
    },

    date: {
        type: Date, // Changed to Date type for better handling
        required: [true, "Date is required"]
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
