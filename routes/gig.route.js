import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs
} from "../controllers/gig.controller.js";
//import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", createGig);
router.delete("/:id", deleteGig); //verifyTokens have been removed for deployment purposes. Further autorization needs to be added in the future
router.get("/single/:id", getGig);
router.get("/", getGigs);

export default router;
