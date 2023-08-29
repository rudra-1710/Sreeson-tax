import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./Nova.scss"
import "./Alberta.scss"


const Nova = () => {
    const [isNovaYes,setisNovaYes]= useState(false)
    const NovaHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisNovaYes(true)
        }else{
            setisNovaYes(false)
        }
        
    }
  return (
    <Container className='alberta nova'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={NovaHandler}>

            <ul>
            <li><input type="radio" name="test" id="NovaYes" value="Yes" />
              <label for="NovaYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="NovaNo" value="No" />
              <label for="NovaNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isNovaYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="novadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="novadate" name='novadate' className='my-2 date-input' />
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

export default Nova