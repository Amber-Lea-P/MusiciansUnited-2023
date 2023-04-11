import express from "express";
//import { verifyToken } from "../middleware/jwt.js";
import { getOrders, intent, confirm } from "../controllers/order.controller.js";
const router = express.Router();

//router.post("/:gigId", verifyToken, createOrder );
router.get("/", getOrders );
router.post("/create-payment-intent/:id",  intent); //verifyToken removed only in test deployment environtment
router.put("/", confirm); //verifyToken removed only in test deployment environtment
export default router;
