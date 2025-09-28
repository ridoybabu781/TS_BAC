"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mern-ts";
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => {
    console.log("MongoDB connected");
    app_1.default.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error("Mongo connection error:", err);
});
//# sourceMappingURL=server.js.map