import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./Nunavut.scss"
import "./Alberta.scss"


const Nunavut = () => {
    const [isNunavutYes,setisNunavutYes]= useState(false)
    const NunavutHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisNunavutYes(true)
        }else{
            setisNunavutYes(false)
        }
        
    }
  return (
    <Container className='alberta Nunavut'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={NunavutHandler}>

            <ul>
            <li><input type="radio" name="test" id="NunavutYes" value="Yes" />
              <label for="NunavutYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="NunavutNo" value="No" />
              <label for="NunavutNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isNunavutYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Nunavutdate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Nunavutdate" name='Nunavutdate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        <hr className='mt-5'></hr>
     <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
      <div className='btn continue-btn'>Continue</div>
      </div> 
    </Container>
  )
}

export default Nunavut