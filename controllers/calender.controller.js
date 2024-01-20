import { errorHandler } from "../utils/error.js";
import axios from "axios";

export const getBusyIntervals = async (req, res, next) => {
  try {
    let calendarId = req.body.calendarId;
    let startTime = req.body.startTime;
    let endTime = req.body.endTime;

    if (!calendarId || !startTime || !endTime) {
      throw {
        status_code: 400,
        message: "Missing required fields",
      };
    }

    const url = `https://www.googleapis.com/calendar/v3/freeBusy?key=${process.env.API_KEY}`;

    const response = await axios.post(url, {
      timeMin: startTime,
      timeMax: endTime,
      items: [
        {
          id: calendarId,
        },
      ],
    });
    const busyIntervals = response.data.calendars[calendarId].busy;

    res
      .status(200)
      .json({ data: busyIntervals, message: "Busy Intervals fetched" });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
