import { Request, Response } from "express";
import _ from "lodash";
import { Note } from "../models/Note";


type Notification = {
  category: "success" | "failure" | "warning",
  message: string
}

export default class NotesController {
  private static notifications: Notification[] = [];

  private static addNotification(
    notification: Notification) {
    NotesController.notifications = [];
    NotesController.notifications.push(notification);
  }
  // 

  static async index(req: Request, res: Response) {
    const notes = await Note.find();

    res.render("notes/index", {
      heading: "All notes",
      notes: notes,
      notifications: NotesController.notifications
    });
  }

  static async store(req: Request, res: Response) {
    const note = new Note({
      title: req.body.title,
      body: req.body.body
    });
    await note.save();
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
    NotesController.addNotification({
      category: "success",
      message: "Note deleted successfully"
    });
    res.redirect("/notes");
  }
}
