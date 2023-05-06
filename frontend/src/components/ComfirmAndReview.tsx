import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import dayjs from "dayjs";

const ComfirmAndReview = () => {
  const contextData = useContext(AppContext);
  const { bookingDate, time, user } = contextData;

  return (
    <div>
      <h1>Comfirm and Review</h1>
      <h3>{dayjs(bookingDate).format("DD-MM-YYYY")}</h3>
      <h3>{time}:00</h3>
      <h3>{user?.name}</h3>
      <h3>{user?.nrcNumber}</h3>
      <h3>{user?.email}</h3>
      <h3>{user?.phoneNumber}</h3>
    </div>
  );
};

export default ComfirmAndReview;
