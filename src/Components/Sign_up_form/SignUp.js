import React, { useState } from 'react'
import image from "../../assets/images/sreeson.png";
import { Nav, Form, Button, InputGroup } from 'react-bootstrap';
import "./SignUp.css"
import data from "../../assets/Data/country.json"
import { postApiCall } from '../../utils/services/api.service';
import { useNavigate } from 'react-router-dom';




const Sign_up = () => {

  const navigate = useNavigate()
  // const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");
  const [ownQuestion, setOwnQuestion] = useState(false);
  const [email, setEmail] = useState("");
  const [confirm_email, setConfirm_email] = useState("");
  const [security_question, setSecurity_question] = useState("");
  const [answer, setAnswer] = useState("")
  const [phone_number, setPhone_number] = useState("");
  const [user_id, setUser_id] = useState("");


  const [isEmailError, setIsEmailError] = useState(false);
  const [isUserId, setIsUserId] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isPasswordPattren, setIsPasswordPattren] = useState(false);
  const [isemailPattren, setIsemailPattren] = useState(false);
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
      setIsemailPattren(true)
    }else
    setEmail(event.target.value)
    setIsEmailError(false)
    setIsemailPattren(false)
  }

  const answerHandler = (event) => {
    setAnswer(event.target.value)
  }
  const ownQUestionHandler = (event) => {
    if (event.target.value === "Enter your own Question") {
      setOwnQuestion(true)
      setSecurity_question("")
    }
    else {
      setOwnQuestion(false)
    }

    setSecurity_question(event.target.value)
  }
  const ownQUeFormHandler =(event)=>{
    setSecurity_question(event.target.value)
  }


  const confirmEmailHandler = (event) => {
    setConfirm_email(event.target.value);
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

  const handleUserId = (event) => {

    const regularExp = /^[a-zA-Z0-9]{4,}$/
    if (event.target.value.match(regularExp)) {
      setIsUserId(true);
      setUser_id(event.target.value)
    } else {
      setIsUserId(false);
    }
    setUser_id(event.target.value);
  }
  const handleSubmit = (event) => {
event.preventDefault();
    // debugger
    // event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    else if (!email.includes("@")) {
      event.preventDefault();
      event.stopPropagation();
    }
   else if (email !== confirm_email) {
      setIsEmailError(true);
      event.preventDefault();
      event.stopPropagation();
    }
    else if (password.length <= 4) {
      event.preventDefault();
      event.stopPropagation();
    }
    else if (password !== rePassword) {
      event.preventDefault();
      setIsPasswordError(true)
      event.stopPropagation();
    }
else{
    let newData = {
      email,
      confirm_email,
      password,
      phone_number,
      security_question,
      user_id,
      answer,
      phoneCountry
    }
    console.log(newData);
    postApiCall('accounts/create_account', newData)
    .then(res => {
      console.log(data);
      debugger
      console.log(res)
        if (res.status === 200) {
          console.log(res);
          navigate('/login')
        }
        if (res.detail) {
          navigate('/login')
        }

        navigate('/login')

    })
    .catch(error => {
      debugger
    })
  }
    

  };

  return (
    <>
      <div className='py-4 px-2 h-100 d-flex justify-content-center'>
        <div className='my-auto p-5 signup-form'>
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
                    type="email"
                    name="email"
                    placeholder="Enter mail"
                  />
                </Form.Group>
                {isemailPattren && <p className='text-danger'>invalid email</p>}
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
                  <Form.Label>User Id</Form.Label>
                  <Form.Control
                    required
                    onChange={handleUserId}
                    value={user_id}
                    type="text"
                    name="user_id"
                    placeholder=""
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
                  {isPasswordPattren && <p className='text-danger py-1'>Password Pattren not match</p>}

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
                  {isPasswordError && <p className='text-danger py-1'>Password not match</p>}

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
                    <option value="Childhood best friend?">Childhood best friend?</option>
                    <option value="Childhood Hero?">Childhood Hero?</option>
                    <option value="Favourite vacation spot">Favourite vacation spot</option>
                    <option value="Favourite musician">Favourite musician</option>
                    <option value="First Teachers last name">First Teachers last name</option>
                    <option value="Name of first boss">Name of first boss</option>
                    <option value="Your childhood summer spot">Your childhood summer spot</option>
                    <option value="Favourite movie character">Favourite movie character</option>
                    <option value="First boy/girlfriend name">First boy/girlfriend name</option>
                    <option value="Favourite book all time?">Favourite book all time?</option>
                  </Form.Select>

                  {ownQuestion && <Form.Group md="4" className='my-4' controlId="validationCustom01" >
                    <Form.Label> Enter Your Question</Form.Label>
                    <Form.Control
                      required
                      onChange={ownQUeFormHandler}
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
