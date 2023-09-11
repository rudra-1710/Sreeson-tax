import React from 'react'
import { useState } from 'react';
import image from "../../assets/images/box.png";
import { Nav, Form, Button, InputGroup } from 'react-bootstrap';
import "./SignUp.css"
import data from "../../assets/Data/country.json"
import { postApiCall } from '../../utils/services/api.service';




const Sign_up = () => {

  // const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");
  const [ownQuestion, setOwnQuestion] = useState(false);
  const [email, setEmail] = useState("");
  const [confirm_email, setConfirm_email] = useState("");
  const [security_question, setSecurity_question] = useState("");
  const [answer, setAnswer] = useState("")
  const [phone_number, setPhone_number] = useState("");


  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isPasswordPattren, setIsPasswordPattren] = useState(false);
  // eslint-disable-next-line
  const [phoneCountry, setPhoneContry] = useState({});

  const passwordEnter = (event) => {
    const regularExp = /^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/;
    if (!event.target.value.match(regularExp)) {
      setPassword(event.target.value);
      setIsPasswordPattren(true)
    } else {
      setIsPasswordPattren(false)
    }
    setPassword(event.target.value)
  }

  const rePasswordEnter = (event) => {
    setRepassword(event.target.value);
    if (password !== event.target.value) {
      setIsPasswordError(true)
    }
    setIsPasswordError(false)
  }
  const emailHandler = (event) => {
    const regularExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    if (event.target.value.match(regularExp)) {
      setEmail(event.target.value)
    }
    setEmail(event.target.value)
  }

  const answerHandler = (event) => {
    setAnswer(event.target.value)
  }
  const ownQUestionHandler = (event) => {
    if (event.target.value === "Enter your own Question") {
      setOwnQuestion(true)
      setSecurity_question(event.target.value)
    }
    else {
      setOwnQuestion(false)
    }

    setSecurity_question(event.target.value)
  }


  const confirmEmailHandler = (event) => {
    setConfirm_email(event.target.value);

    if (email !== event.target.value) {
      setIsEmailError(true)
    }
    setIsEmailError(false)
  }

  const handlePhone = (event) => {
    const value = event.target.value
    setPhone_number(value)
  }
  const handleCountrySelection = (event) => {
    data.map(item => {
      if (item.code === event.target.value) {
        setPhoneContry(item)
      }
      return item;
    })
  }

  const handleSubmit = (event) => {
event.preventDefault();
    debugger
    // event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!email.includes("@")) {
      event.preventDefault();
      event.stopPropagation();
    } else if (password.length <= 4) {
      event.preventDefault();
      event.stopPropagation();
    } else if (password !== rePassword) {
      event.preventDefault();
      event.stopPropagation();
    }

    let newData = {
      email,
      confirm_email,
      password,
      phone_number,
      security_question,
      answer,
      phoneCountry
    }
    
    console.log(newData);

    postApiCall('accounts/create_account')
    .then(res => {
      console.log(data);
      debugger
      console.log(res)
        if (res.status === 200) {
          console.log(res);
        }
        if (res.status ===422) {
          console.log(res);
        }
    })
    .catch(error => {
      debugger
    })
  };

  return (
    <>
      <div className='py-4 px-2 h-100 d-flex justify-content-center'>
        <div className='my-auto'>
          <div className='d-flex justify-content-center '>
            <img src={image} alt="logo" className='logo-size' />
          </div>
          <div className='login-box d-flex justify-content-center py-5'>
            <div>
              <div>
                <h3>Sign Up to Sreeson Account</h3>
                <p>One account connected to everything  Sreeson, including Tax .</p>
                <Nav.Link className='theme-color d-inline'><p className='d-inline'>Learn more</p></Nav.Link>
              </div>
              <Form onSubmit={handleSubmit} className='py-2' name="account">
                <Form.Group md="4" className='my-4' controlId="validationCustom01" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    onChange={emailHandler}
                    value={email}
                    type="gmail"
                    name="email"
                    placeholder="Enter mail"
                  />
                </Form.Group>
                <Form.Group md="4" className='my-4' controlId="validationCustom01" >
                  <Form.Label>Confirm email</Form.Label>
                  <Form.Control
                    required
                    onChange={confirmEmailHandler}
                    value={confirm_email}
                    type="gmail"
                    name="confirm_email"
                    placeholder="Enter mail"
                  />
                </Form.Group>
                {isEmailError && <p className='text-danger'>Email not match</p>}
                <Form.Group md="4" className='my-4' controlId="validationCustom01" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    value={password}
                    type="password"
                    placeholder=" Enter Password"
                    onChange={passwordEnter}
                  />
                  {isPasswordPattren && <p className='text-danger'>Password Pattren not match</p>}

                  <Form.Group md="4" className='my-4' controlId="validationCustom01" >
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control
                      required
                      value={rePassword}
                      type="password"
                      onChange={rePasswordEnter}
                      placeholder="Re-Enter Password"
                    />
                  </Form.Group>
                  {isPasswordError && <p className='text-danger'>Password not match</p>}

                  <Form.Label > Phone</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Select onChange={handleCountrySelection} aria-label="Default select example"  variant="outline-secondary">
                      {/* <option>Country (+)</option> */}
                      {data.map((item, indx) => (<option value={item.code} key={indx}>{item?.code} {item?.emoji} {item?.dial_code}</option>) )}
                    </Form.Select>

                    <Form.Control
                      required
                      value={phone_number}
                      type="tel"
                      placeholder="phone number"
                      onChange={handlePhone}
                    />
                  </InputGroup>

                  <Form.Label > Security Question</Form.Label>
                  <Form.Select onChange={ownQUestionHandler} aria-label="Default select example" name="security_question">
                    <option>Select your question</option>
                    <option value="What is your Nick name?">What is your Nick name?</option>
                    <option value="Who is your best friend">Who is your best friend</option>
                    <option value="your school name">your school name</option>
                    <option value="Enter your own Question">Enter your own Question</option>
                  </Form.Select>

                  {ownQuestion && <Form.Group md="4" className='my-4' controlId="validationCustom01" >
                    <Form.Label> Enter Your Question</Form.Label>
                    <Form.Control
                      required
                      onChange={ownQUestionHandler}
                      value={security_question}
                      type="text"
                      name="question"
                      placeholder="Enter your Question"
                    />
                  </Form.Group>}

                  <Form.Group md="4" className='my-4' controlId="validationCustom01" >
                    <Form.Label> Answer</Form.Label>
                    <Form.Control
                      required
                      onChange={answerHandler}
                      value={answer}
                      type="text"
                      name="answer"
                      placeholder="Enter your Answer"
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

export default Sign_up
