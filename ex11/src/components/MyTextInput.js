import React, { useState } from "react";
import { TextField } from "@mui/material";
import { margin } from "@mui/system";
export default function MyTextInput() {
  const [value, setValue] = useState("");

  return (
    <TextField
      label="Name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      margin="normal"
    />
  );
}