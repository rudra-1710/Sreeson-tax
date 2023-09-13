import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Nl from "../../assets/images/newfoundland.png"
import "./Manitoba.scss"
import "./NewfoundLand.scss"

const NewfoundLand = (props) => {
    const [isNewfoundLandYes,setisNewfoundLandYes]= useState(false);
    const [isNewFoundLand, setisNewFoundLand] = useState(false)
    const NewfoundLandHandler = (event)=>{
        if(event.target.value === "Yes"){
            setisNewfoundLandYes(true)
            setisNewFoundLand(true)
            props.btnHandler(false)
        }else{
            setisNewfoundLandYes(false)
            setisNewFoundLand(true)
            props.btnHandler(false)
        }
        
    }
    const newFoundNisTsawwHandler = (event)=>{
      if(event.target.value){
        props.btnHandler(true)
      }
    }
  return (
    <Container className='Manotoba NewfoundLand'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <div className='statusSinle' onChange={NewfoundLandHandler}>

            <ul>
            <li><input type="radio" name="newFoundLand" id="NewfoundLandYes" value="Yes" />
              <label for="NewfoundLandYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="newFoundLand" id="NewfoundLandNo" value="No" />
              <label for="NewfoundLandNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </div>

        {isNewfoundLandYes && <div className='my-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Albertadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' required id="Albertadate" name='Albertadate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        
      {isNewFoundLand && 
            <div className='py-4'>
                <div className='d-flex justify-content-center mb-1'>
            <div className='country-logo py-2'>
                <img src={Nl}  alt='nl'/>
            </div>
        </div>
                <div><h6 className='text-center'>Did you live within Nisga'a Lands or Tsawwassen Lands on December 31,2022?</h6></div>
                 <div className='statusSinle' onChange={newFoundNisTsawwHandler}>
                    <ul>
                    <li><input type="radio" name="newFoundNisTsaww" id="isNewfoundLandYes" value="Yes" />
                    <label for="isNewfoundLandYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="newFoundNisTsaww" id="isNewfoundLandNo" value="No" />
                    <label for="isNewfoundLandNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </div>
                    <div>
                        
                    </div>
            </div>
        }
    </Container>
  )
}

export default NewfoundLand