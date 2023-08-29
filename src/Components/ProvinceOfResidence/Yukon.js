import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import yukon from "../../assets/images/yukon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./Alberta.scss"
import "./Yukon.scss"

const Yukon = () => {
    const [isYukonMove, setisYukonMove] = useState(false)
    const [isResideYukon, setisResideYukon] = useState(false)
    const [showSelfGovt,setshowSelfGovt]= useState(false)


    const YukonHandler =(event)=>{
        console.log(event.target.value)
        
          if(event.target.value === "Yes"){
            setisYukonMove(true);
            setisResideYukon(true)
          }else{
            setisYukonMove(false)
            setisResideYukon(true)
          }
    }
    const resideYukonHandler = (event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setshowSelfGovt(true)
          }else{
            setshowSelfGovt(false)
          }
    }

  return (
   <Container className='Yukon alberta'>
    <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={YukonHandler}>

            <ul>
            <li><input type="radio" name="test" id="YukonYes" value="Yes" />
              <label for="YukonYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="YukonNo" value="No" />
              <label for="YukonNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isYukonMove&& <div className='py-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Yukondate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Yukondate" name='Yukondate' className='my-2 date-input' />
            </div>
        </div>
        </div>}
        {isResideYukon && 
            <div className='py-4'>
                <div className='d-flex justify-content-center mb-1'>
            <div className='country-logo py-2'>
                <img src={yukon} />
            </div>
        </div>
                <div><h6 className='text-center'>Did you reside within a self-governing Yukon First Nation settlement land on December 31, 2022?</h6></div>
                 <form className='statusSinle' onChange={resideYukonHandler}>
                    <ul>
                    <li><input type="radio" name="test" id="resideYukonYes" value="Yes" />
                    <label for="resideYukonYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="test" id="resideYukonNo" value="No" />
                    <label for="resideYukonNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </form>
                    
                    </div>
            
        }
        {
            showSelfGovt &&
            <div>
            <div className='d-flex justify-content-center my-4'>
            <div>
        <label for="province" className='my-2'><p>Name of self-governing First Nation</p></label><br />
         <select id="yukon" name='yukon' className='my-2 date-input-yukon' >
           <option value="select">--select--</option>
           <option value="Carcross/Tagish">Carcross/Tagish</option>
           <option value="Champagne & Aishihik">Champagne & Aishihik</option>
           <option value="Kluane">Kluane</option>
           <option value="Kwanlin Dun">Kwanlin Dun</option>
           <option value="Little Salmon/Carmacks">Little Salmon/Carmacks</option>
           <option value="Nacho Nyak Dun">Nacho Nyak Dun</option>
           <option value="Selkirk">Selkirk</option>
           <option value="Ta'an Kwäch'än">Ta'an Kwäch'än</option>
           <option value="Teslin Tlingit">Teslin Tlingit</option>
           <option value="Tr'ondëk Hwëch'in">Tr'ondëk Hwëch'in</option>
           <option value="Tr'ondëk Hwëch'in">Tr'ondëk Hwëch'in</option>
         </select>
        </div>
        </div>
        <div>
        <div>
                    <h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' >

            <ul>
            <li><input type="radio" name="test" id="isYukonCitizenYes" value="Yes" />
              <label for="isYukonCitizenYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="isYukonCitizenNo" value="No" />
              <label for="isYukonCitizenNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>
        </div>
        </div>
        }

        
<hr className='mt-5'></hr>
     <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
      <div className='btn continue-btn'>Continue</div>
      </div> 
   </Container>
  )
}

export default Yukon