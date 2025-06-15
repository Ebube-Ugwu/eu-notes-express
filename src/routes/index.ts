import { Application } from "express";
import homeRouter from "./home";
import notesRouter from "./notes";
import authRouter from "./auth";

export default function(app: Application) {
  app.use("/", homeRouter);
  app.use("/notes", notesRouter);
  app.use("/auth", authRouter);
}
