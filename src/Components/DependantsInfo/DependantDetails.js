import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const DependantDetails = () => {
    const relation = ["Son","Daughter","Grandparent","Grandchild","Brother","Sister","Aunt","Uncle","Nephew","Niece","Father","Mother","Grandfather","Grandmother","Great-aunt","Great-uncle","Son-in-law","Daughter-in-law"]
    const[dependentDetails,setdependentDetails] = useState({first_name:"",last_name:"",relation:"",dob:""})
    const [data, setData] = useState([])

  const depDataHandler = (event)=>{
    setdependentDetails({...dependentDetails,[event.target.name]:event.target.value})
  }
    const dependentHandler = (event)=>{
        event.preventDefault();
        setData([...data,dependentDetails])
        setdependentDetails({first_name:"",last_name:"",relation:"",dob:""})
    }
    const formHandler = (event)=>{
        event.preventDefault()
    }
   
    const removeHandler = (event,indx)=>{
        event.preventDefault()
        let deldata = [...data];
        deldata.splice(indx,1)
        setData(deldata)
        console.log(indx , data,deldata)
    }

  return (
    <Container>
        <h5 className='my-4 text-center'>Tell us about your dependants</h5>
        <form onSubmit={formHandler}>
            {data.length > 0  && data.map((item, indx) => {
                return (
                <Row key={indx}>
                <Col>
                <Form.Group className='my-3'>
                    <Form.Label><p className='my-2'>First name</p></Form.Label>
                    <Form.Control 
                    required
                    onChange={depDataHandler}
                    name="first_name"
                    value={item.first_name}
                    type='text'
                    className='date-input-mail'
                    
                    />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className='my-3'>
                    <Form.Label><p className='my-2'>Last name</p></Form.Label>
                    <Form.Control 
                    required
                    onChange={depDataHandler}
                    name="last_name"
                    value={item.last_name}
                    type='text'
                    className='date-input-mail'
                    
                    />
                </Form.Group>
                </Col>
                <Col>
                 <Form.Group className='my-3'>
                    <Form.Label><p className='my-2'>relationship</p></Form.Label><br />
                    <select  className='date-input-mail' required value={item.relation} onChange={depDataHandler}
                    name="relation">
                    <option selected  none>--Select--</option>
                    {relation.map(rel=>{
                        return(
                            <option key={rel} 
                            
                            >{rel}</option>
                        )
                    })}
                  </select>
                 </Form.Group>
                </Col>
                <Col>
                <Form.Group className='my-3'>
                    <Form.Label><p className='my-2'>Last name</p></Form.Label>
                    <Form.Control 
                    required
                    onChange={depDataHandler}
                    name="dob"
                    value={item.dob}
                    type='date'
                    className='date-input-mail'
                    
                    />
                </Form.Group>
                </Col>
                <div className='my-4 d-flex justify-content-center'>
                        <div className='btn continue-btn'
                         onClick={(event) => removeHandler(event, indx)}
                         >Delete
                         </div>
                </div>
            </Row>
            
            
            )})}
                    <Row>
                        <Col>
                        <Form.Group className='my-3'>
                            <Form.Label><p className='my-2'>First name</p></Form.Label>
                            <Form.Control 
                            required
                            onChange={depDataHandler}
                            name="first_name"
                            value={dependentDetails.first_name}
                            type='text'
                            className='date-input-mail'
                            placeholder=''
                            />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className='my-3'>
                            <Form.Label><p className='my-2'>Last name</p></Form.Label>
                            <Form.Control 
                            required
                            onChange={depDataHandler}
                            name="last_name"
                            value={dependentDetails.last_name}
                            type='text'
                            className='date-input-mail'
                            placeholder=''
                            />
                        </Form.Group>
                        </Col>
                        <Col>
                         <Form.Group className='my-3'>
                            <Form.Label><p className='my-2'>relationship</p></Form.Label><br />
                            <select  className='date-input-mail' required value={dependentDetails.relation} onChange={depDataHandler}
                            name="relation">
                            <option selected  none>--Select--</option>
                            {relation.map(rel=>{
                                return(
                                    <option key={rel} 
                                    
                                    >{rel}</option>
                                )
                            })}
                          </select>
                         </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className='my-3'>
                            <Form.Label><p className='my-2'>Last name</p></Form.Label>
                            <Form.Control 
                            required
                            onChange={depDataHandler}
                            name="dob"
                            value={dependentDetails.dob}
                            type='date'
                            className='date-input-mail'
                            placeholder=''
                            />
                        </Form.Group>
                        </Col>
                    </Row>
                    <div className='my-4 d-flex justify-content-center'>
                        <button className='btn continue-btn' onClick={dependentHandler}>Add another Dependent</button>
                    </div>
          
            <hr className='mt-5'></hr>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
            back</div>
          <div className='btn continue-btn'>Continue</div>
        </div>
        </form>
    </Container>
  )
}

export default DependantDetails