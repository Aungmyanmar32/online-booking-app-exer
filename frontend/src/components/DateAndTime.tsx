import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import React, { useContext } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AppContext } from "../context/AppContext";
import dayjs, { Dayjs } from "dayjs";

const DateAndTime = () => {
  const contextData = useContext(AppContext);
  const { slotData, time, updateData, fetchData } = contextData;

  console.log(contextData);

  const dateToDisable = (date: Dayjs) => {
    const canBookDate =
      // availability.length > 0 &&
      slotData.find((item) => item.date === date.format("DD-MM-YYYY"));

    if (!canBookDate) {
      return true;
    }

    const isAvailable = canBookDate.slots.some(
      (slot) => slot.availableSlot > 0
    );

    return isAvailable ? false : true;
  };

  const selectedDate = slotData.find(
    (item) => item.date === dayjs(contextData.bookingDate).format("DD-MM-YYYY")
  );
  const selectedSlote = selectedDate?.slots.filter(
    (slote) => slote.availableSlot !== 0
  );

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={
            contextData.bookingDate ? dayjs(contextData.bookingDate) : null
          }
          disablePast
          shouldDisableDate={dateToDisable}
          onMonthChange={(date: Dayjs) => fetchData(date.month())}
          onOpen={() => {
            fetchData(dayjs().month());
          }}
          onChange={(value) => {
            const dayjsObj = value as Dayjs;
            updateData({ ...contextData, bookingDate: dayjsObj.toDate() });
          }}
        />
      </LocalizationProvider>
      <Box>
        <FormControl
          sx={{
            mx: "0 auto",
            mt: 2,
          }}
        >
          <FormLabel id="demo-radio-buttons-group-label">Select Time</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {selectedSlote &&
              selectedSlote.map((slot) => (
                <FormControlLabel
                  value={slot.time}
                  control={
                    <Radio
                      onChange={(e) =>
                        updateData({ ...contextData, time: e.target.value })
                      }
                    />
                  }
                  label={slot.time}
                  key={slot.time}
                />
              ))}
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default DateAndTime;
