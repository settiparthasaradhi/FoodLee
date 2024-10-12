import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://parthu0072:cnlbxQK78FDObov2@cluster0.66nvr.mongodb.net/FoodLee")
    .then(() => console.log("db connected"))
    .catch((err) => console.error("Connection failed", err));
};
