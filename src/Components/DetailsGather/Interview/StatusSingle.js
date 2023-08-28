import React, { useState } from 'react';
import singel from "../../../assets/images/single.png";
import "./StatusSingel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const StatusSingle = () => {
  const [isYes, setIsyes] = useState(false)
  const [isSeparated, setIsSeparated] = useState(false)

  const singelStatusHandler=(event)=>{
    if (event.target.value === "Yes"){
      setIsyes(true)
    } 
     else {
      setIsyes(false)
    }
    console.log(event.target.value)
}

  const singeSeperatedHandler =(event)=>{
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
        <div className='my-2 mt-5'>
            <p className='text-center'>If you are Separated,divorced or widowed, your marital status remain the same 
                until you get divorced, remarry,or form a new common-law union</p>
        </div>

        <div className='d-flex justify-content-center my-2'>
            <img src={singel} alt="single logo" className='singellogo' />
        </div>
        <div>
          <div className='text-center'>
            <h5>Did your marital status change in 2022?</h5>
          </div>
          <form className='statusSinle' onChange={singelStatusHandler}>

        <ul>
         <li><input type="radio" name="test" id="singelYes" value="Yes" />
           <label for="singelYes">
             <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
         </label>
         </li>
        <li><input type="radio" name="test" id="singelNo" value="No" />
          <label for="singelNo">
            <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
          </label>
        </li>
      </ul>

    </form>

   {isYes && <form>
      <div className='text-center mt-5'>
        <div>
        <label for="statusSingleChange" className='my-2'>When did your status change? - dd/mm</label><br />
        <input type='date' id="statusSingleChange" name='statuschange' className='my-2 date-input' />
        </div>
        <div>
        <label for="statuspresent1" className='my-2'>What was your marital status before the change?</label><br />
        <select id="statuspresent1" name='statuspresent1' className='my-2 date-input' onChange={singeSeperatedHandler}>
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
 <li><input type="radio" name="singelSeperated" id="singeSeperatedlYes" value="Yes" />
   <label for="singeSeperatedlYes">
     <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
 </label>
 </li>
<li><input type="radio" name="singelSeperated" id="singeSeperatedlNo" value="No" />
  <label for="singeSeperatedlNo">
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

export default StatusSingle
