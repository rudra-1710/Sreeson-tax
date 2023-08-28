import React from 'react'
import { useState } from 'react';
import image from "../../assets/images/box.png";
import { Nav, Form,  Button } from 'react-bootstrap';
import "./Sign_up.css"




const Sign_up = () => {
    // const [validated, setValidated] = useState(false);
    const [password, setPassword] = useState("");
    const [rePassword, setRepassword] = useState("");
    const [ownQuestion, setOwnQuestion] = useState(false);
    const[email, setEmail] = useState("");
    const[questions ,setQuestions] =  useState("");
    const [answer , setAnswer] = useState("")
    const [dataValues, setDataValues] = useState([]);
    
  const passwordEnter = (event)=>{
     setPassword(event.target.value)
  }

  const rePasswordEnter = (event)=>{
    setRepassword(event.target.value)
  }
  const emailHandler = (event) =>{
    setEmail(event.target.value)
  }
  const questionHandler = (event)=>{
    setQuestions(event.target.value)
  }
  const answerHandler = (event)=>{
    setAnswer(event.target.value)
  }
  const ownQUestionHandler =(event)=>{
    if(event.target.value === "Enter your own Question"){
    setOwnQuestion(true)
    setQuestions(event.target.value)
    }
  else {
  setOwnQuestion(false)
  }

  setQuestions(event.target.value)
  }

  const dataList= [...dataValues];
  
    const handleSubmit = (event) => {
      // event.preventDefault();
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
      else if(password !== rePassword){
        event.preventDefault();
        event.stopPropagation();
        alert("Password not match");
      }
      
      let newData = {
        email:email,
        password:rePassword,
        question:questions,
        answer:answer
      }
      dataList.push(newData)
      setDataValues(dataList)
      console.log(dataList)
      // setPassword("");
      // setRepassword("");
      // setOwnQuestion(false)
      // setEmail("");
      // setQuestions("");
      // setAnswer("")
      // setValidated(true);

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
                    <h3>Sign Up to Sreeson Account</h3>
                    <p>One account connected to everything  Sreeson, including Tax .</p>
                    <Nav.Link className='theme-color d-inline'><p className='d-inline'>Learn more</p></Nav.Link> 
                </div>
          <Form   onSubmit={handleSubmit} className='py-2'>
          <Form.Group  md="4" className='my-4' controlId="validationCustom01" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            onChange={emailHandler}
            value={email}
            type="gmail"
            placeholder="Enter mail"
          />

        </Form.Group>
        <Form.Group  md="4" className='my-4' controlId="validationCustom01" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            value={password}
            type="text"
            placeholder=" Enter Password"
            onChange={passwordEnter}
          />

        <Form.Group  md="4" className='my-4' controlId="validationCustom01" >
            <Form.Label> Confirm Password</Form.Label>
              <Form.Control
               required
               value={rePassword}
               type= "password"
               onChange={rePasswordEnter}
               placeholder="Re-Enter Password"
          />
        </Form.Group>

        <Form.Label > Security Question</Form.Label>
        <Form.Select onChange={ownQUestionHandler} aria-label="Default select example">
            <option>Select your question</option>
            <option value="What is your Nick name?">What is your Nick name?</option>
            <option value="Who is your best friend">Who is your best friend</option>
            <option value="your school name">your school name</option>
            <option value="Enter your own Question">Enter your own Question</option>
        </Form.Select>

        {ownQuestion && <Form.Group  md="4" className='my-4'  controlId="validationCustom01" >
            <Form.Label> Enter Your Question</Form.Label>
              <Form.Control
               required
               onChange={questionHandler}
               value={questions}
               type= "text"
               placeholder="Enter your Question"
          />
        </Form.Group>}

        <Form.Group  md="4" className='my-4' controlId="validationCustom01" >
            <Form.Label> Answer</Form.Label>
              <Form.Control
               required
               onChange={answerHandler}
               value={answer}
               type= "text"
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
