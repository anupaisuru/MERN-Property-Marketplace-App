import express from "express";
const router = express.Router();
import {
  signup,
  signin,
  google,
  signOut,
} from "../controllers/authController.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signOut", signOut);

export default router;
