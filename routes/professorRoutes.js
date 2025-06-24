import express from "express";

import {
  getProfessores,
  createProfessor,
  updateProfessor,
  deleteProfessor
} from "../controllers/professorController.js";

const router = express.Router();

router.get("/", getProfessores);
router.post("/", createProfessor);
router.put("/:id", updateProfessor);
router.delete("/:id", deleteProfessor);

export default router;
