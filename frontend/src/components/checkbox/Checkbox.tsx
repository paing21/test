import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Checkbox.css";
export interface Slot {
  time: string;
  reserved: number;
  totalAvailability: number;
  availability: number;
}
export interface Availability {
  date: string;
  month: number;
  slot: Slot[];
}
interface Props {
  availability?: Availability[];
}
const RadioButtonsGroup = ({ availability }: Props) => {
  console.log("outside..", availability?.length);
  const hasSlots = availability && availability.length > 0;
  if (!hasSlots) {
    console.log(availability?.length);
  }
  // console.log("slot is...", slots);
  return (
    <div className="container">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {/* {slots.map((slot) => {
            return <h1>{slot.time}</h1>;
          })} */}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default RadioButtonsGroup;
