import express from "express";
const router = express.Router();
import {
  updateUser,
  deleteUser,
  getUser,
  getUserListings,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, getUser);
router.get("/listings/:id", verifyToken, getUserListings);

export default router;
