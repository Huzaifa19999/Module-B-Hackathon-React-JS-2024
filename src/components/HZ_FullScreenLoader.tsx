import { Box, CircularProgress } from "@mui/material";

type screenProps = {
    color:any,
    bgColor:any,
    size:any
}

export default function EZ_FullScreenLoader(props:screenProps,{height = "98vh"}) {


    const {color , bgColor, size} = props

  return (
    <>
      <Box
        style={{
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: bgColor ?? "white",
        }}
      >
        <CircularProgress color={color ?? "primary"} size={size ?? "250px"} />
      </Box>
    </>
  );
}