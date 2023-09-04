import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./Saskatchewan.scss"
import "./Alberta.scss"


const Saskatchewan = () => {
    const [isSaskatchewanYes,setisSaskatchewanYes]= useState(false)
    const SaskatchewanHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisSaskatchewanYes(true)
        }else{
            setisSaskatchewanYes(false)
        }
        
    }
  return (
    <Container className='alberta Saskatchewan'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={SaskatchewanHandler}>

            <ul>
            <li><input type="radio" name="test" id="SaskatchewanYes" value="Yes" />
              <label for="SaskatchewanYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="SaskatchewanNo" value="No" />
              <label for="SaskatchewanNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isSaskatchewanYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Saskatchewandate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Saskatchewandate" name='Saskatchewandate' className='my-2 date-input' />
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

export default Saskatchewan