import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import Nl from "../../assets/images/newfoundland.png"
import "./Manitoba.scss"
import "./NewfoundLand.scss"

const NewfoundLand = () => {
    const [isNewfoundLandYes,setisNewfoundLandYes]= useState(false);
    const [isNewFoundLand, setisNewFoundLand] = useState(false)
    const NewfoundLandHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisNewfoundLandYes(true)
            setisNewFoundLand(true)
        }else{
            setisNewfoundLandYes(false)
            setisNewFoundLand(true)
        }
        
    }
  return (
    <Container className='Manotoba NewfoundLand'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={NewfoundLandHandler}>

            <ul>
            <li><input type="radio" name="test" id="NewfoundLandYes" value="Yes" />
              <label for="NewfoundLandYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="NewfoundLandNo" value="No" />
              <label for="NewfoundLandNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isNewfoundLandYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Albertadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Albertadate" name='Albertadate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        
      {isNewFoundLand && 
            <div className='py-4'>
                <div className='d-flex justify-content-center mb-1'>
            <div className='country-logo py-2'>
                <img src={Nl} />
            </div>
        </div>
                <div><h6 className='text-center'>Did you live within Nisga'a Lands or Tsawwassen Lands on December 31,2022?</h6></div>
                 <form className='statusSinle'>
                    <ul>
                    <li><input type="radio" name="test" id="isNewfoundLandYes" value="Yes" />
                    <label for="isNewfoundLandYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="test" id="isNewfoundLandNo" value="No" />
                    <label for="isNewfoundLandNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </form>
                    <div>
                        
                    </div>
            </div>
        }
        <hr className='mt-5'></hr>
     <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
      <div className='btn continue-btn'>Continue</div>
      </div> 
    </Container>
  )
}

export default NewfoundLand