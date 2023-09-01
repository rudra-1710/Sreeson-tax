import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap';
import "./Alberta.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';


const Alberta = ({changeDt}) => {

  const [isMove,setIsmove] = useState(false);

  const AlbertaHandler = (event)=>{
    console.log(event.target.value)
    if(event.target.value === "Yes"){
      setIsmove(true)
      changeDt(true)
    }else{
      setIsmove(false)
      changeDt(false)
    }
  }

  return (
    <Container className='alberta'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={AlbertaHandler}>

            <ul>
            <li><input type="radio" name="test" id="AlbertaYes" value="Yes" />
              <label for="AlbertaYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="AlbertaNo" value="No" />
              <label for="AlbertaNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>
       {isMove&& <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Albertadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Albertadate" name='Albertadate' className='my-2 date-input' />
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

export default Alberta