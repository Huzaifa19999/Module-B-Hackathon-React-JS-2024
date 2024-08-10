import Alert from "@mui/material/Alert";

type alertProps = {
    alertMessage: string;
    severity: any;
    width?: string;
  }

 function HZ_Alert(props:alertProps) {
  const { alertMessage, severity} = props;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "auto",
          margin: "20px 40px",
        }}
      >
        <Alert variant="filled" sx={{width:"auto"}} severity={severity}>
          {alertMessage}
        </Alert>
      </div>
    </>
  );
}

export default HZ_Alert