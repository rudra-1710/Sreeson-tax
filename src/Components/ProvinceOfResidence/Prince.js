import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./Prince.scss"
import "./Alberta.scss"


const Prince = () => {
    const [isPrinceYes,setisPrinceYes]= useState(false)
    const PrinceHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisPrinceYes(true)
        }else{
            setisPrinceYes(false)
        }
        
    }
  return (
    <Container className='alberta Prince'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={PrinceHandler}>

            <ul>
            <li><input type="radio" name="test" id="PrinceYes" value="Yes" />
              <label for="PrinceYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="PrinceNo" value="No" />
              <label for="PrinceNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isPrinceYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Princedate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Princedate" name='Princedate' className='my-2 date-input' />
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

export default Prince