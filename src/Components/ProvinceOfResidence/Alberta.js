import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import "./Alberta.scss"



const Alberta = (props) => {

  const [isMove,setIsmove] = useState(false);

  const AlbertaHandler = (event)=>{
    console.log(event.target.value)
    if(event.target.value === "Yes"){
      props.btnHandler(false)
      setIsmove(true)
      props.changeDt(true)
    }else{
      setIsmove(false)
      props.btnHandler(true)
      props.changeDt(false)
    }
  }
  const albertaDateHandler = (event)=>{
    if(event.target.value){
      props.btnHandler(true)
    }else{
      props.btnHandler(false)
    }
  }

  return (
    <Container className='alberta'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={AlbertaHandler}>

            <ul>
            <li><input type="radio" name="alberta" id="AlbertaYes" value="Yes" />
              <label for="AlbertaYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="alberta" id="AlbertaNo" value="No" />
              <label for="AlbertaNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>
       {isMove&& <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Albertadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' required onChange={albertaDateHandler} id="Albertadate" name='Albertadate' className='my-2 date-input' />
            </div>
        </div>
        </div>}
    </Container>
  )
}

export default Alberta