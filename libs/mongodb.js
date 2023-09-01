import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://saurabhdagwar:yfyph9j4b0sGvOy7@cluster0.cr9wlfz.mongodb.net/crud_db"
    );
    //process.env.MONGODB_URI

    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
