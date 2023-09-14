import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const DependantDetails = () => {
    const depDetails = useNavigate()
    const dep_relation = ["Son","Daughter","Grandparent","Grandchild","Brother","Sister","Aunt","Uncle","Nephew","Niece","Father","Mother","Grandfather","Grandmother","Great-aunt","Great-uncle","Son-in-law","Daughter-in-law"]
    const[dependentDetails,setdependentDetails] = useState({dep_first_name:"",dep_last_name:"",dep_relation:"",dep_dob:""})
    const [data, setData] = useState([])
    const[detailForm, setdetailForm]= useState(true)

  const depDataHandler = (event)=>{
    setdependentDetails({...dependentDetails,[event.target.name]:event.target.value})
  }
    const dependentHandler = (event)=>{
        event.preventDefault();
        setdetailForm(false)
        setData([...data,dependentDetails])
        setdependentDetails({dep_first_name:"",dep_last_name:"",dep_relation:"",dep_dob:""})
        console.log(dependentDetails)
        const dep_data = [...data,dependentDetails]
        console.log(dep_data)
        depDetails('/application/personal-info')
    }
    const formHandler = (event)=>{
        event.preventDefault()
        setData([...data,dependentDetails])
        setdependentDetails({dep_first_name:"",dep_last_name:"",dep_relation:"",dep_dob:""})
            
            
        
    }
   
    const removeHandler = (event,indx)=>{
        event.preventDefault()
        let deldata = [...data];
        deldata.splice(indx,1)
        setData(deldata)
        // console.log(indx , data,deldata)
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
                    name="dep_first_name"
                    value={item.dep_first_name}
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
                    name="dep_last_name"
                    value={item.dep_last_name}
                    type='text'
                    className='date-input-mail'
                    
                    />
                </Form.Group>
                </Col>
                <Col>
                 <Form.Group className='my-3'>
                    <Form.Label><p className='my-2'>dep_relationship</p></Form.Label><br />
                    <select  className='date-input-mail' required value={item.dep_relation} onChange={depDataHandler}
                    name="dep_relation">
                    <option selected  none>--Select--</option>
                    {dep_relation.map(rel=>{
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
                    name="dep_dob"
                    value={item.dep_dob}
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
                            name="dep_first_name"
                            value={dependentDetails.dep_first_name}
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
                            name="dep_last_name"
                            value={dependentDetails.dep_last_name}
                            type='text'
                            className='date-input-mail'
                            placeholder=''
                            />
                        </Form.Group>
                        </Col>
                        <Col>
                         <Form.Group className='my-3'>
                            <Form.Label><p className='my-2'>dep_relationship</p></Form.Label><br />
                            <select  className='date-input-mail' required value={dependentDetails.dep_relation} onChange={depDataHandler}
                            name="dep_relation">
                            <option value="" hidden>--Select--</option>
                            {dep_relation.map(rel=>{
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
                            <Form.Label><p className='my-2'>date of birth</p></Form.Label>
                            <Form.Control 
                            required
                            onChange={depDataHandler}
                            name="dep_dob"
                            value={dependentDetails.dep_dob}
                            type='date'
                            className='date-input-mail'
                            placeholder=''
                            />
                        </Form.Group>
                        </Col>
                    </Row>
                    <div className='my-4 d-flex justify-content-center'>
                        <button className='btn continue-btn' 
                        
                        >Add another Dependent</button>
                    </div>
          
            <hr className='mt-5'></hr>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
            back</div>
          <button className='btn continue-btn ' onClick={dependentHandler}>Continue</button>
        </div>
        </form>
    </Container>
  )
}

export default DependantDetails