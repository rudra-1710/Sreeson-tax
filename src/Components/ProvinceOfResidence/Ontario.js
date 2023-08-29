import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./Ontario.scss"
import "./Alberta.scss"


const Ontario = () => {
    const [isOntarioYes,setisOntarioYes]= useState(false)
    const OntarioHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisOntarioYes(true)
        }else{
            setisOntarioYes(false)
        }
        
    }
  return (
    <Container className='alberta Ontario'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={OntarioHandler}>

            <ul>
            <li><input type="radio" name="test" id="OntarioYes" value="Yes" />
              <label for="OntarioYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="OntarioNo" value="No" />
              <label for="OntarioNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isOntarioYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Ontariodate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Ontariodate" name='Ontariodate' className='my-2 date-input' />
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

export default Ontario