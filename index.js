import express from "express";
import dotenv from "dotenv";
import calendarRouter from "./routes/calender.route.js";
dotenv.config();

const APP_PREFIX = process.env.APP_PREFIX;

const app = express();
app.use(express.json());

app.listen(process.env.PORT || 8000, () => {
  console.log(`Listening on port ${process.env.PORT || 8000}`);
});

app.use(`${APP_PREFIX}/calendar`, calendarRouter);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});
