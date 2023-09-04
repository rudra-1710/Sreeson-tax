import React from 'react'
import { Container, Form, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./PersonalInfo.scss"

function PersonalInfo() {
    const details= [
        {
            label:"First name",
            type:"text",
            isRequired:true,
            id:"firestname"
        },
        {
            label:"Middle name (if applicable)",
            type:"text",
            isRequired :false,
            id:"middlename"
        },
        {
            label:"Last name",
            type:"text",
            isRequired:true,
            id:"lastname"
        },
        {
            label:"Date of birth",
            type:"Date",
            isRequired:true,
            id:"dob"
        },
        {
            label:"Social Insurance Number (SIN)",
            type:"number",
            isRequired:true,
            id:"SIN"
        },
    ]
  return (
    <Container>
        <h5 className='my-4 text-center'>Hemanth, let's get the rest of your personal info</h5>
            <h6 className='text-center text-grey'>Make sure it matches what the CRA has on file</h6>
            
                <Form>
                <div className='d-flex justify-content-center'>
                    <div>
        {details.map(data=>{
            return(
                <Form.Group  md="4" className='my-4' id={data.id} controlId="validationCustom01" key={data.label}>
                <Form.Label>
                    <p>{data.label}</p>
                </Form.Label>
                <Form.Control  required={data.isRequired} type={data.type} className='my-1 date-input-Personal'/>
            </Form.Group>
            )
        })}
        <Nav.Link href='#' className='theme-color'><p className='d-inline'>Why do we need this?</p></Nav.Link>
        </div>
        </div>
        <hr className='mt-5'></hr>
                  <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
                      back</div>
                    <button className='btn continue-btn'>Continue</button>
                  </div>
        </Form>
        
        
    </Container>
  )
}

export default PersonalInfo