import mongoose from "mongoose";
import app from "./app.js";
const main = async () => {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB Connected");
    const port = process.env.PORT || 9999;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};
main();
//# sourceMappingURL=server.js.map