import  { useState } from 'react'
import HZ_Input from '../../components/HZ_Input'
import HZ_Header from '../../components/HZ_Header'
import HZ_Button from '../../components/HZ_Button'

function Payment() {

    const [ name, setName ] = useState<any>('')
    const [ city, setCity ] = useState<any>('')
    const [ country, setCountry ] = useState<any>('')
    const [ fees, setFees ] = useState<any>('')

    const payment:any = [
        {
            value:0,
            method:"Cash"
        },
        {
            value:0,
            method:"Credit Card "
        },
        {
            value:0,
            method:"Bank Transfer"
        }

    ]

  return (
    <>
    <HZ_Header heading='Payment Managment' />
    <form className='p-5 border border-3 rounded-3'>
        <HZ_Input label={'Enter Name'} onChange={(e)=>setName(e.target.value)} value={name} className={'w-100'} placeholder={''}/>
        <HZ_Input label={'Enter City Name'} onChange={(e)=>setCity(e.target.value)} value={city} className={'w-100'} placeholder={''}/>
        <HZ_Input label={'Enter Country Name'} onChange={(e)=>setCountry(e.target.value)} value={country} className={'w-100'} placeholder={''}/>
            <br />
         <select onChange={(e:any)=>setFees(e.target.value)} value={fees} className='form-control' >
            <option value="">Choose Payment Method</option>
            {payment.map((e:any)=>(
                <option value={e.value}>{e.method}</option>
            ))}
            </select>  
            <br></br>
            <HZ_Button label={'Click To Pay'} className={'w-100 btn btn-primary'} onClick={(e:any)=>{e}}/>
    </form>
    </>
  )
}

export default Payment