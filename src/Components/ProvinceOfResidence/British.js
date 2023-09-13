import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import "./British.scss"
import bc from "../../assets/images/British_Columbia.png"


const British = (props) => {

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
            props.btnHandler(false)
          }else{
            setIsBMove(false)
            setIsNisga(true)
            props.btnHandler(false)
          }
    }
    const NisgaHandler = (event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setIsNigaYes(true)
            props.btnHandler(false)
          }else{
            props.btnHandler(true)
            setIsNigaYes(false)
          }
    }

    const NisgaLandHandler = (event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setisNigaCitizen(true)
            setisNigaNo(false)
            props.btnHandler(false)
          }else{
            setisNigaCitizen(false)
            setisNigaNo(true)
            props.btnHandler(false)
          }
    }
    const TsawwassenHandler = (event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setisTsawwassen(true)
            props.btnHandler(false)
          }else{
            props.btnHandler(true)
            setisTsawwassen(false)
          }
    }
    const nisgaCitizenHandler = (event)=>{
        if (event.target.value){
            props.btnHandler(true)
        }
    }
    const tsawwassenMemHandler = (event)=>{
        if (event.target.value){
            props.btnHandler(true)
        }
    }

  return (
    <>
        <Container className='british'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={BritishHandler}>

            <ul>
            <li><input type="radio" name="britishCol" id="BritishYes" value="Yes" />
              <label for="BritishYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="britishCol" id="BritishNo" value="No" />
              <label for="BritishNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isBMove&& <div className='py-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Albertadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' required id="Albertadate" name='Albertadate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        {isNisga && 
            <div className='py-4'>
                <div className='d-flex justify-content-center mb-1'>
            <div className='country-logo py-2'>
                <img src={bc} alt='bc' />
            </div>
        </div>
                <div><h6 className='text-center'>Did you live within Nisga'a Lands or Tsawwassen Lands on December 31,2022?</h6></div>
                 <div className='statusSinle' onChange={NisgaHandler}>
                    <ul>
                    <li><input type="radio" name="nisga-tsaww" id="NisgaYes" value="Yes" />
                    <label for="NisgaYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="nisga-tsaww" id="NisgaNo" value="No" />
                    <label for="NisgaNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </div>
                    <div>
                        
                    </div>
            </div>
        }

            {isNigaYes  &&
                <div>
                    <div><h6 className='text-center'>Did you live within Nisga'a Land on December 31, 2022?</h6></div>
                 <div className='statusSinle' onChange={NisgaLandHandler}>
                    <ul>
                    <li><input type="radio" name="nisga" id="NisgaLandYes" value="Yes" />
                    <label for="NisgaLandYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="nisga" id="NisgaLandNo" value="No" />
                    <label for="NisgaLandNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </div>

                    <div>
                        {isNigaYes && isNigaCitizen && isNigaCitizen && 
                            <div>
                                 <div>
                    <div><h6 className='text-center'>Are you a citizen of the Nisga'a Nation?</h6></div>
                 <div className='statusSinle' 
                 onChange={nisgaCitizenHandler} 
                 >
                    <ul>
                    <li><input type="radio" name="nisgaCitizen" id="NisgaCitizenYes" value="Yes" />
                    <label for="NisgaCitizenYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="nisgaCitizen" id="NisgaCitizenNo" value="No" />
                    <label for="NisgaCitizenNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </div>
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
            <div><h6 className='text-center'>Did you live within Tsawwassen Land on December 31, 2022?</h6></div>
         <div className='statusSinle' onChange={TsawwassenHandler} >
            <ul>
            <li><input type="radio" name="tsawwassen" id="TsawwassenYes" value="Yes" />
            <label for="TsawwassenYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="tsawwassen" id="TsawwassenNo" value="No" />
            <label for="TsawwassenNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
            </label>
            </li>
            </ul>
            </div>
        </div>
                    </div>}
        </div>


        {isNigaYes && !isNigaCitizen && isTsawwassen &&
             <div>
                <div>
                   <div><h6 className='text-center'>Are you a member of the Tsawwassen First Nation?</h6></div>
                   <div className='statusSinle' onChange={tsawwassenMemHandler} >
                     <ul>
                         <li><input type="radio" name="tsaww-member" id="FirstTsawwassenYes" value="Yes" />
                         <label for="FirstTsawwassenYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                        </label>
                         </li>
                         <li><input type="radio" name="tsaww-member" id="FirstTsawwassenNo" value="No" />
                          <label for="FirstTsawwassenNo">
                          <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                          </label>
                         </li>
                     </ul>
                  </div>
               </div>
                    </div>}

        </Container>
    </>
  )
}

export default British