import { Box, TextField } from "@mui/material";
import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const UserInfo = () => {
  const contextData = useContext(AppContext);
  const { user, updateData } = contextData;
  console.log(contextData);

  return (
    <Box>
      <TextField
        value={user?.name ? user.name : null}
        onChange={(evt) => {
          updateData({
            ...contextData,
            user: { ...contextData.user, name: evt.target.value },
          });
        }}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        value={user?.nrcNumber ? user.nrcNumber : null}
        onChange={(evt) => {
          updateData({
            ...contextData,
            user: { ...contextData.user, nrcNumber: evt.target.value },
          });
        }}
        id="outlined-basic"
        label="nrcNumber"
        variant="outlined"
      />
      <TextField
        value={user?.phoneNumber ? user.phoneNumber : null}
        onChange={(evt) => {
          updateData({
            ...contextData,
            user: { ...contextData.user, phoneNumber: evt.target.value },
          });
        }}
        id="outlined-basic"
        label="Phone"
        variant="outlined"
      />
      <TextField
        value={user?.email ? user.email : null}
        onChange={(evt) => {
          updateData({
            ...contextData,
            user: { ...contextData.user, email: evt.target.value },
          });
        }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
    </Box>
  );
};

export default UserInfo;
