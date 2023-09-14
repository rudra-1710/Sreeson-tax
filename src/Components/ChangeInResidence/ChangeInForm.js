import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./ChangeInForm.scss"

const ChangeInForm = () => {
    const changeFoLink = useNavigate()
    const[isMoveYes,setIsMoveYes] = useState(false);
    const [canadaRes,setcanadaRes] = useState(false)
    const [data,setData] = useState(
        // {move_canada:"",moveCa_date:"",end_canada:"",endCa_date:"",ca_income:"",for_income:""}
        {}
        )

    const moveCanadaHandler =(event)=>{
        if(event.target.value === "Yes"){
            setIsMoveYes(true)
            data.move_canada="yes"
        }else{
            data.move_canada="No"
            setIsMoveYes(false)
        }
    }
    const canadaResHandler  = (event)=>{
        if(event.target.value === "Yes"){
            data.end_canada= "yes"
            setcanadaRes(true)
        }else{
            data.end_canada= "No"
            setcanadaRes(false)
        }
    }
    const changeDataHandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
        
    }
    const changeformHandler =(event)=>{
        event.preventDefault()
        console.log(data)
        changeFoLink("/application/citizenship")
    }
  return (
    <Container className='ChangeInForm'>
        <h3 className='text-center my-4'>Tell us about your move</h3>
        <form onSubmit={changeformHandler}>
        <div className='my-3'><Link  to="#">Learn more About moving and your taxes.</Link></div>
        <p className='my-3'><span>*</span> indicates required field</p>
        <div  onChange={moveCanadaHandler} >
        <label for="enter_canada">Did you move to Canada in 2022? <span>*</span></label>
        <Form.Check required name='enter_canada' label="Yes" value="Yes" type='radio' className='my-3' id="enter_canadaYes"/>
        <Form.Check name='enter_canada' label="No" value="No" type='radio' className='my-3' id="enter_canadaNo"/>
        </div>

        {isMoveYes&& <div className='my-5'>
          <h6 className='my-2'>When did you enter? <span>*</span></h6>
          <div className='d-flex '>
            <div>
        <input type='date' onChange={ isMoveYes && changeDataHandler} required id="caEnter_date"    name='caEnter_date' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        
        <div onChange={canadaResHandler} >
        <label for="canadaresidency">Did you end your Canada residency in 2022? <span>*</span></label>
        <Form.Check required name='canadaresidency' label="Yes" value="Yes" type='radio' className='my-3' id="canadaresidencyYes"/>
        <Form.Check name='canadaresidency' label="No" value="No" type='radio' className='my-3' id="canadaresidencyNo"/>
        </div>

        {canadaRes&& <div className='my-5'>
          <h6 className='my-2'>When did you leave? <span>*</span></h6>
          <div className='d-flex '>
            <div>
        <input type='date' onChange={canadaRes && changeDataHandler} required id="caEndDate"  name='caEndDate' className='my-2 date-input' />
            </div>
        </div>
        </div>}

        <div>
            <div className='mt-5 mb-3'>For the part of the year you weren't resident of Canada :</div>
            <Form.Group className='my-3'>
                <Form.Label><p className='my-2'>What was your Income from Canadian sources?</p></Form.Label>
                <Form.Control 
                onChange={changeDataHandler}
                name='canada_incone'
                type='text'
                className='date-input-mail'
                // value={data.ca_income}
                placeholder='0.00'
                />
            </Form.Group>
            <Form.Group className='my-3'>
                <Form.Label><p className='my-2'>What was your Income from foreign sources?</p></Form.Label>
                <Form.Control 
                onChange={changeDataHandler}
                name='foreign_income'
                className='date-input-mail'
                type='text'
                // value={data.for_income}
                placeholder='0.00'
                />
            </Form.Group>

            <div className='my-5 '>
                We use these amounts to calculate your return. It's OK if you dont't have this info now-we'll ask again before you file. Adding it later will likely change your estimated refund or tax owing 
            </div>
            <hr className='mt-5'></hr>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center btn back-btn'><Link to="/application/change"><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
            back</Link></div>
          <button className='btn continue-btn'>Continue</button>
        </div>
        
        </div>
        </form>
    </Container>
  )
}

export default ChangeInForm