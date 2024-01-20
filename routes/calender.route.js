import express from "express";
const router = express.Router();
import * as CalendarController from "../controllers/calender.controller.js";

router.post("/busyIntervals", CalendarController.getBusyIntervals);

export default router;
