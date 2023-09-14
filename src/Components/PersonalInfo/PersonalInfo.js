import React, { useState } from 'react'
import { Col, Container, Form, Nav, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./PersonalInfo.scss";
import { Link, useNavigate } from 'react-router-dom';

function PersonalInfo() {
    const [perData,setperData]= useState({first_name:"",middle_name:"",last_name:"",dob:"",sin:""})
    const personalLink = useNavigate()
    const details= [
        {
            label:"First name",
            type:"text",
            name:"first_name",
            isRequired:true,
            id:"firestname",
            value:perData.first_name
        },
        {
            label:"Middle name (if applicable)",
            type:"text",
            isRequired :false,
            id:"middlename",
            value:perData.middle_name,
            name:"middle_name"
        },
        {
            label:"Last name",
            type:"text",
            isRequired:true,
            id:"lastname",
            value:perData.last_name,
            name:"last_name"
        },
        {
            label:"Date of birth",
            type:"Date",
            isRequired:true,
            id:"dob",
            value:perData.dob,
            name:"dob"
        },
        {
            label:"Social Insurance Number (SIN)",
            type:"number",
            isRequired:true,
            id:"SIN",
            value:perData.sin,
            name:"sin"
        },
    ]
    const personalInfoHandler = (event)=>{
        setperData({...perData,[event.target.name]:event.target.value})
    }
    const personalHandler = (event)=>{
        console.log(perData)
        event.preventDefault()
        personalLink("")
    }
  return (
    <Container>
        <h5 className='my-4 text-center'>Hemanth, let's get the rest of your personal info</h5>
            <h6 className='text-center text-grey'>Make sure it matches what the CRA has on file</h6>
            
                <Form onSubmit={personalHandler}>
                <div className='d-flex justify-content-center'>
                    <Row >
        {details.map((data,index)=>{
            return(
                <Col key={index}>
                <Form.Group  md="4" className='my-4' id={data.id} controlId="validationCustom01" key={data.label}>
                <Form.Label>
                    <p>{data.label}</p>
                </Form.Label>
                <Form.Control  required={data.isRequired} value={data.value} onChange={(e)=>personalInfoHandler(e)} placeholder='' name={data.name} type={data.type} className='my-1 date-input-Personal'/>
            </Form.Group>
            </Col>
            )
        })}
        <Col></Col>
        <Link to='/' className='theme-color'><p className='d-inline'>Why do we need this?</p></Link>
        </Row>
        </div>
        <hr className='mt-5'></hr>
                  <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center btn'><Link to="/application/dependants"><FontAwesomeIcon icon={faAngleLeft} className='pe-1' />
                      back</Link></div>
                    <button className='btn continue-btn'>Continue</button>
                  </div>
        </Form>
        
        
    </Container>
  )
}

export default PersonalInfo