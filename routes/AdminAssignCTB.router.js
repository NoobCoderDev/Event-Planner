import express from "express";
import { addWorkToBda } from "../controller/AdminAssignCTB.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/to-bda",addWorkToBda);

export default router;