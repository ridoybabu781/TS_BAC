import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const main = async () => {
  await mongoose.connect(process.env.DB_URL as string);
  console.log("DB Connected");

  const port = process.env.PORT || 7071;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

main();
