import { Request, Response } from "express";
import _ from "lodash";
// import { Note } from "../models/Note";


type Note = {
  id: number,
  title: string,
  body: string
}
const notes: Note[] = [
  { id: 1, title: "first note", body: "first note" },
  { id: 2, title: "second note", body: "second note" },
  { id: 3, title: "third note", body: "third note" },
];

export default class NotesController {

  static async index(req: Request, res: Response) {
    // const notes = await Note.find();
    res.render("notes/index", {
      heading: "All notes",
      notes: notes
    });
  }

  static async show(req: Request, res: Response) {
    // const notes = await Note.find();
    const id: number = parseInt(req.params.id);
    const note: Note = _.filter(notes, note => note.id === id)[0];
    res.render("notes/show", { note: note });
  }



  static update(req: Request, res: Response) {
    res.send("Update Note...")
  }

  static destroy(req: Request, res: Response) {
    res.send("Destroy Note...")
  }
}
