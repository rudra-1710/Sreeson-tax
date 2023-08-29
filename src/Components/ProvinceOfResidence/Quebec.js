import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./Quebec.scss"
import "./Alberta.scss"


const Quebec = () => {
    const [isQuebecYes,setisQuebecYes]= useState(false)
    const QuebecHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisQuebecYes(true)
        }else{
            setisQuebecYes(false)
        }
        
    }
  return (
    <Container className='alberta Quebec'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={QuebecHandler}>

            <ul>
            <li><input type="radio" name="test" id="QuebecYes" value="Yes" />
              <label for="QuebecYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="QuebecNo" value="No" />
              <label for="QuebecNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isQuebecYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Quebecdate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Quebecdate" name='Quebecdate' className='my-2 date-input' />
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

export default Quebec