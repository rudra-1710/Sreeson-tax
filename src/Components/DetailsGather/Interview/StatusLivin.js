import React, { useState } from 'react'
import livin from "../../../assets/images/relation.png"
import "./StatusLivin.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';


const StatusLivin = () => {

  const [isLivinYes, setIsLivinYes]= useState(false);
  const [livinDate,setLivindate] = useState("")
  const[validBtn,setvalidBtn]= useState(false)

    const livinStatusHandler = (event)=>{
      if (event.target.value==="Yes"){
        setIsLivinYes(true)
        setvalidBtn(false)
      }else{
        setvalidBtn(true)
        setIsLivinYes(false)
      }
        console.log(event.target.value)
    }
    const dateHandler = (event)=>{
      console.log(event.target.value)
      setLivindate(event.target.value)
      // if(event.target.value){
      //   setvalidBtn(true)
      // }
    }

    const pastStatusHandler = (event)=>{
        if (event.target.value){
          setvalidBtn(true)
        }
    }

    const livinHandler =(event)=>{
      event.preventDefault()
      console.log(event)
    }

  return (
    <Container className='py-5'>
   
    <div className='d-flex justify-content-center my-2 mt-5'>
        <img src={livin} alt="livin logo" className='singellogo' />
    </div>
    <form onSubmit={livinHandler}>
      <div className='text-center'>
        <h5>Did your marital status change in 2022?</h5>
      </div>
      <div className='statusLivin' onChange={livinStatusHandler}>

    <ul>
     <li><input type="radio" name="test" id="livinYes" value="Yes"  required/>
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

</div>
{isLivinYes && <div>
      <div className='text-center mt-5'>
        <div>
        <label for="statusSingleChange" className='my-2'>When did your status change? - dd/mm</label><br />
        <input type='date' required  min={new Date().getFullYear()-1+"-01-01"} max={new Date().getFullYear()-1+"-12-31"} onChange={dateHandler} id="statusSingleChange" value={livinDate} name='event_date' className='my-2 date-input' />
        </div>
        <div>
        <label for="statuspresent3" className='my-2'>What was your marital status before the change?</label><br />
        <select id="statuspresent3" name='previous_status' required onChange={pastStatusHandler} className='my-2 date-input' >
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

export default StatusLivin
