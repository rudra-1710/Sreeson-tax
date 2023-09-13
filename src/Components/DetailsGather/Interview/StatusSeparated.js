import React, { useState } from 'react'
import seperated from "../../../assets/images/separated.png"
import "./StatusSeperated.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const StatusSeparated = () => {
const [isSeperatedYes, setIsSeperatedYes] = useState(false)
const [validBtn,setvalidBtn] = useState(false)

    const separatedStatusHandler = (event)=>{
      if (event.target.value==="Yes"){
        setIsSeperatedYes(true)
        setvalidBtn(false)
      }else{
        setvalidBtn(true)
        setIsSeperatedYes(false)
      }
        console.log(event.target.value)
    }
    const paststatusHandler =(event)=>{
      if (event.target.value){
        setvalidBtn(true)
      }
    }
    const seperatedHandler = (event)=>{
      event.preventDefault()
    }

  return (
    <>
   

    <div className='d-flex justify-content-center my-2 mt-5'>
        <img src={seperated} alt="seperated logo" className='singellogo' />
    </div>
    <form onSubmit={seperatedHandler}>
      <div className='text-center'>
        <h5>Did your marital status change in 2022?</h5>
      </div>
      <div className='statusSeperated' onChange={separatedStatusHandler}>

    <ul>
     <li><input type="radio" name="test" id="separatedYes" value="Yes" />
       <label for="separatedYes">
         <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
     </label>
     </li>
    <li><input type="radio" name="test" id="separatedNo" value="No" />
      <label for="separatedNo">
        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
      </label>
    </li>
  </ul>

</div>
{isSeperatedYes && <div>
      <div className='text-center mt-5'>
        <div>
        <label for="statusSeperatedChange" className='my-2'>When did your status change? - dd/mm</label><br />
        <input type='date' id="statusSeperatedChange" required name='event_date' className='my-2 date-input' min={new Date().getFullYear()-1+"-01-01"} max={new Date().getFullYear()-1+"-12-31"}  />
        </div>
        <div>
        <label for="statuspresent6" className='my-2'>What was your marital status before the change?</label><br />
        <select id="statuspresent6" name='previous_status'required onChange={paststatusHandler} className='my-2 date-input' >
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
 <button className='btn continue-btn' disabled={!validBtn} >Continue</button>
 </div> 
 </form>    
 
</>
  )
}

export default StatusSeparated
