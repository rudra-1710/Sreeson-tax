import React, { useState } from 'react'
import widowed from "../../../assets/images/widow.png"
import "./StatusWidowed.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const StatusWidowed = () => {
    const [isWidowYes, setIsWidowYes] = useState(false)
    const [validBtn,setvalidBtn] = useState(false)
    const widowedStatusHandler = (event)=>{
      if (event.target.value==="Yes"){
        setIsWidowYes(true)
        setvalidBtn(false)
      }else{
        setvalidBtn(true)
        setIsWidowYes(false)
      }
        console.log(event.target.value)
    }
    const paststatusHandler =(event)=>{
      if (event.target.value){
        setvalidBtn(true)
      }
    }
    const widowedHandler = (event)=>{
      event.preventDefault()
      console.log(event)
    }
  return (
    <>

    <div className='d-flex justify-content-center my-2 mt-5'>
        <img src={widowed} alt="widowed logo" className='singellogo' />
    </div>
    <form onSubmit={widowedHandler}>
      <div className='text-center'>
        <h5>Did your marital status change in 2022?</h5>
      </div>
      <div className='statusWidowed' onChange={widowedStatusHandler}>

    <ul>
     <li><input type="radio" name="test" id="widowedYes" value="Yes" />
       <label for="widowedYes">
         <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
     </label>
     </li>
    <li><input type="radio" name="test" id="widowedNo" value="No" />
      <label for="widowedNo">
        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
      </label>
    </li>
  </ul>

</div>
{isWidowYes && <div>
      <div className='text-center mt-5'>
        <div>
        <label for="statusWidowChange" className='my-2'>When did your status change? - dd/mm</label><br />
        <input type='date' required id="statusWidowChange" name='event_date' className='my-2 date-input' min={new Date().getFullYear()-1+"-01-01"} max={new Date().getFullYear()-1+"-12-31"}  />
        </div>
        <div>
        <label for="statuspresent4" className='my-2'>What was your marital status before the change?</label><br />
        <select id="statuspresent4" name='previous_status' onChange={paststatusHandler} className='my-2 date-input' >
          <option value="" hidden>--select--</option>
          <option value="Married">Married</option>
          <option value="Living-common-law">Living common-law</option>
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
   
</>
  )
}

export default StatusWidowed
