import React, { useState } from 'react'
import married from "../../../assets/images/married.png";
import "./StatusMarried.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

const StatusMarried = () => {

  const [isaMarriedYes, setIsMarriedYes]= useState(false)
  const [validBtn,setvalidBtn]  = useState(false)
    const marriedStatusHandler=(event)=>{
      if (event.target.value==="Yes"){
        setIsMarriedYes(true)
        setvalidBtn(false)
      }else{
        setvalidBtn(true)
        setIsMarriedYes(false)
      }
        console.log(event.target.value)
    }
    const paststatusHandler = (event)=>{
      if(event.target.value){
        setvalidBtn(true)
      }else{
        setvalidBtn(false)
      }
    }
    const marriedHandler = (event)=>{
      event.preventDefault()
      console.log(event)
    }
  return (
    <Container className='py-5'>

    <div className='d-flex justify-content-center my-2 mt-5'>
        <img src={married} alt="married logo" className='singellogo' />
    </div>
    <form onSubmit={marriedHandler}>
      <div className='text-center'>
        <h5>Did your marital status change in 2022?</h5>
      </div>
      <div className='statusMarried' onChange={marriedStatusHandler}>

    <ul>
     <li><input type="radio" name="test" id="marriedYes" value="Yes" required />
       <label for="marriedYes">
         <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
     </label>
     </li>
    <li><input type="radio" name="test" id="marriedNo" value="No" />
      <label for="marriedNo">
        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
      </label>
    </li>
  </ul>

</div>
{isaMarriedYes && <div>
      <div className='text-center mt-5'>
        <div>
        <label for="statusSingleChange" className='my-2'>When did your status change? - dd/mm</label><br />
        <input type='date' id="statusSingleChange" required min={new Date().getFullYear()-1+"-01-01"} max={new Date().getFullYear()-1+"-12-31"} name='event_date' className='my-2 date-input' />
        </div>{console.log(new Date().getFullYear()-1)}
        <div>
        <label for="statuspresent2" className='my-2'>What was your marital status before the change?</label><br />
        <select id="statuspresent2" name='previous_status' required className='my-2 date-input' onChange={paststatusHandler}>
          <option value="" hidden>--select--</option>
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

    <hr></hr>
<div className='d-flex justify-content-between'>
 <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
 <button className='btn continue-btn' disabled={!validBtn}>Continue</button>
 </div> 
 </form> 
 

     
</Container>
  )
}

export default StatusMarried
