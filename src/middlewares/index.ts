import { Application } from "express";
import express from "express";
import methodOverride from "method-override";

export default function(app: Application) {
  app.use(express.json());
  app.use(express.static("public"));
  app.use(methodOverride("_method"));
}
