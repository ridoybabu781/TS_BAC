import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const port = process.env.PORT;
const main = async () => {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
        throw new Error("DB_URL environment variable is not defined");
    }
    await mongoose.connect(dbUrl);
    console.log("Database Connected Successfully");
    app.listen(port, () => {
        console.log(`App is running on port : ${port}`);
    });
};
main();
//# sourceMappingURL=server.js.map