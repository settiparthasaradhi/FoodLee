import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://parthu0072:cnlbxQK78FDObov2@cluster0.66nvr.mongodb.net/FoodLee", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
