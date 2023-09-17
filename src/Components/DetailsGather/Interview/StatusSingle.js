import React, { useState } from 'react';
import singel from "../../../assets/images/single.png";
import "./StatusSingel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StatusSingle = () => {
  const [isYes, setIsyes] = useState(false)
  const [isSeparated, setIsSeparated] = useState(false);
  const [valiBtn, setvaliBtn] = useState(false)
  // const {isvalid} = formsta
  // console.log(isvalid)
  const singelStatusHandler=(event)=>{
    if (event.target.value === "Yes"){
      setIsyes(true)
      setvaliBtn(false)
    } 
     else {
      setIsyes(false)
      setvaliBtn(true)
    }
    console.log(event.target.value)
}

  const singeSeperatedHandler =(event)=>{
    if (event.target.value === "Separated") {
      setIsSeparated(true)
      setvaliBtn(false)
    }
    else{
      setIsSeparated(false)
      setvaliBtn(true)
    }
    console.log(event.target.value)
  }
  
  const singelHandler =(event)=>{
    event.preventDefault()
    setvaliBtn(true)
    console.log(event)
  }
  const pastStatusHandler = (event)=>{
    if(event.target.value){
      setvaliBtn(true)
    }
  }

  return (
    <Container className="py-5">
        <div className='my-2 mt-5'>
            <p className='text-center'>If you are Separated,divorced or widowed, your marital status remain the same 
                until you get divorced, remarry,or form a new common-law union</p>
        </div>

        <div className='d-flex justify-content-center my-2'>
            <img src={singel} alt="single logo" className='singellogo' />
        </div>
        <form onSubmit={singelHandler}>
          <div className='text-center'>
            <h5>Did your marital status change in 2022?</h5>
          </div>
          <div className='statusSinle' onChange={singelStatusHandler}>

        <ul>
         <li><input type="radio" name="test" id="singelYes" value="Yes" required />
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

          </div>

   {isYes && <div>
      <div className='text-center mt-5'>
        <div>
        <label for="statusSingleChange" className='my-2'>When did your status change? - dd/mm</label><br />
        <input type='date' required id="statusSingleChange" min="2022-01-01" max="2022-12-31" name='event_date' className='my-2 date-input' />
        </div>
        <div>
        <label for="statuspresent1" className='my-2'>What was your marital status before the change?</label><br />
        <select id="statuspresent1" name='previous_status' required className='my-2 date-input' onChange={singeSeperatedHandler}>
          <option value="" hidden >--select--</option>
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
      

     
   {isSeparated && isYes && <div className='statusSinle my-4' onChange={pastStatusHandler}>
      <h5 className='text-center'>Were you married or living common-law in 2022?</h5>

<ul>
 <li><input type="radio" name="singelSeperated" id="singeSeperatedlYes" value="Yes" required/>
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

</div>}
<hr></hr>
     <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center btn back-btn'><Link ><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>back</Link></div>
      <button className='btn continue-btn' disabled={!valiBtn}>Continue</button>
      </div>
</form>

      
    </Container>
  )
}

export default StatusSingle
