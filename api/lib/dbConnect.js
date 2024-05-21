import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/JourneyFy", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    });
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
