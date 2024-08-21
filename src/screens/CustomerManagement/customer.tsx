import { useState } from 'react'
import HZ_Header from '../../components/HZ_Header'
import HZ_Input from '../../components/HZ_Input'
import HZ_Button from '../../components/HZ_Button'
import { sendData } from '../../config/firebase/firebaseMethod'

function Customer() {

    const [ customerName , setCustomerName ] = useState<string>('')
    const [ customerFatherName , setCustomerFatherName ] = useState<string>('')
    const [ CustomerId , setCustomerId ] = useState<string>('')
    const [ contact , setContact ] = useState<string>('')
    const [ room , setRoom ] = useState<string>('')
    const [ services , setServices ] = useState<string>('')


    const addStaff = (e:any) =>{

            e.preventDefault();

            if (!customerName || !customerFatherName || !CustomerId || !room || !services ||!contact) {
            alert("Please fill out all fields before submitting.");
            return;
        }
        let obj = {

            Customer_Name:customerName,
            Customer_Father_Name:customerFatherName,
            Customer_ID:CustomerId,
            Contact:contact,
            Room:room,
            services:services
        }

        sendData('Customer Data',obj)
        .then((res)=>{
            console.log(res,"Customer Added Sucessfully")
            setCustomerName("");
            setCustomerFatherName("");
            setCustomerId("");            
            setContact("");
            setRoom("");
            setServices("")
        }).catch((err)=>{
            console.log(err)
        })
    }



  return (
    <>
    <HZ_Header heading='Customer Managment'/>
    <center className='border p-5 rounded-3 border-3'>
        <HZ_Input label={'Customer Name'} onChange={(e)=>setCustomerName(e.target.value)} value={customerName} className={'w-100 form-control'} placeholder={''} />
        <HZ_Input label={' Father Name'} onChange={(e)=>setCustomerFatherName(e.target.value)} value={customerFatherName} className={'w-100'} placeholder={''} />
        <HZ_Input label={'Customer ID'} onChange={(e)=>setCustomerId(e.target.value)} value={CustomerId} className={'w-100'} placeholder={''} />
        <HZ_Input label={'Room'} onChange={(e)=>setRoom(e.target.value)} value={room} className={'w-100'} placeholder={''} />
        <HZ_Input label={'Services'} onChange={(e)=>setServices(e.target.value)} value={services} className={'w-100'} placeholder={''} />
        <HZ_Input label={'Contact info'} onChange={(e)=>setContact(e.target.value)} value={contact} className={'w-100'} placeholder={''} />
            <br />
            <HZ_Button label={'Click to add Customer'} className={'w-100 btn btn-primary'} onClick={addStaff}/>
    </center>
    </>
  )
}

export default Customer