import { CircularProgress, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { Box } from "@mui/system";
import  { useEffect, useState } from "react";
import { getData } from "../config/firebase/firebaseMethod";

type selectWithFirebaseProps = {
  label: string;
  value: any;
  onChange: (value: any) => void;
  data: Array<any>;
  displayField: string;
  valueField: string;
  disabled?: boolean;
  nodeName?: string;
  ref?: React.Ref<any>;
}

 function HZ_SelectWithFirebase(props:selectWithFirebaseProps) {
  const {
    label,
    value,
    onChange,
    data,
    displayField,
    valueField,
    disabled,
    nodeName,
    ref,
  } = props;

  const [dtSource, setDtSource] = useState(data);

  let getDataFromDB = () => {
    if (nodeName) {
      getData(nodeName)
        .then((res:any) => {
          setDtSource(res);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getDataFromDB();
  }, []);
  return (
    <>
      <FormControl style={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          ref={ref}
          defaultValue=""
          variant="outlined"
          fullWidth
          disabled={disabled}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
          onChange={onChange}
          value={value}
        >
          {dtSource && dtSource.length > 0 ? (
            dtSource.map((x:any, index:any) => (
              <MenuItem key={index} value={x[valueField ? valueField : "id"]}>
                {x[displayField ? displayField : "displayName"]}
              </MenuItem>
            ))
          ) : (
            <Box className="d-flex justify-content-start">
              <CircularProgress color="primary" size={"20px"} />
            </Box>
          )}
        </Select>
      </FormControl>
    </>
  );
}

export default HZ_SelectWithFirebase