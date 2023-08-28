import React from 'react';
import "./HomePage.css"
import { Button } from 'react-bootstrap';
import Data from "../../assets/Data/Data"

const ReturnData = () => {
  const person_data = Data.map((data)=>
    <div key={data.id} className='d-block d-sm-flex justify-content-between align-items-center py-3 refund-data'>
    <div className='p-2'>
     <h6>{data.user_name} (Refund: <span>${data.refund_value}</span>)</h6>
     <p>Status: In Progress | Sreeson Tax Premier</p>
     <p>Last Updated: Augest 16, 2023</p>
     <p className='rename-copy'>Rename | Copy</p>
     </div>
     <div>
     <div className='d-flex p-2'>
            <Button className='return-button'>Continue</Button>{' '}
     </div>
     </div>
 </div>
)
    
  return (
    <>
        <div >
        
           {person_data}
            
        </div>
        <div className='d-block d-sm-flex justify-content-between align-items-center py-1'>
            <div className='p-2'>
                <h6>Start a new 2022 Return</h6>
            </div>
            <div className='d-flex  p-2 py-4'>
                <Button className='return-butn'>Continue</Button>{' '}
            </div>
        </div>
       
    </>
  )
}

export default ReturnData
