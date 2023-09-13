import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./Ontario.scss"
import "./Alberta.scss"


const Ontario = (props) => {
    const [isOntarioYes,setisOntarioYes]= useState(false)
    const OntarioHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisOntarioYes(true)
            props.btnHandler(false)
        }else{
            setisOntarioYes(false)
            props.btnHandler(true)
        }
        
    }
    const ontarioDateHandler=(event)=>{
      if(event.target.value){
        props.btnHandler(true)
      }
    }
  return (
    <Container className='alberta Ontario'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={OntarioHandler}>

            <ul>
            <li><input type="radio" name="ontario" id="OntarioYes" value="Yes" />
              <label for="OntarioYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="ontario" id="OntarioNo" value="No" />
              <label for="OntarioNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isOntarioYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Ontariodate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date'required onChange={ontarioDateHandler} id="Ontariodate" name='Ontariodate' className='my-2 date-input' />
            </div>
        </div>
        </div>}
    </Container>
  )
}

export default Ontario