import express from "express";
import NotesController from "../controllers/NotesController";


// route --> /notes
const router = express.Router();

router.get("/", NotesController.index);
router.post("/", NotesController.store);

router.get("/:id", NotesController.show);
router.put("/:id", NotesController.update);
router.delete("/:id", NotesController.destroy);

export default router;
