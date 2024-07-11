import express from "express";
import { signIn, signUp } from "../controller/customers.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
body("firstname","firstname is required").notEmpty(),
body("lastname","lastname is required").notEmpty(),
body("phone","phone is required").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),
body("city","City is required").notEmpty(),
body("state","state is required").notEmpty(),
body("description","description is required").notEmpty(),
signUp);

router.post("/signin",signIn);

export default router;