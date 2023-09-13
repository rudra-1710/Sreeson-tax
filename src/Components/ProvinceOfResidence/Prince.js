import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./Prince.scss"
import "./Alberta.scss"


const Prince = (props) => {
    const [isPrinceYes,setisPrinceYes]= useState(false)
    const PrinceHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisPrinceYes(true)
            props.btnHandler(false)
        }else{
            setisPrinceYes(false)
            props.btnHandler(true)
            
        }
        
    }
    const princeDateHandler=(event)=>{
      if(event.target.value){
        props.btnHandler(true)
      }
    }
  return (
    <Container className='alberta Prince'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={PrinceHandler}>

            <ul>
            <li><input type="radio" name="prince" id="PrinceYes" value="Yes" />
              <label for="PrinceYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="prince" id="PrinceNo" value="No" />
              <label for="PrinceNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isPrinceYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Princedate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' onChange={princeDateHandler} id="Princedate" name='Princedate' className='my-2 date-input' />
            </div>
        </div>
        </div>}
    </Container>
  )
}

export default Prince