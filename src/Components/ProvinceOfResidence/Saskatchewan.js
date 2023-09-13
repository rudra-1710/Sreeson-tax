import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./Saskatchewan.scss"
import "./Alberta.scss"


const Saskatchewan = (props) => {
    const [isSaskatchewanYes,setisSaskatchewanYes]= useState(false)
    const SaskatchewanHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisSaskatchewanYes(true)
            props.btnHandler(false)
        }else{
            setisSaskatchewanYes(false)
            props.btnHandler(true)
        }
        
    }
    const saskDateHandler=(event)=>{
      if(event.target.value){
        props.btnHandler(true)
      }
    }
  return (
    <Container className='alberta Saskatchewan'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={SaskatchewanHandler}>

            <ul>
            <li><input type="radio" name="saskatchewan" id="SaskatchewanYes" value="Yes" />
              <label for="SaskatchewanYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="saskatchewan" id="SaskatchewanNo" value="No" />
              <label for="SaskatchewanNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isSaskatchewanYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Saskatchewandate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' required on onChange={saskDateHandler} id="Saskatchewandate" name='Saskatchewandate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

    </Container>
  )
}

export default Saskatchewan