import { Request, Response } from "express";
// import { Note } from "../models/Note";

export default class NotesController {

  static async index(req: Request, res: Response) {
    // const notes = await Note.find();
    res.render("notes/index", {
      heading: "All notes",
      notes: [
        { title: "first note", body: "first note" },
        { title: "second note", body: "second note" },
        { title: "third note", body: "third note" },
      ]
    });
  }

  static async show(req: Request, res: Response) {
    // const notes = await Note.find();
    res.render("notes/show", { heading: "note" });
  }

  static create(req: Request, res: Response) {
    res.render("notes/create", { heading: "new note" });
  }

  static update(req: Request, res: Response) {
    res.render("notes/edit", { heading: "edit" });
  }

  static destroy(req: Request, res: Response) {
    res.send("Destroy Note...")
  }
}
