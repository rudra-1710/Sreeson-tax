import React, { useState } from 'react'
import divorced from "../../../assets/images/divorce.png"
import "./StatusDivorced.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

const StatusDivorced = () => {
const [isDivorceYes, setisDivorceYes] = useState(false)
const [isSeparated, setIsSeparated] = useState(false)
const [validBtn,setvalidBtn] = useState(false)

const divorcedStatusHandler = (event)=>{
  if (event.target.value === "Yes"){
    setisDivorceYes(true)
    setvalidBtn(false)
  } 
   else {
    setisDivorceYes(false)
    setvalidBtn(true)
  }
    console.log(event.target.value)
}
const singeSeperatedDivorceHandler =(event)=>{
  if (event.target.value === "Separated") {
    setIsSeparated(true)
    setvalidBtn(false)
  }
  else{
    setvalidBtn(true)
    setIsSeparated(false)
  }
  console.log(event.target.value)
}
const paststatusHandler =(event)=>{
  if (event.target.value){
    setvalidBtn(true)
  }
}

const divorcedHandler = (event)=>{
  event.preventDefault()
  console.log(event)
}
  return (
    <Container className='py-5'>

    <div className='d-flex justify-content-center my-2 mt-5'>
        <img src={divorced} alt="divorced logo" className='singellogo' />
    </div>
    <form onSubmit={divorcedHandler}>
      <div className='text-center'>
        <h5>Did your marital status change in 2022?</h5>
      </div>
      <div className='statusDivorced' onChange={divorcedStatusHandler}>

    <ul>
     <li><input type="radio" name="test" id="divorcedYes" value="Yes" />
       <label for="divorcedYes">
         <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
     </label>
     </li>
    <li><input type="radio" name="test" id="divorcedNo" value="No" />
      <label for="divorcedNo">
        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
      </label>
    </li>
  </ul>

</div>
{isDivorceYes && <div>
      <div className='text-center mt-5'>
        <div>
        <label for="statusSingleChange" className='my-2'>When did your status change? - dd/mm</label><br />
        <input type='date' required id="statusSingleChange" name='event_date'  min={new Date().getFullYear()-1+"-01-01"} max={new Date().getFullYear()-1+"-12-31"}  className='my-2 date-input' />
        </div>
        <div>
        <label for="statuspresent1" className='my-2'>What was your marital status before the change?</label><br />
        <select id="statuspresent1" name='previous_status' required className='my-2 date-input' onChange={singeSeperatedDivorceHandler}>
          <option value="" hidden>select</option>
          <option value="Married">Married</option>
          <option value="Living common-law">Living common-law</option>
          <option value="Divorced">Divorced</option>
          <option value="Separated">Separated</option>
          <option value="Single">Single</option>
          <option value="Widowed">Widowed</option>
        </select>
        </div>
      </div>
    </div> }
   {isSeparated && <div className='statusSinle my-4' onChange={paststatusHandler} >
      <h5 className='text-center'>Were you married or living common-law in 2022?</h5>

<ul>
 <li><input type="radio" name="divorcedSeperated" id="divorceSeperatedlYes" value="Yes" />
   <label for="divorceSeperatedlYes">
     <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
 </label>
 </li>
<li><input type="radio" name="divorcedSeperated" id="divorceSeperatedlNo" value="No" />
  <label for="divorceSeperatedlNo">
    <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
  </label>
</li>
</ul>

</div>}
<hr></hr>
     <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
      <button className='btn continue-btn' disabled={!validBtn} >Continue</button>
      </div>
      </form> 

        
</Container>
  )
}

export default StatusDivorced
