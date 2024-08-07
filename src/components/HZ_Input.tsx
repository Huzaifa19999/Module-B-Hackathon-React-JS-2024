import { TextField } from "@mui/material"

type InpProps = {

    label:string,
    onChange:(e:any) => void,
    value:any,
    type?:any,
    // disabled?:true,
    required?:true,
    // fullWidth?:boolean,
    margin?:string,
    className:string,
    placeholder?:string,

}



function HZ_Input(props:InpProps) {

    const {
            // placeholder
            onChange,
            value,
            type,
            required,
            className,
            label
           } = props 

  return (
    <div>
           {/* <label className="form-label">{label}</label> */}
            <TextField
                   type={type}
                   className={className}
                  //  placeholder={placeholder}
                   label={label}
                  //  sx={{margin: {margin}}}
                   onChange={onChange}
                   value={value}
                  //  disabled={disabled}
                   required={required}
                  //  style={{width : fullWidth ? '100%' : 'auto' }}
                   variant="standard"
                   />
    </div>
  )
}

export default HZ_Input