import React, { useState } from 'react'
import {Form, Container} from 'react-bootstrap';
import "../Login_form/LoginForm.css"
import "./TaxReturnBasicDetails.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { putApiCall } from '../../utils/services/api.service';

function TaxReturnBasicDetails({user_id}) {
  const navigate = useNavigate();

  const [first_name, setFirst_name] = useState("");

  const [middle_name, setMiddle_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const handleFirstName = (event) => setFirst_name(event.target.value);
  const handleMiddleName = (event) => setMiddle_name(event.target.value);
  const handleLastName = (event) => setLast_name(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const user  = {
      first_name,
      middle_name,
      last_name
    }

    putApiCall(`user/${user_id}/update`, user).then(res => 
      {

        if(res) {

          navigate('/application/marital-status')
        }
        console.log(res)
      }
    ).catch(err => console.log(err));
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
                    <Form.Control required type="text" value={first_name} className='my-1' onChange={handleFirstName} placeholder="First name"/>
                  </Form.Group>
                  <Form.Group md="4" className='my-4' controlId="validationCustom01">
                    <Form.Label>
                      <p>Middle name (if applicable)</p>
                    </Form.Label>
                    <Form.Control type="text" className='my-1' value={middle_name} onChange={handleMiddleName} placeholder="Middle name"/>
                  </Form.Group>
                  <Form.Group md="4" className='my-4' controlId="validationCustom01">
                    <Form.Label>
                      <p>Last name</p>
                    </Form.Label>
                    <Form.Control required type="text" className='my-1' value={last_name} onChange={handleLastName} placeholder="Last name"/>
                  </Form.Group>
                  </div>
                  <hr className='mt-5'></hr>
                  <div className='d-flex justify-content-between'>
                    <Link to="/"><div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
                      back</div></Link>
                      <button type="submit" className='btn continue-btn'>Continue</button>
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