import React, { useState } from 'react'
import livin from "../../../assets/images/relation.png"
import "./StatusLivin.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';


const StatusLivin = () => {

  const [isLivinYes, setIsLivinYes]= useState(false)

    const livinStatusHandler = (event)=>{
      if (event.target.value==="Yes"){
        setIsLivinYes(true)
      }else{
        setIsLivinYes(false)
      }
        console.log(event.target.value)
    }

  return (
    <>
   
    <div className='d-flex justify-content-center my-2 mt-5'>
        <img src={livin} alt="livin logo" className='singellogo' />
    </div>
    <div>
      <div className='text-center'>
        <h5>Did your marital status change in 2022?</h5>
      </div>
      <form className='statusLivin' onChange={livinStatusHandler}>

    <ul>
     <li><input type="radio" name="test" id="livinYes" value="Yes" />
       <label for="livinYes">
         <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
     </label>
     </li>
    <li><input type="radio" name="test" id="livinNo" value="No" />
      <label for="livinNo">
        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
      </label>
    </li>
  </ul>

</form>
{isLivinYes && <form>
      <div className='text-center mt-5'>
        <div>
        <label for="statusSingleChange" className='my-2'>When did your status change? - dd/mm</label><br />
        <input type='date' id="statusSingleChange" name='statuschange' className='my-2 date-input' />
        </div>
        <div>
        <label for="statuspresent3" className='my-2'>What was your marital status before the change?</label><br />
        <select id="statuspresent3" name='statuspresent3' className='my-2 date-input' >
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

 <hr></hr>
<div className='d-flex justify-content-between'>
 <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
 <div className='btn continue-btn'>Continue</div>
 </div>   
</>
  )
}

export default StatusLivin
