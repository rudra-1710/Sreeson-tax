import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./Manitoba.scss"

const Manitoba = (props) => {
    const [isManitobaYes,setisManitobaYes]= useState(false)
    const ManitobaHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisManitobaYes(true)
            props.btnHandler(true)
        }else{
            setisManitobaYes(false)
            props.btnHandler(true)
        }
        
    }
  return (
    <Container className='Manotoba'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={ManitobaHandler}>

            <ul>
            <li><input type="radio" name="manitoba" id="ManitobaYes" value="Yes" />
              <label for="ManitobaYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="manitoba" id="ManitobaNo" value="No" />
              <label for="ManitobaNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isManitobaYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Albertadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' required id="Albertadate" name='Albertadate' className='my-2 date-input' />
            </div>
        </div>
        </div>}
    </Container>
  )
}

export default Manitoba