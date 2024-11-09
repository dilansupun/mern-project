import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "RESTURANTAPP",
        })
        .then(() => {
            console.log("Connected to DB");
        })
        .catch(() => {
            console.log("Error Occured $(err)");
        });
};