import express from "express";
import {
  create,
  deleteById,
  getAll,
  getById,
  getByUserId,
  update,
} from "../controllers/todoController.js";

const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getById);
router.get("/user/todos", getByUserId);
router.put("/:id", update);
router.delete("/:id", deleteById);

export default router;
