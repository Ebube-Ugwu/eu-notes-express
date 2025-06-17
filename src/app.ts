import express from "express";
import router from "./routes";
import db from "./utils/db";
import middleware from "./middlewares"


const app = express();

// Middleware
middleware(app);

// Port
app.set("port", process.env.PORT || 3000);


//Views
app.set("view engine", "pug");

// Database
db();

// Routes
router(app);

export default app;
