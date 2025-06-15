import mongoose from "mongoose";


export type NoteDocument = mongoose.Document & {
  title: string;
  body: string;
  images: string[];
  userID: mongoose.Schema.Types.ObjectId;
}

const NoteSchema = new mongoose.Schema<NoteDocument>(
  {
    title: { type: String, unique: true },
    body: String,
    images: Array,
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Note = mongoose.model
  <NoteDocument>("Note", NoteSchema);
