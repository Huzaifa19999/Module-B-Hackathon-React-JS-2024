type btnProps = {

    label:string,
    className:string,
    onClick:(e:any)=>void,
    type?:any
}


function HZ_Button(props:btnProps) {

    const { label, className, onClick, type, } = props

  return (
    <><button className={className}
              onClick={onClick}
              type={type}
              >
                {label}
                </button>
                </>
  )
}

export default HZ_Button