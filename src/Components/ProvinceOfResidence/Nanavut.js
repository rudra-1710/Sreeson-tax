import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./Nunavut.scss"
import "./Alberta.scss"


const Nunavut = (props) => {
    const [isNunavutYes,setisNunavutYes]= useState(false)
    const NunavutHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisNunavutYes(true)
            props.btnHandler(false)
        }else{
          props.btnHandler(true)
            setisNunavutYes(false)
        }
        
    }
    const nunavuDateHandler =(event)=>{
      if(event.target.value){
        props.btnHandler(true)
      }
    }
  return (
    <Container className='alberta Nunavut'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={NunavutHandler}>

            <ul>
            <li><input type="radio" name="nunavu" id="NunavutYes" value="Yes" />
              <label for="NunavutYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="nunavu" id="NunavutNo" value="No" />
              <label for="NunavutNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isNunavutYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Nunavutdate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Nunavutdate" required onChange={nunavuDateHandler} name='Nunavutdate' className='my-2 date-input' />
            </div>
        </div>
        </div>}
    </Container>
  )
}

export default Nunavut