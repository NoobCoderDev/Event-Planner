import express from "express";
import { addAddress } from "../controller/address.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/add",
body("local","local is required").notEmpty(),
body("city","city is required").notEmpty(),
body("state","state is required").notEmpty(),
body("pincode","pincode is required").notEmpty(),addAddress);


export default router;