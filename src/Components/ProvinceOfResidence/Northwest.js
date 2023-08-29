import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import "./Northwest.scss"
import "./Alberta.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import NW from "../../assets/images/northwest.png"


const Northwest = () => {

    const [isNWMove, setIsNWMove] = useState(false)
    const [isReside, setIsReside] = useState(false)
    const [isResideYes, setisResideYes] = useState(false);
    const [isDeline, setisDeline] = useState(false)


    const NorthwestHandler =(event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setIsNWMove(true);
            setIsReside(true)
          }else{
            setIsNWMove(false)
            setIsReside(true)
          }
    }
    const ResideHandler = (event)=>{
        console.log(event.target.value)
        if(event.target.value === "No"){
            setisResideYes(true)
          }else{
            setisResideYes(false)
          }
    }

    const DelineHandler = (event)=>{
        console.log(event.target.value)
        if(event.target.value === "Yes"){
            setisDeline(true)
          }else{
            setisDeline(false)
          } 
    }
    const delineFirstHandler = (event)=>{
        console.log(event.target.value)
       
    }

  return (
    <>
        <Container className='Northwest alberta'>
        <div className='d-flex justify-content-center mb-1'>
            <div className='territory '></div>
        </div>
        <div><h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6></div>
        <form className='statusSinle' onChange={NorthwestHandler}>

            <ul>
            <li><input type="radio" name="test" id="NorthwestYes" value="Yes" />
              <label for="NorthwestYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
            </label>
            </li>
            <li><input type="radio" name="test" id="NorthwestNo" value="No" />
              <label for="NorthwestNo">
                <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
              </label>
            </li>
            </ul>
        </form>

        {isNWMove&& <div className='py-4'>
          <h6 className='text-center'>When did you move?</h6>
          <div className='d-flex justify-content-center'>
            <div>
            <label for="Albertadate" className='my-2'><p>An apporximate date is OK</p></label>
        <input type='date' id="Albertadate" name='Albertadate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        {isReside && 
            <div className='py-4'>
                <div className='d-flex justify-content-center mb-1'>
            <div className='country-logo py-2'>
                <img src={NW} />
            </div>
        </div>
                <div><h6 className='text-center'>Did you reside on Tåîchô lands or within a Tåîchô community on December 31, 2022?</h6></div>
                 <form className='statusSinle' onChange={ResideHandler}>
                    <ul>
                    <li><input type="radio" name="test" id="ResideYes" value="Yes" />
                    <label for="ResideYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="test" id="ResideNo" value="No" />
                    <label for="ResideNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </form>
                    <div>
                        
                    </div>
            </div>
        }

            {isResideYes  &&
                <div>
                    <div><h6 className='text-center'>Did you reside on Délînê Settlement Lands or in the Community of Délînê on December 31, 2022?</h6></div>
                 <form className='statusSinle' onChange={DelineHandler}>
                    <ul>
                    <li><input type="radio" name="test" id="DelineYes" value="Yes" />
                    <label for="DelineYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="test" id="DelineNo" value="No" />
                    <label for="DelineNo">
                        <div className='imgbar married d-flex justify-content-center align-items-center'><p>No</p></div>
                    </label>
                    </li>
                    </ul>
                    </form>

                    <div>
                        {isResideYes &&  isDeline && 
                            <div>
                                 <div>
                    <div><h6 className='text-center'>Are you a Délînê First Nation (DFN) Citizen represented by the Délînê Got'înê Government?</h6></div>
                 <form className='statusSinle' onChange={delineFirstHandler} >
                    <ul>
                    <li><input type="radio" name="test" id="DelineFirstYes" value="Yes" />
                    <label for="DelineFirstYes">
                        <div className='imgbar single d-flex justify-content-center align-items-center'><p>Yes</p></div>
                    </label>
                    </li>
                    <li><input type="radio" name="test" id="DelineFirstNo" value="No" />
                    <label for="DelineFirstNo">
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

        <hr className='mt-5'></hr>
     <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back</div>
      <div className='btn continue-btn'>Continue</div>
      </div> 
        </Container>
    </>
  )
}

export default Northwest