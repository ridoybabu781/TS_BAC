import { log } from "console";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const main = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    log("DB Connected");

    const port = 3000;

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
