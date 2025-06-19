import { Request, Response } from "express";
import _ from "lodash";
import { Note } from "../models/Note";


export default class NotesController {

  static async index(req: Request, res: Response) {
    const notes = await Note.find();
    res.render("notes/index", {
      heading: "All notes",
      notes: notes
    });
  }

  static async store(req: Request, res: Response) {
    let note = new Note({
      title: req.body.title,
      body: req.body.body
    });
    note = await note.save();
    res.redirect("/notes");
  }

  static async show(req: Request, res: Response) {
    const note = await Note.findById(req.params.id);
    res.render("notes/show", { note: note });
  }

  static async update(req: Request, res: Response) {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        body: req.body.body,
      },
      { new: true }
    );

    return res.redirect("/notes/" + note?._id);
  }

  static async destroy(req: Request, res: Response) {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect("/notes");
  }
}
