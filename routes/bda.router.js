import express from "express";
import { signIn, signUp } from "../controller/bda.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
body("firstname","first name is required").notEmpty(),
body("lastname","last name is required").notEmpty(),
body("phone","phone number is required").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),
body("password","password is required").notEmpty(),
body("password","password must have at least 4 letter").isLength({min:4}),signUp);

router.post("/signin",signIn);

export default router;