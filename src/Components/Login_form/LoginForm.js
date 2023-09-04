import React from 'react'
import { useState } from 'react';
import image from "../../assets/images/box.png";
import { Nav, Form,  Button } from 'react-bootstrap';
import "./LoginForm.css"

const Login_form = () => {
    // const [validated, setValidated] = useState(false);
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showpass , setShowpass] = useState(true)

    const showPassword = ()=>{
            setShowpass(showpass=>{
                return !showpass
            })
    }
    
    const passwordHandler = (event)=>{
      setPassword(event.target.value)
   }

   const emailHandler = (event) =>{
     setEmail(event.target.value)
   }

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (!email.includes("@")){
        event.preventDefault();
        event.stopPropagation();
        alert("email not correct")
      }

      else if(password.length <= 4){
        event.preventDefault();
        event.stopPropagation();
        alert("password must be more then 5 characters")
      }
  
      // setValidated(true);
    };
  return (
    <>
    <div className='py-4 px-2 h-100 d-flex justify-content-center'>
        <div className='my-auto'>
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
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            onChange={emailHandler}
            value={email}
            type="gmail"
            placeholder="Enter mail"
            
          />
        </Form.Group>
        <Form.Group  md="4" className='my-3' controlId="validationCustom01">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            onChange={passwordHandler}
            value={password}
            type={showpass ? "password" : "text"}
            placeholder=" Enter Password"
            
          />
           <Form.Group className="position-relative my-3">
            <Form.Check
              name="terms"
              label="show Password"
              onChange={showPassword}
            />
          </Form.Group>
          
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
