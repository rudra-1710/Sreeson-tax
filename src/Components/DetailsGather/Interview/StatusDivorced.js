import React, { useState } from 'react'
import divorced from "../../../assets/images/divorce.png"
import "./StatusDivorced.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const StatusDivorced = () => {
const [isDivorceYes, setisDivorceYes] = useState(false)
const [isSeparated, setIsSeparated] = useState(false)
const divorcedStatusHandler = (event)=>{
  if (event.target.value === "Yes"){
    setisDivorceYes(true)
  } 
   else {
    setisDivorceYes(false)
  }
    console.log(event.target.value)
}
const singeSeperatedDivorceHandler =(event)=>{
  if (event.target.value === "Separated") {
    setIsSeparated(true)
  }
  else{
    setIsSeparated(false)
  }
  console.log(event.target.value)
}

  return (
    <>

    <div className='d-flex justify-content-center my-2 mt-5'>
        <img src={divorced} alt="divorced logo" className='singellogo' />
    </div>
    <div>
      <div className='text-center'>
        <h5>Did your marital status change in 2022?</h5>
      </div>
      <form className='statusDivorced' onChange={divorcedStatusHandler}>

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

</form>
{isDivorceYes && <form>
      <div className='text-center mt-5'>
        <div>
        <label for="statusSingleChange" className='my-2'>When did your status change? - dd/mm</label><br />
        <input type='date' id="statusSingleChange" name='statuschange' className='my-2 date-input' />
        </div>
        <div>
        <label for="statuspresent1" className='my-2'>What was your marital status before the change?</label><br />
        <select id="statuspresent1" name='statuspresent1' className='my-2 date-input' onChange={singeSeperatedDivorceHandler}>
          <option value="none">select</option>
          <option value="Married">Married</option>
          <option value="Living common-law">Living common-law</option>
          <option value="Divorced">Divorced</option>
          <option value="Separated">Separated</option>
          <option value="Single">Single</option>
          <option value="Widowed">Widowed</option>
        </select>
        </div>
      </div>
    </form> }
 </div>    
 <div>
   {isSeparated && <form className='statusSinle my-4' >
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

</form>}
      </div> 

     <hr></hr>
     <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
      <div className='btn continue-btn'>Continue</div>
      </div>   
</>
  )
}

export default StatusDivorced
