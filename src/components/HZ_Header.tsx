import { Typography } from "@mui/material";

type headerProps = {

    heading:string
}

 function HZ_Header(props:headerProps) {

    const { heading } = props

  return (
    <>
      <Typography
        textAlign={"center"}
        variant="h2"
        style={{
          backgroundColor: "#005fa8",
          color: "white",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          margin: "60px",
        }}
        gutterBottom
        margin={"10px"}
        fontWeight="bolder"
      >
        {heading}
      </Typography>
    </>
  );
}


export default HZ_Header