// import { useState } from "react"
import HZ_Input from "../../components/HZ_Input"
import HZ_Button from "../../components/HZ_Button"
import { useState } from "react"
import { sendData } from "../../config/firebase/firebaseMethod"
import HZ_Header from "../../components/HZ_Header"

function AddRoom() {

  const [roomID, setRoomID] = useState<string>('')
  const [roomNo, setRoomNo] = useState<string>('')
  const [roomType, setRoomType] = useState<string>('')
  const [roomDes, setRoomDes] = useState<string>('')

const options = [
  {value:1,option:"Single Room"},
  {value:2,option:"Double Room"},
  {value:3,option:"Suite Room"},
  {value:4,option:"Deluxe Room"},
  {value:5,option:"King Room"},
  {value:6,option:"Queen Room"},
  {value:7,option:"Party Hall"},
  {value:8,option:"Garden"},
  {value:9,option:"Roof"},
]

const sumbitData = (e: any) => {
  e.preventDefault();

  if (!roomID || !roomDes || !roomNo || !roomType) {
    alert("Please fill out all fields before submitting.");
    return;
  }


  let obj = {
    Room_ID: roomID,
    Room_Description: roomDes,
    Room_No: roomNo,
    Room_Type: roomType,
  };

  sendData('Room Data', obj)
    .then((res) => {
      console.log("Room Add Successfully", res);
      alert("Room Add Successfully");

    }).catch((err) => {
      console.log("Adding Room Failed", err);
    });
}


    // const  [availabilty ,setAvailability ] = useState<any>()
    // const [ checked , setChecked] = useState<boolean>(false)

  return (
    <>
    <HZ_Header heading="Add Room"/>
    <form>
        <div>
        <label className="fw-bold">Room ID</label>
        <input value={roomID} onChange={(e)=>setRoomID(e.target.value)} type="text" className=" form-control" />
        </div>
        <br />
        <div>
        <label className="fw-bold">Enter Room Number</label>
        <input value={roomNo} onChange={(e)=>setRoomNo(e.target.value)} type="text" className=" form-control" />
        </div>
        <br />
        <div>
        <label className="fw-bold">Enter Room Type</label>
        <select value={roomType} onChange={(e)=>setRoomType(e.target.value)} className="form-control">
        {options.map((e:any,i:any)=>
        <option key={i} value={e.value}>{e.option}</option>
      )}
      </select>
        </div>
        <br />
        <div>
        <label className="fw-bold">Room Description</label>
        <HZ_Input label={""} onChange={(e)=>setRoomDes(e.target.value)} value={roomDes} className={"w-100"} placeholder={""}/>
        </div>
    </form>
    <HZ_Button label={"Add Room"} className={"mt-5 fw-bold btn btn-primary"} onClick={sumbitData}/>
    <HZ_Button label={"Clear"} className={"mt-5 fw-bold ms-4 btn btn-danger"} onClick={()=>{}}/>
    </>
  )
}

export default AddRoom