// import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import HZ_DataGrid from "../../components/HZ_DataGrid"
import { Button } from "@mui/material"
import { deleteData, getData } from "../../config/firebase/firebaseMethod"
import { Delete } from "@mui/icons-material"
import HZ_Header from "../../components/HZ_Header"

function Users() {

  const [ data, setData ] = useState<any>([])
  const [dataLoader, setDataLoader] = useState<boolean>(true)

  useEffect(()=>{

    setDataLoader(true);

    getData('Signup',)
    .then((res:any) => {
      console.log(Object.values(res))
      setData(Object.values(res))
      setDataLoader(false)
    }).catch((err:any) => {
      console.log(err)
      setDataLoader(false)
    })
  },[])

  const deleteUser = (id:string) => {
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
   
<HZ_Header heading="Users Registered"/>
<HZ_DataGrid  className="table bg-primary text-white aligns-items-center table-bordered table-striped text-center"
                loading={dataLoader}
                gridCols={[
                  {
                      key: 'Name',
                      label: 'Name'
                  },
                 
                  {
                      key: 'Email',
                      label: 'Email'
                  },
                    {
                        key: '',
                        label: 'Delete',
                        displayField: (row: any) => <Button startIcon={<Delete/>} onClick={() => {
                            deleteUser(row.id)
                        }} variant="contained" color="error" sx={{fontWeight:'bold'}}>Delete</Button>
                    },
                 
                  
                ]} datasource={data} />

    </>
  )
}

export default Users