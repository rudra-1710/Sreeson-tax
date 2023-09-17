import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import "./Changeinresidence.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import ChangeInForm from './ChangeInForm';
import { Link, useNavigate } from 'react-router-dom';

const ChangeInResidence = () => {
    
  const changeLink = useNavigate()

  const [validBtn,setvalidBtn] = useState(false);
  const[changeYes,setChangeYes] = useState(false)

  const changeinresidenceHandler = (event) => {
    console.log(event.target.value);
    if(event.target.value === "Yes"){
        setvalidBtn(true)
        setChangeYes(true)
    }else{
        setvalidBtn(true)
        setChangeYes(false)
    }
  }
  const changeResHandler =(event)=>{
    event.preventDefault()
    const changeData = changeYes
    console.log(changeData)
    if(changeData) changeLink("/application/change-res-yes")
    else changeLink("/application/citizenship")
  }

  return (
    <Container className='changeinresidence'>
      <div className='d-flex justify-content-center mb-1'>
        <div className='changeinresidence-img '></div>
      </div>
      <div>
        <h6 className='text-center my-3'>Did you move to or away from Canada in 2022?</h6>
      </div>
      <form className='statusSinle' onSubmit={changeResHandler} onChange={changeinresidenceHandler} >

        <ul>
          <li><input
            type="radio"
            name="changeinresidence"
            id="changeinresidenceYes"
            value="Yes"/>
            <label for="changeinresidenceYes">
              <div className='imgbar single d-flex justify-content-center align-items-center'>
                <p>Yes</p>
              </div>
            </label>
          </li>
          <li><input
            type="radio"
            name="changeinresidence"
            id="changeinresidenceNo"
            value="No"/>
            <label for="changeinresidenceNo">
              <div
                className='imgbar married d-flex justify-content-center align-items-center'>
                <p>No</p>
              </div>
            </label>
          </li>
        </ul>
        <hr className='mt-5'></hr>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center btn back-btn'><Link to="/application/province"><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
            back
            </Link>
            </div>
          {changeYes && validBtn && <button className='btn continue-btn' >Continue</button>}
          {!changeYes && validBtn && <button className='btn continue-btn' >Continue</button>}
          
        </div>
      </form>
    {/* <ChangeInForm /> */}
    </Container>
  )
}

export default ChangeInResidence