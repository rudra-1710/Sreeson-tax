import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./Quebec.scss"
import "./Alberta.scss"


const Quebec = (props) => {
    const [isQuebecYes,setisQuebecYes]= useState(false)
    const QuebecHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisQuebecYes(true)
            props.btnHandler(false)
        }else{
            setisQuebecYes(false)
            props.btnHandler(true)
        }
        
    }
    const quebecDateHandler=(event)=>{
      if(event.target.value){
        props.btnHandler(true)
      }
    }
  return (
    <Container className='alberta Quebec'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={QuebecHandler}>

            <ul>
            <li><input type="radio" name="quebec" id="QuebecYes" value="Yes" />
              <label for="QuebecYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="quebec" id="QuebecNo" value="No" />
              <label for="QuebecNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isQuebecYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Quebecdate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date'required onChange={quebecDateHandler} id="Quebecdate" name='Quebecdate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

    </Container>
  )
}

export default Quebec