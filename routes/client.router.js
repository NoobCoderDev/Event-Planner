import express from "express";
import { signIn, signUp } from "../controller/client.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
body("firstname","firstname is required").notEmpty(),
body("lastname","lastname is required").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),
body("phone","phone is required").notEmpty(),signUp);

router.post("/signin",signIn);

export default router;