import mongoose from "mongoose";
export class MongooseConnection {
  async connect() {
    try {
      await mongoose.connect("mongodb://mongo/urlShorten");
      console.log("Database connected");
    } catch (error) {
      console.log(error);
    }
  }
}
