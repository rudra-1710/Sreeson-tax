import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import "../ProvinceOfResidence/Alberta.scss"
import "./DependantsInfo.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// import NavLink from 'react-bootstrap';

const DependantsInfo = () => {
  let depLink = useNavigate()
  const [depYes, setdepYes] = useState(true)
  const [validBtn, setvalidBtn] = useState(false)

  const depHandler = (event)=>{
    if (event.target.value === "Yes"){
      setvalidBtn(true)
      setdepYes(true)
    }else{
      setdepYes(false)
      setvalidBtn(true)
    }
  }
  const dependantHandler =(event)=>{
    event.preventDefault()
    let depStatus = depYes;
    console.log(depStatus)
    if(depStatus){
    depLink("/application/dependants-info")
    }else{
      depLink("/application/personal-info")
    }
  }

  return (
    <Container className='dependent'>
         <div className='d-flex justify-content-center mb-1'>
            <div className='dependent-logo '>
                
            </div>
        </div>
        <div><h6 className='text-center pt-1'>Do you have any dependants?</h6></div>
        <p className='text-center my-4'>They can be your children and other family members you support financially, but not your spouse/partner</p>
        <Nav.Link className='d-flex justify-content-center m-2'><p className='d-inline theme-color'>I'm not sure if have dependants</p></Nav.Link>
        <form className='statusSinle' onSubmit={dependantHandler} onChange={depHandler}>
            <ul>
            <li><input type="radio" name="Dependant" id="DependantYes" value="Yes" />
              <label for="DependantYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="Dependant" id="DependantNo" value="No" />
              <label for="DependantNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
       
        <hr className='mt-5'></hr>
                  <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
                      back</div>
                    {depYes && validBtn && <button className='btn continue-btn'>Continue</button>}
                    {!depYes && validBtn && <button className='btn continue-btn'>Continue</button>}
                  </div>
          </form>
    </Container>
  )
}

export default DependantsInfo