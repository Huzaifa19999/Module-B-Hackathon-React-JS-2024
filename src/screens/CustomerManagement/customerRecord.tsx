// import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import HZ_DataGrid from "../../components/HZ_DataGrid"
import { Button } from "@mui/material"
import { deleteData, getData } from "../../config/firebase/firebaseMethod"
import { Delete } from "@mui/icons-material"
import HZ_Header from "../../components/HZ_Header"

function CustomerRecord() {

  const [ data, setData ] = useState<any>([])
  const [dataLoader, setDataLoader] = useState<boolean>(true)

  useEffect(()=>{

    setDataLoader(true);

    getData('Customer Data',)
    .then((res:any) => {
      console.log(Object.values(res))
      setData(Object.values(res))
      setDataLoader(false)
    }).catch((err:any) => {
      console.log(err)
      setDataLoader(false)
    })
  },[])

  const deleteStudent = (id:string) => {
        deleteData('Signup',id)
        .then(()=>{
          setData(data.filter((student: any) => student.id !== id));
          console.log("Deleted Successfully")
        }).catch((err)=>{
          console.log(err,"Error Data not found")
        })

  }



  return (
    <>
   
<HZ_Header heading="Customer Registered"/>
<HZ_DataGrid  className="table bg-primary text-white aligns-items-center table-bordered table-striped text-center"
                loading={dataLoader}
                gridCols={[
                    {
                        key: 'Customer_ID',
                        label: 'ID'
                    },
                  {
                      key: 'Customer_Name',
                      label: 'Customer Name'
                  },
                 
                  {
                      key: 'Customer_Father_Name',
                      label: 'Father Name'
                  },
                  {
                      key: 'Contact',
                      label: 'contact'
                  },
                  {
                      key: 'services',
                      label: 'Services'
                  },
                  {
                      key: 'Room',
                      label: 'room'
                  },
                    {
                        key: '',
                        label: 'Delete',
                        displayField: (row: any) => <Button startIcon={<Delete/>} onClick={() => {
                            deleteStudent(row.id)
                        }} variant="contained" color="error" sx={{fontWeight:'bold'}}>Delete</Button>
                    },
                 
                  
                ]} datasource={data} />

    </>
  )
}

export default CustomerRecord