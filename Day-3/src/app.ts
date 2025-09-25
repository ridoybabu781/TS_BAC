import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import { CourseRotuer } from "./modules/course/course.routes.js";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/courses", CourseRotuer);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export default app;
