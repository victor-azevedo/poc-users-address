import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import usersRoutes from "./routes/usersRoute";
import addressRoutes from "./routes/addressRoute";
import coursesRoutes from "./routes/coursesRoute";

dotenv.config();
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/health", (_req: Request, res: Response) => res.send("OK!"));
app.use("/users", usersRoutes);
app.use("/address", addressRoutes);
app.use("/courses", coursesRoutes);

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => {
  console.log(`[Listening ON] Port: ${PORT}`);
});

export default app;
