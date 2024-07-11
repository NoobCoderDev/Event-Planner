import express from "express";
import { addEvent } from "../controller/events.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post('/addevent',
body("eventname","eventname is required").notEmpty(),
body("startDate","startDate is required").notEmpty(),
body("endDate","endDate is required").notEmpty(),
body("budget","budget is required").notEmpty(),
body("place","place is required").notEmpty(),
addEvent);


export default router;