import { Application } from "express";
import express from "express";
import methodOverride from "method-override";
import overridePostMethod from "./override-post-method";

export default function(app: Application) {
  app.use(express.urlencoded({ extended: true }));
  app.use(methodOverride(overridePostMethod));
  app.use(express.json());
  app.use(express.static("public"));
}
