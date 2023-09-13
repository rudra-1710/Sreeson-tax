import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./Nova.scss"
import "./Alberta.scss"


const Nova = (props) => {
    const [isNovaYes,setisNovaYes]= useState(false)
    const NovaHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisNovaYes(true)
            props.btnHandler(false)
        }else{
            setisNovaYes(false)
            props.btnHandler(true)
        }
        
    }
    const novaDateHandler= (event)=>{
      if (event.target.value){
        props.btnHandler(true)
      }
    }
  return (
    <Container className='alberta nova'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={NovaHandler}>

            <ul>
            <li><input type="radio" name="nova" id="NovaYes" value="Yes" />
              <label for="NovaYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="nova" id="NovaNo" value="No" />
              <label for="NovaNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isNovaYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center' >
            <div>
            <label for="novadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' required onChange={novaDateHandler} id="novadate" name='novadate' className='my-2 date-input' />
            </div>
        </div>
        </div>}
 
    </Container>
  )
}

export default Nova