import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ConfirmAndReivew from "./ComfirmAndReview";
import DateAndTime from "./DateAndTime";
import UserInfo from "./UserInfo";
import { AppContext } from "../context/AppContext";
import dayjs from "dayjs";

const steps = ["Date and time", "User info", "Review and confirm"];

const PassportStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const contextData = useContext(AppContext);
  const { bookingDate, time } = contextData;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const createBooking = async () => {
    const response = await fetch("http://localhost:5004/createBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookingDate: dayjs(bookingDate).format("DD-MM-YYYY"),
        time: time,
      }),
    });
    const dataFromServer = await response.json();
    console.log(dataFromServer);
  };

  return (
    <Box sx={{ maxWidth: "50%", margin: "0 auto", mt: 5 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        <Typography sx={{ mt: 2, mb: 1 }}>
          {activeStep === 0 && <DateAndTime />}
          {activeStep === 1 && <UserInfo />}
          {activeStep === 2 && <ConfirmAndReivew />}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          {activeStep < 2 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button onClick={createBooking}>Comfirm</Button>
          )}
        </Box>
      </>
    </Box>
  );
};

export default PassportStepper;
