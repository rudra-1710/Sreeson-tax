import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./Manitoba.scss"
import "./Brunswick.scss"

const Brunswick = (props) => {
    const [isBrunswickYes,setisBrunswickYes]= useState(false)
    const BrunswickHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisBrunswickYes(true)
            props.btnHandler(true)
        }else{
            setisBrunswickYes(false)
            props.btnHandler(true)
        }
        
    }
  return (
    <Container className='Manotoba BrunSwick'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={BrunswickHandler}>

            <ul>
            <li><input type="radio" name="brunswick" id="BrunswickYes" value="Yes" />
              <label for="BrunswickYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="brunswick" id="BrunswickNo" value="No" />
              <label for="BrunswickNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isBrunswickYes && <div className='my-4'>
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

export default Brunswick