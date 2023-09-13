import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap';
import "./CanadianCitizenship.scss"
import flag from "../../assets/images/Canada-flag.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import taxlogo from "../../assets/images/tax.png"
import ok from "../../assets/images/ok-symbol.png"

const CanadianCitizenship = () => {
    const [isCanadian, setisCanadian] = useState(false)
    const [incomeIndia, setincomeIndia] = useState(false)
    const [isPrior,setIsPrior]= useState(false)
    const [validBtn, setValidBtn] = useState(false)


    const canadianHandler =(event)=>{
        console.log(event.target.value)
        
          if(event.target.value === "Yes"){
            setisCanadian(true);
            setincomeIndia(true)
            setValidBtn(false)
          }else{
            setisCanadian(false)
            setincomeIndia(true)
            setValidBtn(false)
          }
    }
    const priorHandler = (event)=>{
        if(event.target.value==="Yes"){
            setIsPrior(true)
            setValidBtn(true)
        }
        else{
            setValidBtn(true)
            setIsPrior(false)
        }
    }
    const CanadianCitizenshipHandler = (event)=>{
        event.preventDefault()
    }
  return (
    <Container className='canadian'>
         <div className='d-flex justify-content-center mb-1'>
            <div className='territory '>
                <img src={flag} alt="flag" />
            </div>
        </div>
            <form onSubmit={CanadianCitizenshipHandler}>
        <div><h6 className='text-center'>Are you a Canadian citizen?</h6></div>
        <div className='statusSinle' onChange={canadianHandler}>

            <ul>
            <li><input type="radio" name="canadian" id="CanadianYes" value="Yes" required/>
              <label for="CanadianYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="canadian" id="CanadianNo" value="No" />
              <label for="CanadianNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isCanadian&&  <div className='py-4'>
                <div><h6 className='text-center text-grey'>Do you authorize the CRA to share your indivation with Elections Canada to update the National Register of Electors?</h6></div>
                 <div className='statusSinle'>
                    <div className='d-flex justify-content-center'>
                       <Nav.Link><p className='d-inline'>Learn more?</p></Nav.Link> 
                    </div>
                    <ul>
                    <li><input type="radio" name="isCanadian" id="iscanadaYes" value="Yes" required />
                    <label for="iscanadaYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="isCanadian" id="iscanadaNo" value="No" />
                    <label for="iscanadaNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </div>
                    
                    
        </div>}

        {incomeIndia && 
        <div>
            <div className='py-4'>
            <div><h6 className='text-center text-grey'>Do you have income that is exempt from tax under aindian act?</h6></div>
             <div className='statusSinle'>
                <ul>
                <li><input type="radio" name="canadian-india" id="canada-indiaYes" value="Yes" required />
                <label for="canada-indiaYes">
                    <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                </label>
                </li>
                <li><input type="radio" name="canadian-india" id="canada-indiaNo" value="No" />
                <label for="canada-indiaNo">
                    <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                </label>
                </li>
                </ul>
                </div>
                
                </div>
                <div className='py-4'>
                <div><h6 className='text-center text-grey'>Are you filing an income tax return with the CRA for the first time?</h6></div>
                 <div className='statusSinle'>
                    <div className='d-flex justify-content-center'>
                       <Nav.Link><p className='d-inline'>Learn more?</p></Nav.Link> 
                    </div>
                    <ul>
                    <li><input type="radio" name="CRA" id="CRAfirstYes" value="Yes" required/>
                    <label for="CRAfirstYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="CRA" id="CRAfirstNo" value="No" />
                    <label for="CRAfirstNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </div>
                    
        </div>
        <div className='py-4'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '>
                <img src={taxlogo}  alt="text logo"/>
            </div>
        </div>
                <div><h6 className='text-center text-grey'>Do you need to file your tax return for any prior year?</h6></div>
                 <div className='statusSinle' onChange={priorHandler}>
                    <div className='d-flex justify-content-center'>
                       <Nav.Link><p className='d-inline'>Learn more?</p></Nav.Link> 
                    </div>
                    <ul>
                    <li><input type="radio" name="priortax" id="priorYes" value="Yes" required />
                    <label for="priorYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="priortax" id="priorNo" value="No" />
                    <label for="priorNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </div>
                    
                    
        </div>
        {isPrior && <div>
            <div className='d-flex justify-content-center mb-1'>
            <div className='territory '>
                <img src={ok}  alt="text logo"/>
            </div>
            </div>
            <div>
            
            <p className='text-center py-1'><b>we'll help you with this</b></p>
            <p className='text-center py-2'>To accurately assess your 2022 tax return, the CRA asks that you file your prior year returns (earliest to latest) before filing one for the current tax year.</p>
        </div>
        <Nav.Link href='#' className='d-flex justify-content-center my-2'><p className="btn continue-btn d-inline">Start a prior year return</p></Nav.Link>
            </div>}
         </div>   
        }
        <hr className='mt-5'></hr>
     <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
      <button className='btn continue-btn' disabled={!validBtn}>Continue</button>
      </div> 
        </form>
        
    </Container>
  )
}

export default CanadianCitizenship