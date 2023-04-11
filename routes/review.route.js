import express from "express";
//import { verifyToken } from "../middleware/jwt.js";
import{
    createReview,
    getReviews,
    deleteReview
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", createReview ) //verifyToken removed temporarily, will be readded in the future
router.get("/:gigId", getReviews )
router.delete("/:id", deleteReview )

export default router;
