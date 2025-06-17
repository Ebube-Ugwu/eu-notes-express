import express from "express";
import NotesController from "../controllers/NotesController";


// route --> /notes
const router = express.Router();

router.get("/", NotesController.index);

router.get("/:id", NotesController.show);
router.put("/:id", NotesController.update);
router.delete("/:id", NotesController.destroy);

export default router;
