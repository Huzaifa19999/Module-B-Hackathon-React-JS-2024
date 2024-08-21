import { useState } from 'react'
import HZ_Header from '../../components/HZ_Header'
import HZ_Input from '../../components/HZ_Input'
import HZ_Button from '../../components/HZ_Button'
import { sendData } from '../../config/firebase/firebaseMethod'

function StaffManagment() {

    const [ staffName , setStaffName ] = useState<string>('')
    const [ staffFatherName , setStaffFatherName ] = useState<string>('')
    const [ staffId , setStaffId ] = useState<string>('')
    const [ role , setRole ] = useState<string>('')
    const [ department , setDepartment ] = useState<string>('')
    const [ contact , setContact ] = useState<string>('')
    const [ timing , setTiming ] = useState<string>('')

    const addStaff = (e:any) =>{

        e.preventDefault();

        if (!staffName || !staffFatherName || !staffId || !role || !department || !contact || !timing) {
            alert("Please fill out all fields before submitting.");
            return;
        }
        let obj = {

            Staff_Name:staffName,
            Staff_Father_Name:staffFatherName,
            Staff_ID:staffId,
            Role:role,
            Department:department,
            Contact:contact,
            Timing:timing

        }

        sendData('Staff Data',obj)
        .then((res)=>{
            console.log(res,"Staff Added Sucessfully")
            setStaffName("");
            setStaffFatherName("");
            setContact("");
            setRole("");
            setDepartment("");
            setContact("");
            setTiming("");
        }).catch((err)=>{
            console.log(err)
        })
    }



  return (
    <>
    <HZ_Header heading='Staff Managment'/>
    <center className='border border-3 rounded-3 p-5'>
        <HZ_Input label={'Staff Name'} onChange={(e)=>setStaffName(e.target.value)} value={staffName} className={'w-100 form-control'} placeholder={''} />
        <HZ_Input label={'Staff Father Name'} onChange={(e)=>setStaffFatherName(e.target.value)} value={staffFatherName} className={'w-100'} placeholder={''} />
        <HZ_Input label={'Staff ID'} onChange={(e)=>setStaffId(e.target.value)} value={staffId} className={'w-100'} placeholder={''} />
        <HZ_Input label={'Role'} onChange={(e)=>setRole(e.target.value)} value={role} className={'w-100'} placeholder={''} />
        <HZ_Input label={'Department'} onChange={(e)=>setDepartment(e.target.value)} value={department} className={'w-100'} placeholder={''} />
        <HZ_Input label={'Contact info'} onChange={(e)=>setContact(e.target.value)} value={contact} className={'w-100'} placeholder={''} />
        <HZ_Input label={'Shift Timing'} onChange={(e)=>setTiming(e.target.value)} value={timing} className={'w-100'} placeholder={''} />
            <br />
            <HZ_Button label={'Click to add Staff'} className={'w-100 btn btn-primary'} onClick={addStaff}/>
    </center>
    </>
  )
}

export default StaffManagment