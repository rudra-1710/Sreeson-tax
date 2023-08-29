import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import "./British.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import bc from "../../assets/images/British_Columbia.png"


const British = () => {

    const [isBMove, setIsBMove] = useState(false)
    const [isNisga, setIsNisga] = useState(false)
    const [isNigaYes, setIsNigaYes] = useState(false);
    const [isNigaCitizen, setisNigaCitizen] = useState(false)
    const [isNigaNo,setisNigaNo] = useState(false)
    const [isTsawwassen,setisTsawwassen]= useState(false)
    const BritishHandler =(event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setIsBMove(true);
            setIsNisga(true)
          }else{
            setIsBMove(false)
            setIsNisga(true)
          }
    }
    const NisgaHandler = (event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setIsNigaYes(true)
          }else{
            setIsNigaYes(false)
          }
    }

    const NisgaLandHandler = (event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setisNigaCitizen(true)
            setisNigaNo(false)
          }else{
            setisNigaCitizen(false)
            setisNigaNo(true)
          }
    }
    const TsawwassenHandler = (event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setisTsawwassen(true)
          }else{
            setisTsawwassen(false)
          }
    }

  return (
    <>
        <Container className='british'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={BritishHandler}>

            <ul>
            <li><input type="radio" name="test" id="BritishYes" value="Yes" />
              <label for="BritishYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="BritishNo" value="No" />
              <label for="BritishNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isBMove&& <div className='py-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Albertadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Albertadate" name='Albertadate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        {isNisga && 
            <div className='py-4'>
                <div className='d-flex justify-content-center mb-1'>
            <div className='country-logo py-2'>
                <img src={bc} />
            </div>
        </div>
                <div><h6 className='text-center'>Did you live within Nisga'a Lands or Tsawwassen Lands on December 31,2022?</h6></div>
                 <form className='statusSinle' onChange={NisgaHandler}>
                    <ul>
                    <li><input type="radio" name="test" id="NisgaYes" value="Yes" />
                    <label for="NisgaYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="test" id="NisgaNo" value="No" />
                    <label for="NisgaNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </form>
                    <div>
                        
                    </div>
            </div>
        }

            {isNigaYes  &&
                <div>
                    <div><h6 className='text-center'>Do you live within Nisga'a Land on December 31, 2022?</h6></div>
                 <form className='statusSinle' onChange={NisgaLandHandler}>
                    <ul>
                    <li><input type="radio" name="test" id="NisgaLandYes" value="Yes" />
                    <label for="NisgaLandYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="test" id="NisgaLandNo" value="No" />
                    <label for="NisgaLandNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </form>

                    <div>
                        {isNigaYes && isNigaCitizen && isNigaCitizen && 
                            <div>
                                 <div>
                    <div><h6 className='text-center'>Are you a citizen of the Nisga'a Nation?</h6></div>
                 <form className='statusSinle' >
                    <ul>
                    <li><input type="radio" name="test" id="NisgaCitizenYes" value="Yes" />
                    <label for="NisgaCitizenYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="test" id="NisgaCitizenNo" value="No" />
                    <label for="NisgaCitizenNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </form>
                </div>
                            </div>
                        }
                    </div>
                   
                </div>
                
            }
        <div>
        { isNigaYes && !isNigaCitizen && isNigaNo &&
                         <div>
                         <div>
            <div><h6 className='text-center'>Do you live within Tsawwassen Land on December 31, 2022?</h6></div>
         <form className='statusSinle' onChange={TsawwassenHandler} >
            <ul>
            <li><input type="radio" name="test" id="TsawwassenYes" value="Yes" />
            <label for="TsawwassenYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="TsawwassenNo" value="No" />
            <label for="TsawwassenNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
            </label>
            </li>
            </ul>
            </form>
        </div>
                    </div>}
        </div>


        {isNigaYes && !isNigaCitizen && isTsawwassen &&
             <div>
                <div>
                   <div><h6 className='text-center'>Are you a member of the Tsawwassen First Nation?</h6></div>
                   <form className='statusSinle' >
                     <ul>
                         <li><input type="radio" name="test" id="FirstTsawwassenYes" value="Yes" />
                         <label for="FirstTsawwassenYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                        </label>
                         </li>
                         <li><input type="radio" name="test" id="FirstTsawwassenNo" value="No" />
                          <label for="FirstTsawwassenNo">
                          <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                          </label>
                         </li>
                     </ul>
                  </form>
               </div>
                    </div>}

        <hr className='mt-5'></hr>
     <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
      <div className='btn continue-btn'>Continue</div>
      </div> 
        </Container>
    </>
  )
}

export default British