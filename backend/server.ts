import cors from "cors";
import express from "express";
import { availability } from "./data";
const app = express();
const port = 5004;
app.use(cors());
app.use(express.json());

app.get("/dateNslote", (req, res) => {
  const selectedMonth = req.query.month as string;
  const month = parseInt(selectedMonth, 10);

  const foundedData = availability.filter((item) => item.month === month);

  res.send(foundedData);
});

app.post("/createBooking", (req, res) => {
  const bookingDate = req.body.bookingDate;
  const time = req.body.time;
  console.log(bookingDate, time);

  const date = availability.find((item) => item.date === bookingDate);
  const top = date?.slots.find((slot) => slot.time === parseInt(time, 10));

  if (top) {
    top.availableSlot = top.availableSlot - 1;
    top.bookedSlot = top.bookedSlot + 1;
  }
  console.log(top);

  res.send(top);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
