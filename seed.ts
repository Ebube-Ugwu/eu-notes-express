import mongoose from "mongoose";
import { Note } from "./src/models/Note";


const data = [
  {
    title: "a note about apples",
    body: "apples lorem ipsum",
    images: [""],
  },

  {
    title: "first note",
    body: "first note"
  },
  {
    title: "second note",
    body: "second note"
  },
  {
    title: "third note",
    body: "third note"
  },
];

async function seed() {
  await mongoose.connect("mongodb://localhost/eu-notes");
  await Note.deleteMany({});

  for (let note of data) {
    await new Note({
      title: note.title,
      body: note.body,
      images: note.images
    }).save();
  }
  mongoose.disconnect();
  console.info("Database seeded");
}

seed();
