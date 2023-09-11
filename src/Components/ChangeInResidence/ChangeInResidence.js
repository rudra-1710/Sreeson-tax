import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import "./Changeinresidence.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import ChangeInForm from './ChangeInForm';

const ChangeInResidence = () => {
    

  const [value,setValue] = useState(false);

  const changeinresidenceHandler = (event) => {
    console.log(event.target.value);
    if(event.target.value === "Yes"){
        setValue(true)
    }else{
        setValue(false)
    }
  }

  return (
    <Container className='changeinresidence'>
      <div className='d-flex justify-content-center mb-1'>
        <div className='changeinresidence-img '></div>
      </div>
      <div>
        <h6 className='text-center my-3'>Did you move to or away from Canada in 2022?</h6>
      </div>
      <form className='statusSinle' onChange={changeinresidenceHandler} >

        <ul>
          <li><input
            type="radio"
            name="changeinresidence"
            id="changeinresidenceYes"
            value="Yes"/>
            <label for="changeinresidenceYes">
              <div className='imgbar single d-flex justify-content-center align-items-center'>
                <p>Yes</p>
              </div>
            </label>
          </li>
          <li><input
            type="radio"
            name="changeinresidence"
            id="changeinresidenceNo"
            value="No"/>
            <label for="changeinresidenceNo">
              <div
                className='imgbar married d-flex justify-content-center align-items-center'>
                <p>No</p>
              </div>
            </label>
          </li>
        </ul>
        <hr className='mt-5'></hr>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
            back</div>
          <div className='btn continue-btn' disabled={!value}>Continue</div>
        </div>
      </form>
    <ChangeInForm />
    </Container>
  )
}

export default ChangeInResidence