import "./App.css";

import * as React from "react";
import DataPicker from "./components/DataPicker";
// import { Button } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import RadioButtonsGroup, {
  Availability,
} from "./components/checkbox/Checkbox";
// import Main from "./components/render/Main";
// import A from "./components/render/A";
// import B from "./components/render/B";
// import C from "./components/render/C";

export default function App() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const [availability, setAvailability] = React.useState<Availability[]>();
  console.log("hello", dayjs().format("DD-MM-YYYY"));
  React.useEffect(() => {
    serverFromData(value);
  }, [value]);
  const serverFromData = async (newValue: Dayjs | null) => {
    // const chooseData = newValue?.format("DD-MM-YYYY");
    // console.log(value?.month());
    const url = `http://localhost:5000/availability?month=${value?.month()}`;
    const response = await fetch(url);
    const data = await response.json();
    setAvailability(data.availability);
  };
  return (
    <div className="con">
      <DataPicker
        value={value}
        handleDateChange={setValue}
        availbility={availability}
      />
      <RadioButtonsGroup availability={availability} />
    </div>
  );
}
