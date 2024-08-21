import { useEffect, useState } from "react"
import { deleteData, getData } from "../../config/firebase/firebaseMethod"
import HZ_Header from "../../components/HZ_Header"
import HZ_DataGrid from "../../components/HZ_DataGrid"
import { Button } from "@mui/material"
import { Delete } from "@mui/icons-material"

function Roomdetails() {

    const [ roomData, setRoomData ] = useState<any>([])
    const [ dataloader, setDataLoader ] = useState<boolean>(true)

    useEffect(()=>{

        setDataLoader(true);
    
        getData('Room Data',)
        .then((res:any) => {
          console.log(Object.values(res))
          setRoomData(Object.values(res))
          setDataLoader(false)
        }).catch((err:any) => {
          console.log(err)
          setDataLoader(false)
        })
      },[])

      const deleteRoom = (id:string) => {
        deleteData('Room Data',id)
        .then(()=>{
          console.log("Deleted Successfully")
        }).catch((err)=>{
          console.log(err,"Error Data not found")
        })

  }

  return (
    <>
    <HZ_Header heading="Room Details" />
    <HZ_DataGrid  className="table bg-primary text-white aligns-items-center table-bordered table-striped text-center"
                loading={dataloader}
                gridCols={[
                  {
                      key: 'Room_ID',
                      label: 'Room ID'
                  },
                 
                  {
                      key: 'Room_No',
                      label: 'Room Number'
                  },
                  {
                      key: 'Room_Type',
                      label: 'Room Type'
                  },
                  {
                      key: 'Room_Description',
                      label: 'Room Description'
                  },
                    {
                        key: '',
                        label: 'Delete',
                        displayField: (row: any) => <Button startIcon={<Delete/>} onClick={() => {
                            deleteRoom(row.id)
                        }} variant="contained" color="error" sx={{fontWeight:'bold'}}>Delete</Button>
                    },
                 
                  
                ]} datasource={roomData} />
    </>
  )
}

export default Roomdetails