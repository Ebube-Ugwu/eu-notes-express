import express from "express";
import router from "./routes";
import db from "./utils/db";
import middleware from "./middlewares"


const app = express();

app.set("port", process.env.PORT || 3000);

// Middleware
middleware(app);

//Views
app.set("view engine", "pug");

// Database
db();

// Routes
router(app);

export default app;
