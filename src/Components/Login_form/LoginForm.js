import React from 'react'
import { useState } from 'react';
import image from "../../assets/images/sreeson.png";
import { Nav, Form,  Button } from 'react-bootstrap';
import "./LoginForm.css"
import { postApiCall } from '../../utils/services/api.service';

const Login_form = () => {
    // const [validated, setValidated] = useState(false);
    const[identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [showpass , setShowpass] = useState(true);
    const [validIdentifier, setValidIdentifier] =  useState(false)
    const [validePass, setValidePass] =  useState(false)

    const showPassword = ()=>{
            setShowpass(showpass=>{
                return !showpass
            })
    }
    
    const passwordHandler = (event)=>{
      setPassword(event.target.value)
      setValidePass(false)      
   }

   const identifierHandler = (event) =>{
    setIdentifier(event.target.value)
   }

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      if(password.length <= 4){
        event.preventDefault();
        event.stopPropagation();
        setValidePass(true)
      }
  
      const login = {
        identifier,
        password
      }
      postApiCall('accounts/login', login)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          console.log(res);
        }
        if (res.status ===422) {
          console.log(res);
        }
      })
      .catch(err => console.log(err));
    };
  return (
    <>
    <div className='py-4 px-2 h-100 d-flex justify-content-center '>
        <div className='my-auto p-5 login-form'>
    <div className='d-flex justify-content-center '>
        <img  src={image} alt="logo" className='logo-size'/>
    </div>
      <div className='login-box d-flex justify-content-center py-5'>
            <div>
                <div>
                    <h3>Sign in to Sreeson Account</h3>
                    <p>One account connected to everything  Sreeson, including Tax .</p>
                    <Nav.Link className='theme-color d-inline'><p className='d-inline'>Learn more</p></Nav.Link> 
                </div>
                <Form  onSubmit={handleSubmit} className='py-2'>
                <Form.Group  md="4" className='my-4' controlId="validationCustom01">
          <Form.Label>Email or Phone</Form.Label>
          <Form.Control
            required
            onChange={identifierHandler}
            name="email"
            value={identifier}
            type="text"
            placeholder=""
            
          />
          {validIdentifier && <p className='invalid'>Email or Phone is Invalid</p>}

        </Form.Group>
        
        <Form.Group  md="4" className='my-3' controlId="validationCustom01">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            onChange={passwordHandler}
            name='password'
            value={password}
            type={showpass ? "password" : "text"}
            placeholder=" Enter Password"
            
          />
          {validePass && <p className='invalid'>password must contain at least 8 characters</p>}
          </Form.Group>
           <Form.Group className="position-relative my-3">
            <Form.Check
              name="terms"
              label="show Password"
              onChange={showPassword}
            />
          </Form.Group>
          
        
        <div className="d-grid ">
        <Button type="submit" className='my-3 login-btn'>Submit form</Button>
        </div>
                </Form>
            </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Login_form
