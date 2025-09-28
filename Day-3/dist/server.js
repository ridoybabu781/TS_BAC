import app from "./app";
import mongoose from "mongoose";
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mern-ts";
mongoose
    .connect(MONGO_URI)
    .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error("Mongo connection error:", err);
});
//# sourceMappingURL=server.js.map