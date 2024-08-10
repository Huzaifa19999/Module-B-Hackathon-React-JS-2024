import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";

type switchProps = {

    label:string,
    onChange:any,
    checked:boolean
}

 function HZ_Switch(props:switchProps) {
  const { label, onChange, checked } = props;
  return (
    <>
      <FormControlLabel
        control={<Switch checked={checked} onChange={onChange} />}
        label={label}
      />
    </>
  );
}

export default HZ_Switch