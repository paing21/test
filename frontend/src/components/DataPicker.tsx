import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { Availability } from "./checkbox/Checkbox";
import { splitFormatIntoSections } from "@mui/x-date-pickers/internals/hooks/useField";

interface Props {
  value: Dayjs | null;
  handleDateChange: (newValue: Dayjs | null) => void;
  availbility?: Availability[];
}

const DataPicker = ({ value, handleDateChange, availbility }: Props) => {
  console.log("av", availbility);

  const disableDate = (value: Dayjs) => {
    const currentMonth = availbility?.find(
      (item) => item.month === value.month()
    );
    console.log("cur", currentMonth);

    // const hasSlot = currentMonth?.find(
    //   (item) => item.date === value.format("DD-MM-YYYY")
    // );
    // console.log("sl", hasSlot);
    return false;
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        shouldDisableDate={disableDate}
        onChange={(value) => handleDateChange(value)}
        defaultValue={dayjs()}
        format="DD-MM-YYYY"
      />
    </LocalizationProvider>
  );
};
export default DataPicker;
