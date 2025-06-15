const mongoose = require("mongoose");

export default function() {
  mongoose.connect("mongodb://localhost/eu-notes")
    .then(() => console.log("Connected to Mongo..."))
    .catch((err: any) => console.error("Mongo Connection  failed"));
}
