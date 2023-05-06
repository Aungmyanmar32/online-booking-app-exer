import { createContext, useState } from "react";
import { DefaultValue } from "../types/Types";

const defaultValue: DefaultValue = {
  bookingDate: null,
  time: null,
  user: null,
  updateData: () => {},
  fetchData: () => {},
  slotData: [],
};

export const AppContext = createContext(defaultValue);
const AppProvider = (props: any) => {
  const [bookedDate, setBookingData] = useState(defaultValue);
  const fetchData = async (month: any) => {
    const response = await fetch(
      `http://localhost:5004/dateNslote?month=${month}`
    );
    const resData = await response.json();
    setBookingData({ ...bookedDate, slotData: resData });
  };

  return (
    <AppContext.Provider
      value={{ ...bookedDate, updateData: setBookingData, fetchData }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
