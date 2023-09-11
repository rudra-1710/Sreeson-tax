import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./ChangeInForm.scss"

const ChangeInForm = () => {
    const[isMoveYes,setIsMoveYes] = useState(false);
    const [canadaRes,setcanadaRes] = useState(false)

    const moveCanadaHandler =(event)=>{
        if(event.target.value === "Yes"){
            setIsMoveYes(true)
        }else{
            setIsMoveYes(false)
        }
    }
    const canadaResHandler  = (event)=>{
        if(event.target.value === "Yes"){
            setcanadaRes(true)
        }else{
            setcanadaRes(false)
        }
    }

  return (
    <Container className='ChangeInForm'>
        <form>
        <div className='my-3'><Link  to="#">Learn more About moving and your taxes.</Link></div>
        <p className='my-3'><span>*</span> indicates required field</p>
        <div onChange={moveCanadaHandler}>
        <label for="moveToCanada">Did you move to Canada in 2022?</label>
        <Form.Check name='moveToCanada' label="Yes" value="Yes" type='radio' className='my-3' id="moveToCanadaYes"/>
        <Form.Check name='moveToCanada' label="No" value="No" type='radio' className='my-3' id="moveToCanadaNo"/>
        </div>

        {isMoveYes&& <div className='my-5'>
          <h6 className='my-2'>When did you enter? <span>*</span></h6>
          <div className='d-flex '>
            <div>
        <input type='date' id="Canadaenterdate" name='Canadaenterdate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        
        <div onChange={canadaResHandler}>
        <label for="canadaresidency">Did you end your Canada residency in 2022?</label>
        <Form.Check name='canadaresidency' label="Yes" value="Yes" type='radio' className='my-3' id="canadaresidencyYes"/>
        <Form.Check name='canadaresidency' label="No" value="No" type='radio' className='my-3' id="canadaresidencyNo"/>
        </div>

        {canadaRes&& <div className='my-5'>
          <h6 className='my-2'>When did you leave? <span>*</span></h6>
          <div className='d-flex '>
            <div>
        <input type='date' id="canadaresidencydate" name='canadaresidencydate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        <div>
            <div className='mt-5 mb-3'>For the part of the year you weren't resident of Canada :</div>
            <Form.Group className='my-3'>
                <Form.Label><p className='my-2'>What was your Income from Canadian sources?</p></Form.Label>
                <Form.Control 
                required
                value=""
                type='text'
                className='date-input-mail'
                placeholder='0.00'
                />
            </Form.Group>
            <Form.Group className='my-3'>
                <Form.Label><p className='my-2'>What was your Income from foreign sources?</p></Form.Label>
                <Form.Control 
                required
                value=""
                className='date-input-mail'
                type='text'
                placeholder='0.00'
                />
            </Form.Group>

            <div className='my-5 '>
                We use these amounts to calculate your return. It's OK if you dont't have this info now-we'll ask again before you file. Adding it later will likely change your estimated refund or tax owing 
            </div>
            <hr className='mt-5'></hr>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
            back</div>
          <div className='btn continue-btn'>Continue</div>
        </div>
        
        </div>
        </form>
    </Container>
  )
}

export default ChangeInForm