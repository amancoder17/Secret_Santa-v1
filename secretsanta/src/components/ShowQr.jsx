import React, { useEffect, useState } from 'react'
import {useSearchParams } from 'react-router-dom';
import './css/showqr.css'

const ShowQr = () => {

    const [searchid]=useSearchParams();
    // console.warn(searchid.get('Data'))
    const id= searchid.get('Data');
    const [qr,setQr]=useState("")
    useEffect(()=>{
        setQr(`http://api.qrserver.com/v1/create-qr-code/?data=https://${process.env.REACT_APP_ROUTE_KEY}/santaform/${id} &size=200x200`,[id])      // api to generate qr
    })


    
  return (
    <div className='ohk'>
        <p>
            <img src={qr} alt="img" />
        </p>
    </div>
  )
}

export default ShowQr