import React from 'react'
import {Form, Container} from 'react-bootstrap';
import "../Login_form/LoginForm.css"
import "./TaxReturnBasicDetails.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function TaxReturnBasicDetails() {

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // setValidated(true);
  };
  return (
    <Container className='Tax-returnDetails py-4'>
      <h5 className='text-center pt-4'>Let's get started! What's your name?</h5>
      <div className='w-100'>
        <div className=' px-2 h-100 d-flex justify-content-center w-100'>
          <div className='my-auto w-100'>
            <div className='login-box d-flex justify-content-center w-100 '>
              <div className='w-100'>
                <Form onSubmit={handleSubmit} className='w-100'>
                  <div className='form-width'>
                  <Form.Group md="4" className='my-4' controlId="validationCustom01">
                    <Form.Label>
                      <p>First name</p>
                    </Form.Label>
                    <Form.Control required type="text" className='my-1' placeholder="First name"/>
                  </Form.Group>
                  <Form.Group md="4" className='my-4' controlId="validationCustom01">
                    <Form.Label>
                      <p>Middle name (if applicable)</p>
                    </Form.Label>
                    <Form.Control type="text" className='my-1' placeholder="Middle name"/>
                  </Form.Group>
                  <Form.Group md="4" className='my-4' controlId="validationCustom01">
                    <Form.Label>
                      <p>Last name</p>
                    </Form.Label>
                    <Form.Control required type="text" className='my-1' placeholder="Last name"/>
                  </Form.Group>
                  </div>
                  <hr className='mt-5'></hr>
                  <div className='d-flex justify-content-between'>
                    <Link to="/"><div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
                      back</div></Link>
                      <Link to="/application/marital-status"><div className='btn continue-btn'>Continue</div></Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default TaxReturnBasicDetails