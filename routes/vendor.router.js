import express from "express";
import { signIn, signUp } from "../controller/vendors.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
body("firstname","firstname is required").notEmpty(),
body("lastname","lastname is required").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),
body("phone","phone is required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password must have at least 4 letter").isLength({min:4}),
body("category","category is required").notEmpty(),
signUp);

router.post("/signin",signIn);

export default router;