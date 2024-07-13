import express from "express";
import { signIn, signUp , getBdaDataById , getAllBdaData} from "../controller/admin.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
body("firstname","firstname is required").notEmpty(),
body("lastname","lastname is required").notEmpty(),
body("email","email id is required").notEmpty(),
body("email","email id is incorrect").isEmail(),
body("password","password is required").notEmpty(),
body("password","password must have at least 4 letter").isLength({min:4}),signUp);

router.post("/signin",signIn);

router.get("/get-bda-data-by-ID/:id",getBdaDataById);
router.get("/get-All-bda-data",getAllBdaData);

export default router;